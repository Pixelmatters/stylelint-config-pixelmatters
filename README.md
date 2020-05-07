# prettier-config-pixelmatters

> A Stylelint config standard for Pixelmatters projects

This is a Stylelint config that you can use in your projects.

## Setup

To install this Github Package, first you need to authenticate to Github Packages, following the instructions [here](https://help.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages#authenticating-to-github-packages)

After authentication, the steps are different if you’re using **npm** or **yarn** to manage your packages.

### **Yarn**

If using Yarn:

1. Add an `.yarnrc` file to the root of your project (where you keep your `package.json` file) and add the following text (this step is unnecessary if you've already used Pixelmatters' Github Packages in your project):

```
"@pixelmatters:registry" "https://npm.pkg.github.com"
```

2. Run the following code in the terminal on the root of your project:

```shell
yarn add @pixelmatters/stylelint-config-pixelmatters --dev
```

3. Add all the missing peer dependencies:

```shell
yarn add stylelint-config-recess-order stylelint-config-standard --dev
```

4. Create a `.stylelintrc.js` in the root of your project and add the following code:

```js
module.exports = {
  extends: '@pixelmatters/stylelint-config-pixelmatters',
};
```

### **NPM**

If using NPM:

1. Add an `.npmrc` file to the root of your project (where you keep your `package.json` file) and add the following text (this step is unnecessary if you've already used Pixelmatters' Github Packages in your project):

```
registry=https://npm.pkg.github.com/Pixelmatters
```

2. Run the following code in the terminal on the root of your project:

```shell
npm install @pixelmatters/stylelint-config-pixelmatters --save-dev
```

3. Add all the missing peer dependencies:

```shell
npm install stylelint-config-recess-order stylelint-config-standard --save-dev
```

4. Create a `.stylelintrc.js` in the root of your project and add the following code:

```js
module.exports = {
  extends: '@pixelmatters/stylelint-config-pixelmatters',
};
```

---

At this point you should be good to go 👍
