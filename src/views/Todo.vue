<template>
  <div class="home">
    <field-add-task />

    <list-tasks
      v-if="$store.state.tasks.length"
    />
    
    <no-tasks
      v-else
    />

  </div>
</template>

<script>
import NoTasks from '../components/Todo/NoTasks.vue';
//import ListTasks from '../components/Todo/ListTasks.vue';
export default {
  name: "Todo",
  components: {
    'field-add-task': require('@/components/Todo/FieldAddTask.vue').default,
    'list-tasks': require('@/components/Todo/ListTasks.vue').default,
    NoTasks,
    //'list-tasks': ListTasks
  }
};
</script>