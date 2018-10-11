import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
    redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
    audience: process.env.REACT_APP_AUTH0_API_URL,
    responseType: 'token id_token',
    scope: process.env.REACT_APP_AUTH0_SCOPES,
  });

  userProfile;

  login = () => {
    this.auth0.authorize();
  }

  logout = () => {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.userProfile = null;
  }

  handleAuthentication = () => {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) {
          return reject(err);
        } 
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
        }
        resolve();
      });
    });
  }

  setSession(authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  getAccessToken = () => {
    return localStorage.getItem('access_token');
  }

  getProfile = () => {
    return new Promise((resolve, reject) => {
      if (this.userProfile) {
        return resolve(this.userProfile);
      }
      this.auth0.client.userInfo(this.getAccessToken(), (err, profile) => {
        if (err) {
          return reject(err);
        }
        this.userProfile = profile;
        resolve(profile);
      });
    });
  }

  isAuthenticated = () => {
    // Check whether the current time is past the 
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}
