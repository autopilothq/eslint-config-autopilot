# eslint-config-autopilot

Autpilot's standard eslint configuration.

## Usage

```
npm install --save-dev eslint-config-autopilot
```

Add `.eslintrc` to your project and extend from `autopilot`.

```
{
  "extends": "autopilot"
  "rules": {
    // project specific rules
  }
}
```

We favour implementing rules here instead of adding project specific rules, as
ideally these should be discussed with the team and embedded here for global
and consistent usage across all projects. Project specific rules should be
unique to that project and should not conflict with the rules listed here.

### Adding to existing project

When installing `eslint-config-autopilot` for an existing project, you may see
quite a few linter errors! `eslint` provides a `--fix` CLI flag which will
automatically fix linter issues which should help kickstart bringing the project
up to speed.

## Contributing

If you'd like to introduce a new rule or change an existing rule, please submit
a PR to this project with your changes and a rationale for the change.

Please adhere to the following:
- Add a comment above the rule change including a reference link to the eslint
rule.
- Use strings `'off'`, `'warn'` and `'error'` instead of `0`, `1` and `2` for
quicker understanding.
- Put each rule setting on a separate line for easier reviewing of changes.

```
// http://eslint.org/docs/rules/max-len
'max-len': [
  'error',
  120,
  2,
  {
    ignoreUrls: true,
  },
]
```

PRs can be merged when the majority of the team has reached consensus on the
proposed rule change.

## Releases

Please follow [semver](http://semver.org) for any releases as this ensures
clean updates for projects and allows projects to manage breaking
changes effectively.
