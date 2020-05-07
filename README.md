# prettier-config-pixelmatters

> A Prettier config standard for Pixelmatters projects

This is a Prettier config that you can use in your projects.

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
yarn add @pixelmatters/prettier-config-pixelmatters --dev
```

3. Add the following code to your package.json file:

```json
"prettier": "@pixelmatters/prettier-config-pixelmatters",
```

### **NPM**

If using NPM:

1. Add an `.npmrc` file to the root of your project (where you keep your `package.json` file) and add the following text (this step is unnecessary if you've already used Pixelmatters' Github Packages in your project):

```
registry=https://npm.pkg.github.com/Pixelmatters
```

2. Run the following code in the terminal on the root of your project:

```shell
npm install @pixelmatters/prettier-config-pixelmatters --save-dev
```

3. Add the following code to your package.json file:

```json
"prettier": "@pixelmatters/prettier-config-pixelmatters",
```

---

At this point you should be good to go 👍
