module.exports = {
  extends: ['stylelint-config-recess-order', 'stylelint-config-standard'],
  rules: {
    'declaration-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'after-comment'],
        ignore: ['after-declaration'],
      },
    ],
    'no-empty-source': null,
    'at-rule-no-unknown': null,
    'no-missing-end-of-source-newline': true,
    'selector-combinator-space-after': 'always',
  },
};
