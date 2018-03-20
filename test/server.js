// require chai for matchers
// require require request package to test HTTP request

var expect = require('chai').expect;
var request = require('request');

describe("Colour Code Converter API", function (){
  describe('RGB to Hex conversion', function(){
    // store the full path to the resource we want to test in a variable. Before running tests run
    // webserver on localhost port 3000
    var url = 'http://localhost:3000/rgbToHex?red=255&green=255&blue=255';

    it('returns status 200', function(){
      // to make the request use the request package - pass two arguments to it, a URL to visit
      // and a function to be invoked when the request is completed
      // set up the expectations inside those callback functions
      request(url, function(error, response, body){
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
    it('returns the color in hex', function(){
      request(url, function(error, response, body){
        expect(body).to.equal('ffffff');
        done();
      });
    });
  });
  describe('Hex to RGB conversion', function(){
    var url = 'http://localhost:3000/hexToRgb?hex=00ff00';
    it('returns status 200', function(){
      request(url, function(error, response, body){
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
    it('returns the color in RGB', function(){
      request(url, function(err, res, body){
        expect(body).to.equal("[0,255,0]");
        done();
      });
    });
  });
});
