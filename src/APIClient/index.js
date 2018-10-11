import Logger from '../Logger';

export default class Client {

  constructor(apiURL, loggingEnabled) {
    if (apiURL === undefined) {
      const url = process.env.REACT_APP_API_URL;
      if (url === undefined) {
        throw new Error("API URL cannot be undefined");
      }
      this.apiURL = url;
    } else {
      this.apiURL = apiURL;
    }

    if (loggingEnabled === undefined) {
      const enabled = process.env.REACT_APP_LOGGING_ENABLED;
      if (enabled === undefined) {
        this.loggingEnabled = false;
      } else {
        this.loggingEnabled = enabled
      }
    } else {
      this.loggingEnabled = loggingEnabled;
    }
    this._logger = new Logger();
  }

  _getHeaders(token) {
    return new Headers({
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
  }

  _request(url, method, token, data) {
    if (token === undefined) {
      throw new Error("token cannot be undefined");
    }
    var headers = this._getHeaders(token);
    this._logger.info({method: method, headers: headers.map, url: url, data: data});

    return fetch(url, {
      method: method,
      headers: headers,
    })
    .then((response) => {
      this._logger.info({response: response});
    });
  }

  getProfiles(token) {
    return this._request(this._getProfileURL(), "GET", token);
  }

  getProfile(token, userId) {
    return this._request(this._getProfileURL(userId), "GET", token);
  }

  postProfile(token, data) {
    return this._request(this._getProfileURL(userId), "POST", token, data);
  }

  deleteProfile(token, userId) {
    return this._request(this._getProfileURL(userId), "DELETE", token);
  }

  _getProfileURL(userId) {
    var url = this.apiURL + "/users/";
    if (userId !== undefined) {
      return url + userId + "/";
    }
    return url;
  }

  _getAccountURL(userId, accountId) {
    if (userId === undefined) {
      throw new Error("user ID cannot be undefined");
    }
    var url = this.apiURL + "/users/" + userId + "/";
    if (accountId !== undefined) {
      return url + accountId + "/";
    }
    return url;
  }

  getAccounts(token, userId) {
    return this._request(this._getAccountURL(userId), "GET", token)
  }

  getAccount(token, userId, accountId) {
    return this._request(this._getAccountURL(userId, accountId), "GET", token)
  }

  postAccount(token, userId, data) {
    return this._request(this._getAccountURL(userId), "POST", token, data)
  }

  deleteAccount(token, userId) {
    return this._request(this._getAccountURL(userId, accountId), "DELETE", token)
  }
}