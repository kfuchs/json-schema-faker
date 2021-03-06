'use strict';

var faker = require('faker');

var random = module.exports = function(min, max, defMin, defMax) {
  defMin = typeof defMin === 'undefined' ? random.MIN_NUMBER : defMin;
  defMax = typeof defMax === 'undefined' ? random.MAX_NUMBER : defMax;

  min = typeof min === 'undefined' ? defMin : min;
  max = typeof max === 'undefined' ? defMax : max;

  if (min !== +min) {
    throw new RangeError('Value ' + JSON.stringify(min) + ' is not-a-number');
  }

  if (max !== +max) {
    throw new RangeError('Value ' + JSON.stringify(min) + ' is not-a-number');
  }

  if (max < min) {
    throw new RangeError('Invalid range between: ' + min + ', ' + max);
  }

  return faker.random.number({
    min: min,
    max: Math.max(max, min + 1)
  });
};

random.shuffle = function(obj) {
  var copy = obj.slice(),
      length = obj.length;

  for (; length > 0;) {
    var key = Math.floor(Math.random() * length),
        tmp = copy[--length];

    copy[length] = copy[key];
    copy[key] = tmp;
  }

  return copy;
};

random.pick = function(obj) {
  return obj[Math.floor(Math.random() * obj.length)];
};

random.MIN_NUMBER = -100;
random.MAX_NUMBER = 100;
