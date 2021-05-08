<template>
  <v-snackbar
    v-model="$store.state.snackbar.show"
  >
    {{ $store.state.snackbar.text }}

    <template v-slot:action="{ attrs }">
      <v-btn
        color="red"
        text
        v-bind="attrs"
        @click="$store.commit('closeSnackbar')"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
  export default {
    // data: () => ({
    //   snackbar: false,
    //   text: `Task Added.`,
    // }),
  }
</script>

<style>

</style>