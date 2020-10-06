# vuetify-v-text-field-issue

## Project Description
This project demonstates an issue with `v-text-field` in the jest environment when attempting to get props.

When trying to access props on a wrapper for a `v-text-field` like `wrapper.props()`, the follow error is thrown:

```
  [vue-test-utils]: wrapper.props() must be called on a Vue instance
```

Just like `v-button`, I would expect `v-text-field` to be a vue instance and be able to retrieve the props.

## Project setup
```
npm install
```

### Runs the unit tests
```
npm run test
```
