var request = require('superagent');

module.exports = function(id, key, secret, url) {

  // init
  (function(id, key, secret, api)
    {
      this.id = id;
      this.key = key;
      this.secret = secret;
      this.url = url || 'http://www.sweetcaptcha.com/api.php';
    }
  ).call(this, id, key, secret, url);


  this.health = function(callback) {
    request
      .get(this.url.replace('api.php', 'status'))
      .end(function(response){
        callback(null, response.body);
      });
  }


  this.api = function(method, params, callback) {
    var _params = {
        app_id: this.id
      , app_key: this.key
      , method: method
      , platform: 'js-sdk'
    }

    if (typeof params === "function") {
      callback = params 
    }
    else {
      for (k in params) {
        _params[k] = params[k];
      }
    }

    request
      .post(this.url)
      .send(_params)
      .end(function(err, response) {
        if (err) return callback(err);
        if (response.body && response.body.error) return callback(response.body.error);
        return callback(null, typeof(response.body) === "object" && response.body.error !== undefined ? response.body : response.text);
      });
  }

  return this;

}
