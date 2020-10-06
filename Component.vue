<template>
  <div>
    <v-text-field
      id="emailTextField"
      :rules="rules">
    </v-text-field>
    <v-btn
      id="submitButton"
      rounded
      dark>
      Submit
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    };
  },
};
</script>
