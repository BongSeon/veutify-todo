<template>
  <v-text-field
    class="expanding-search mt-1 closed"
    placeholder="Filled"
    prepend-inner-icon="mdi-magnify"
    filled
    dense
    clearable
  >
  </v-text-field>
</template>

<script>
export default {

}
</script>

<style lang="sass">
  .expanding-search
    .v-input__slot
      &:before, &:after
        border-color: transparent !important
    &.closed
      max-width: 45px
</style>