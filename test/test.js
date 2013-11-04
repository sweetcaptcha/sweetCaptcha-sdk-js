var sweetcaptcha = new require('..')(1, 'key', 'secret');

describe('sweetcaptcha', function(){

  it('should have an app id', function(done) {

    sweetcaptcha.id.should.equal(1);
    done();

  });

});



