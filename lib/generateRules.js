const _ = require('lodash');
const formatCSS = require('cssbeautify');

exports.generateRules = (selector, props) => {
    let rules = [];
    _(props).forEach((items, group) => {
        _(items).forEach((value, prop) => {
            rules.push(`--${group}-${prop}: ${value}`);
        });
    });

    let css = `${selector} {${rules.join(';')}}`;
    return formatCSS(css);
};
