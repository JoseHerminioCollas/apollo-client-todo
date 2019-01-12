module.exports = {
    "extends": "airbnb",
    "rules": {
        "semi": ["error", "never"],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    },
    "globals": {
        "describe": true,
        "it": true,
        "expect": true,
        "document": true,
    }
}