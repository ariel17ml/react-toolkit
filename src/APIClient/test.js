import Client from './';

describe('Client', () => {
  var token = "123-token-abc";

  it('is truthy', () => {
    expect(Client).toBeTruthy();
  });

  describe('on _request', () => {
    var c = new Client("", true);
    var userId = "user-id-fake";

    it('throws an error when token is undefined', () => {
      expect(() => {
        c._request("/whatever", "GET");
      }).toThrow("token cannot be undefined");
    });

    it('fails for GET by network error, when host is empty', async () => {
      expect.assertions(1);
      await expect(c._request("/", "GET", token)).rejects.toEqual(
        new TypeError('Network request failed')
      );
    });
  });

  describe('on profile URL', () => {
    var c = new Client("", true);
    var userId = "user-id-fake";

    it('using parameter', () => {
      var url = "/users/"+userId+"/";
      expect(c._getProfileURL(userId)).toEqual(url);
    });

    it('without parameter', () => {
      var url = "/users/";
      expect(c._getProfileURL()).toEqual(url);
    });
  });

  describe('on GET profiles', () => {
    var c = new Client("", true);
    var userId = "user-id-fake";

    // TODO mock expected
  });

  describe('on account URL', () => {
    var c = new Client("", true);
    var userId = "user-id-fake";
    var accountId = 1;

    it('fails if user ID is undefined', () => {
      expect(() => {
        c._getAccountURL();
      }).toThrow("user ID cannot be undefined");
    });

    it('without account ID parameter', () => {
      var url = "/users/"+userId+"/";
      expect(c._getAccountURL(userId)).toEqual(url);
    });

    it('using parameters', () => {
      var url = "/users/"+userId+"/"+accountId+"/";
      expect(c._getAccountURL(userId, accountId)).toEqual(url);
    });
  });

  describe('on GET accounts', () => {
    var c = new Client("", true);
    var userId = "user-id-fake";

    // TODO mock expected
  });
;})
