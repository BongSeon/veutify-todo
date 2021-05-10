<template>
  <v-menu
    bottom
    left
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        primary
        icon
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        @click="item.click"
      >
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: 'Edit',
        icon:'mdi-pencil',
        click() {
          console.log('Edit');
        }
      },
      {
        title: 'Due Date',
        icon:'mdi-calendar',
        click() {
          console.log('Due Date');
        }
      },
      {
        title: 'Delete',
        icon:'mdi-delete',
        click() {
          console.log('Delete');
        }
      },
    ],
  }),
}
</script>

<style>

</style>