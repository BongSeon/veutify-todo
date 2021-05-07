<template>
  <v-snackbar
    v-model="$store.state.snackbar.show"
  >
    {{ text }}

    <template v-slot:action="{ attrs }">
      <v-btn
        color="red"
        text
        v-bind="attrs"
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
  export default {
    data: () => ({
      snackbar: false,
      text: `I'm a multi-line snackbar.`,
    }),
  }
</script>

<style>

</style>