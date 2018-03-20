// expect key word comes from the chai library - need to require this
var expect = require('chai').expect;
var converter = require('../app/converter');

describe("Colour Code Converter", function(){
  describe('RGB to Hex conversion', function(){
    describe('converts basic colors', function(){
      it('converts the redHex', function(){
        var redHex   = converter.rgbToHex(255, 0, 0);
        expect(redHex).to.equal("ff0000");
      });
      it('converts the blueHex', function(){
        var blueHex  = converter.rgbToHex(0, 0, 255);
        expect(blueHex).to.equal("0000ff");
      })
      it('converts greenHex', function(){
        var greenHex = converter.rgbToHex(0, 255, 0);
        expect(greenHex).to.equal("00ff00");
      })
    });
  });
  describe('Hex to RGB conversion', function(){
      describe('converts basic colors', function(){
      it('converts redHex to RGB', function(){
        var red   = converter.hexToRgb("ff0000");
        // used the deep.equal matcher because I am comparing two nested objects. .deep tells
        //chai to match all elements in array one by one
        expect(red).to.deep.equal([255, 0, 0]);
      });
      it('converts greenHex to RGB', function(){
        var green = converter.hexToRgb("00ff00");
        expect(green).to.deep.equal([0, 255, 0]);
      })
      it('converts blueHex to RGB', function(){
        var blue  = converter.hexToRgb("0000ff");
        expect(blue).to.deep.equal([0, 0, 255]);
      })
    });
  });
});
