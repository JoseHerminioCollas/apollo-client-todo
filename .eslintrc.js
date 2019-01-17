module.exports = {
    "extends": "airbnb",
    "rules": {
        "semi": ["error", "never"],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "jsx-a11y/label-has-for": [0],
        "jsx-a11y/label-has-associated-control": [0],
    },
    "globals": {
        "describe": true,
        "test": true,
        "expect": true,
        "document": true,
        "beforeEach": true,
    }
}