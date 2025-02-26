module.exports = {
    extends: [
        'stylelint-config-standard',
    ],
    rules: {
        'alpha-value-notation': 'number',
        'custom-property-pattern': null,
        'hue-degree-notation': null,
        'import-notation': null,
        'keyframes-name-pattern': null,
        'media-feature-range-notation': null,
        'no-descending-specificity': null,
        'property-no-vendor-prefix': null,
        'selector-class-pattern': null,
        'selector-id-pattern': null,
        'selector-not-notation': null,
    },
    overrides: [
        {
            files: ['**/*.less'],
            customSyntax: 'postcss-less',
            rules: {
                'function-no-unknown': null,
                "media-query-no-invalid": null,
                'no-invalid-position-at-import-rule': null,
            }
        }
    ]
}
