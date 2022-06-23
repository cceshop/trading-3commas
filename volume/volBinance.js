require('dotenv').config({path: '../.env', override: true});
const Binance = require('node-binance-api');
const binance = new Binance().options({
  APIKEY: process.env.BINANCE_APIKEY,
  APISECRET: process.env.BINANCE_SECRET
});

// module scope variables
var id, timeframe, value, vtype, pair;

// Make sure your argument name doesn't conflict with variables set above
setId = function (i) {
  id = i;
}

setTimeframe = function (tf) {
  timeframe = tf;
};

setValue = function (val) {
  value = val;
};

setType = function (t) {
  vtype = t;
};

setPair = function (p) {
  pair = p;
}

// You're returning an object with property values set above
getVolume = function () {
    return {
      id: id,
      timeframe: timeframe,
      value: value,
      type: vtype,
      pair: pair
    };
};

setVolume = function (tf, p) {
  binance.candlesticks(p, tf, (error, ticks, symbol) => {
    var prev_tick = ticks[ticks.length - 2];
    var [time, open, high, low, close, volume, closeTime, assetVolume, trades, buyBaseVolume, buyAssetVolume, ignored] = prev_tick;

    if (close > open) {
      var t = 'sell';
    } else {
      var t = 'buy';
    }

    setId(time);
    setTimeframe(tf);
    setValue(volume);
    setType(t);
    setPair(p);
  }, {limit: 2});
};

module.exports = {
  set: setVolume,
  get: getVolume
};