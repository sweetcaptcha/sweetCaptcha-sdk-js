var should = require('should');
var expect = require('expect.js');

var sweetcaptcha = new require('..')(1, 'key', 'secret');

describe('sweetcaptcha', function(){

  it('should have an app id', function(done) {

    sweetcaptcha.id.should.equal(1);
    sweetcaptcha.key.should.equal('key');
    sweetcaptcha.secret.should.equal('secret');
    done();

  });

  it('should check api health', function(done){
    sweetcaptcha.health(function(err, response){
      expect(err).to.equal(null);
      response.ok.should.equal(true);
      done();
    });
  });

  it('should fail getting html', function(done){
    sweetcaptcha.api('test', function(err, html){
      err.should.match(/invalid app/i);
      done();
    });
  });

});



