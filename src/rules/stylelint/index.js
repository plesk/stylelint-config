/**
 * @see {@link https://stylelint.io/user-guide/rules/ | Stylelint Rules}
 */
module.exports = {
    ...require('./possible-errors'),
    ...require('./limit-language-features'),
    ...require('./stylistic-issues'),
};
