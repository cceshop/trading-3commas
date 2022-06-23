exports.heikin_ashi_smooth = {
    id: BigInt,
    timeframe: String,
    buy: Boolean,
    sell: Boolean,
    pair: String
};

function HeikinAshiSmooth(id, timeframe, buy, sell) {
    if (!(this instanceof HeikinAshiSmooth)) {
        return new HeikinAshiSmooth(id, timeframe, buy, sell, pair);
    }

    this.heikin_ashi_smooth = {
        id: id,
        timeframe: timeframe,
        buy: buy,
        sell: sell,
        pair: pair
    };
};

HeikinAshiSmooth.prototype.get = function get() {
    return this.has;
};

module.exports = HeikinAshiSmooth;