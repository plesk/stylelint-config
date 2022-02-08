/**
 * @see {@link https://stylelint.io/user-guide/rules/list/ | Stylelint Rules}
 */
module.exports = {
    ...require('./avoid-errors'),
    ...require('./enforce-conventions'),
    ...require('./stylistic-issues'),
};
