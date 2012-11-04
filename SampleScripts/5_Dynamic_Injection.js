var obj = {
  test: function(){
    console.log('Hallo');
  }
};

obj.test();

obj._test = obj.test;
obj.test = function() { this._test(); console.log('Welt') };

obj.test();


phantom.exit();