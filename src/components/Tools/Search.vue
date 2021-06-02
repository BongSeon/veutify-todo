<template>
  <v-text-field
    @focus="searchClosed = false"
    @blur="searchClosed = true"
    class="expanding-search mt-1"
    :class="{ 'closed' : searchClosed }"
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
  data() {
    return {
      searchClosed: true
    }
  }
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