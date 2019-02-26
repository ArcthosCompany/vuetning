module.exports = {
    root: true,
    env: {
        node: true,
        es6: true,
        jest: true
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "vue/attribute-hyphenation": ["error", "always"],
        "vue/component-name-in-template-casing": ["error", "PascalCase"],
        "vue/html-closing-bracket-spacing": ["error", {
            "startTag": "never",
            "endTag": "never",
            "selfClosingTag": "never"
        }],
        "vue/html-indent": ["warn", 4, {
            "attribute": 1,
            "baseIndent": 1,
            "alignAttributesVertically": true,
        }],
        "vue/html-self-closing": ["error", {
            "html": {
                "void": "never",
                "normal": "always",
                "component": "always"
            },
            "svg": "always",
            "math": "always"
        }],
        "vue/max-attributes-per-line": ["warn", {
            "singleline": 3,
            "multiline": {
                "max": 1,
                "allowFirstLine": false
            }
        }],
        "vue/mustache-interpolation-spacing": ["warn", "always"],
        "vue/name-property-casing": ["error", "PascalCase"],
        "vue/no-multi-spaces": ["warn", {
            "ignoreProperties": false
        }],
        "vue/no-spaces-around-equal-signs-in-attribute": ["warn"],
        "vue/order-in-components": ["warn", {
            "order": [
                "el",
                "name",
                "parent",
                "functional",
                ["delimiters", "comments"],
                ["components", "directives", "filters"],
                "extends",
                "mixins",
                "inheritAttrs",
                "model",
                ["props", "propsData"],
                "data",
                "computed",
                "watch",
                "LIFECYCLE_HOOKS",
                "methods",
                ["template", "render"],
                "renderError"
            ]
        }],
        "vue/prop-name-casing": ["error", "camelCase"],
        "vue/singleline-html-element-content-newline": ["warn", {
            "ignoreWhenNoAttributes": true,
            "ignoreWhenEmpty": true,
            "ignores": ["abbr", "pre", "span", "textarea"]
        }],
        "vue/v-bind-style": ["warn", "shorthand"],
        "vue/v-on-style": ["warn", "shorthand"],
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
};