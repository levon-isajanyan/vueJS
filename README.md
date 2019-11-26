# vueJS
This project is for other aims and there is no any other destiantion for public using


# Used technologies and npm

| Name        | package & url |
| ------------- |:-------------:|
| NodeJs      | [![Nodejs](https://www.iconninja.com/files/486/38/391/install-npm-js-node-javascript-tools-development-icon.png)](https://nodejs.org/en/download/) |
| Vue-cli | [![style: styled-components](https://img.shields.io/badge/vue--cli-v4.0.5-green)](https://cli.vuejs.org)     |
| Vue | [![style: styled-components](https://img.shields.io/badge/vue-v2.6.10-blue)](https://vuejs.org/) |
| Vue-router | [![style: styled-components](https://img.shields.io/badge/vue--router-v3.1.3-blue)](https://router.vuejs.org/) |
| Vuex | [![style: styled-components](https://img.shields.io/badge/vuex-v3.0.1-blue)](https://vuex.vuejs.org/) |
| node-sass | [![style: styled-components](https://img.shields.io/badge/node--sass-v4.12.0-blue)](https://github.com/sass/node-sass) |
| eslint | [![style: styled-components](https://img.shields.io/badge/eslint-v5.16.0-blue)](https://eslint.org/) |
| vue-cli-plugin-style-resources-loader | [![style: styled-components](https://img.shields.io/badge/vue--cli--plugin--style--resources--loader-v0.1.4-blue)](https://github.com/nguyenvanduocit/vue-cli-plugin-style-resources-loader/#readme) |
| element-ui (ui framework) | [![style: styled-components](https://img.shields.io/badge/element--ui-v2.4.5-blue)](https://element.eleme.io/#/en-US) |
| i18n | [![style: styled-components](https://img.shields.io/badge/vue--i18n-v8.0.0-blue)](https://kazupon.github.io/vue-i18n/) |
| vue-country-flags | [![style: styled-components](https://img.shields.io/badge/vue--country--flags-v1.0.2-blue)](https://www.npmjs.com/package/vue-country-flags) |

# Project tree

```
 ROOT
├── README.md
├── babel.config.js
├── cypress.json
├── i18n.pdf
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   ├── form.vue
│   │   └── microcomponents
│   │       ├── SubmitButton.vue
│   │       ├── checkBoxElement.vue
│   │       └── flags.vue
│   ├── i18n.js
│   ├── locales
│   │   ├── am.json
│   │   ├── en.json
│   │   └── ru.json
│   ├── main.js
│   ├── plugins
│   │   └── element.js
│   ├── router
│   │   └── index.js
│   ├── scss
│   │   ├── mixins.scss
│   │   └── variables.scss
│   ├── store
│   │   └── index.js
│   └── views
│       ├── About.vue
│       └── Home.vue
├── tests
│   └── e2e
│       ├── plugins
│       │   └── index.js
│       ├── specs
│       │   └── test.js
│       └── support
│           ├── commands.js
│           └── index.js
└── vue.config.js

```

# Compnonents list

| Components name        | location | props |
| ------------- |:-------------:| :-------------:| 
| Button.vue      | compnents/microcomponents/button.vue |  buttonText, buttonDisableStatus, buttonPrice|
| flags.vue      | compnents/microcomponents/flags.vue | iso |
| checkBoxElement.vue | compnents/microcomponents/checkBoxElement.vue | labelTitle, checkboxStatus, checkBoxLabelSecond |
| dropdown.vue | compnents/microcomponents/dropdown.vue | dropdownLabel |

# App graph vizualizations

[how does i18n(language localization work)](i18n.pdf)