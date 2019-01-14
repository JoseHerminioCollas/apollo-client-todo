module.exports = {
    "extends": "airbnb",
    "rules": {
        "semi": ["error", "never"],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    },
    "globals": {
        "describe": true,
        "test": true,
        "expect": true,
        "document": true,
    }
}