const moment = require('moment');
const start = moment();

const fs = require('fs');
const { asREM } = require('./lib/sizeUtil.js');
const { generateRules } = require('./lib/generateRules.js');

const config = {
    color: {
        'grey-900': `#1F2021`,
        'grey-700': `#51565A`,
        'grey-500': `#969FA7`,
        'grey-300': `#D0DAE3`,
        'grey-100': `#E7EDF2`,
    },
    size: {
        1: asREM(1),
        2: asREM(2),
        3: asREM(3),
        4: asREM(4),
        5: asREM(5),
        6: asREM(6),
        8: asREM(8),
        10: asREM(10),
        12: asREM(12),
        14: asREM(14),
        16: asREM(16),
        18: asREM(18),
        20: asREM(20),
        24: asREM(24),
        28: asREM(28),
        32: asREM(32),
        36: asREM(36),
        40: asREM(40),
        56: asREM(56),
        64: asREM(64),
    },
    font: {
        base: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    },
};

const css = generateRules(`html`, config);

fs.writeFile('brochure.css', css, (error) => {
    if (error) console.log(error);

    var end = moment();
    var timeSpent = end.diff(start, 'miliseconds');

    console.log(`CSS built in ${timeSpent}ms!`);
});

module.exports = config;
