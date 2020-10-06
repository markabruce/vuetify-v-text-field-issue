# vuetify-v-text-field-issue

## FIX
See the [fix/v-text-field-issue](https://github.com/markabruce/vuetify-v-text-field-issue/tree/fix/v-text-field-issue) branch for the fix.

Basically, in tests, finding with an 'id' works correctly for a `v-button` as you'll still get the vue instance, but when you add an 'id' attribute to a `v-text-field` the 'id' is passed down to the `<input />` element, meaning you get the input element and not the root vue instance. The only workaround for now appears to be having to find on the `.v-text-field` class. This means that tests for components with multiple `v-text-field`s are problematic, and either you need to know what order the text fields are in to access them by their index, or apply different classes to each text field to differentiate between them. 

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
