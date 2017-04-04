module.exports = {
  extends: 'airbnb',

  env: {
    es6: true,
    mocha: true,
    node: true,
  },

  plugins: [
    'react',
    'jsx-a11y',
    'import',
  ],

  rules: {

    // http://eslint.org/docs/rules/max-len
    'max-len': [
      'error',
      120,
      2,
      {
        ignoreUrls: true,
      },
    ],

    /*
     * Airbnb doesn't allow backtick usage. Doesn't make sense so with this
     * config we allow both `single quote` and `backtick` to be used.
     *
     * http://eslint.org/docs/rules/quotes
     */
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],

    // http://eslint.org/docs/rules/valid-jsdoc
    'valid-jsdoc': [
      'error',
      {
        prefer: {
          return: 'returns',
          desc: 'description',
          arg: 'param',
          argument: 'param',
        },
        preferType: {
          object: 'Object',
          string: 'String',
          number: 'Number',
          boolean: 'Boolean',
          array: 'Array',
          null: 'Null',
          undefined: 'Undefined',
          date: 'Date',
        },
        requireReturn: false,
        requireReturnDescription: false,
      },
    ],

    /*
     * Airbnb doesn't allow JS to require devDependencies, this doesn't allow
     * us to lint .spec.js|jsx files.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
     */
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],

    /*
     * Forbid prop types
     * By default this rule prevents vague prop types with more specific alternatives
     * available (any, array, object). We're disabling this as there is legitmite uses
     * for Array and Object, we should make an effort to use specific prop types wherever
     * we can though.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
     */
    'react/forbid-prop-types': 'off',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
    'react/no-unused-prop-types': [
      'error',
      {
        skipShapeProps: true,
      },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
    'react/require-default-props': 'off',
  },
};
