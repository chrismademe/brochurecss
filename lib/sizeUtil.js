exports.asPX = (value) => {
    return `${value * 4}px`;
};

exports.asREM = (value) => {
    return `${(value * 4) / 16}rem`;
};
