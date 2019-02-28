// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var tmp = 0;
var sum = {};

if (currency > 10000) {
    return sum = {"error": "You are rich, my friend! We don't have so much coins for exchange"};
}else if (currency < 1) {
    return sum = {};
}else {

            if (currency>=50) {
                while (currency>=50) {
                    currency = currency - 50;
                    tmp++;
                }
                sum['H'] = tmp;
                tmp = 0;
            }

            if (currency>=25) {
                while (currency>=25) {
                    currency = currency - 25;
                    tmp++;
                }
                sum['Q'] = tmp;
                tmp = 0;
            }

            if (currency>=10) {
                while (currency>=10) {
                    currency = currency - 10;
                    tmp++;
                }
                sum['D'] = tmp;
                tmp = 0;
            }

            if (currency>=5) {
                while (currency>=5) {
                    currency = currency - 5;
                    tmp++;
                }
                sum['N'] = tmp;
                tmp = 0;
            }

            if (currency>=1) {
                while (currency>=1) {
                    currency = currency - 1;
                    tmp++;
                }
                sum['P'] = tmp;
                tmp = 0;
            }
            return sum;
}

}

