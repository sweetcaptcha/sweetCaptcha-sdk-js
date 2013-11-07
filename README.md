# sweetCaptcha Javascript SDK

### What's this?

sweetCaptcha is a free captcha service putting the users and your website at first priority.
This is a new and fresh graphical captcha focused on enhanced user experience, so instead of using difficult and boring text, SweetCaptcha offers a 

![SweetCaptcha](https://s3.amazonaws.com/sweetcaptcha/sweetcaptcha-preview.png)

See a live demo [here](http://sweetcaptcha.com/?ref=github-js)

### Installation

1. Sign up your website at [http://sweetcaptcha.com](http://sweetcaptcha.com/?ref=github-js) and get your credentials
2. NPM install the SDK using `npm install --save sweetcaptcha`
3. Init and include the SDK in your code `var sweetcaptcha = new require('sweetcaptcha')(app_id, app_key, app_secret)`
4. Follow the example and enjoy your sweetCaptcha

### Public methods

1. `sweetcaptcha.api('get_html', function(err, html){ ... })`
2. `sweetcaptcha.api('check', {sckey: formSckey, scvalue: formScvalue}, function(err, valid) { ... })`
3. `sweetcaptcha.api('test', function(err, response) { ... })`

### Test

`make test`

### Support and Contact

Visit our [website](http://sweetcaptcha.com/?ref=github-js) for more information

*Updated November 5, 2013*