<template>
  <div>
    <q-card style="min-width: 350px">
      <modelheader>Edit Task</modelheader>
      <form @submit="submitform()">

        <q-card-section class="q-pt-none ">
          <textinput v-model:listname="Add.name" ref="modelTextInput" />
          <duedate v-model:duedate="Add.duedate" ref="modelDueDate" />
          <duetime v-model:DueTime="Add.duetime" v-if="Add.duedate" />

        </q-card-section>
        <q-card-actions align="right" class="text-primary">
          <q-btn color="primary" type="submit" label=" Edit.." />
        </q-card-actions>
      </form>

    </q-card>
  </div>
</template>

<script>
import { useListStore } from 'src/stores/store';
import modelheader from 'src/components/List/model/sheared/ModelHeader.vue'
import textinput from 'src/components/List/model/sheared/TextInput.vue'
import duedate from 'src/components/List/model/sheared/DueDate.vue'
import duetime from 'src/components/List/model/sheared/DueTime.vue'
import useTasks from 'src/composable/todo';
export default {
  components: {
    modelheader,
    textinput,
    duedate,
    duetime
  },
  setup() {
    const Store = useListStore();
    const { updatetask } = useTasks();
    return {
      Store,
      updatetask,
    }
  },
  props: {
    list: Object,
    // id: String
  },
  data() {
    return {
      Add: {
        name: "",
        duedate: "",
        duetime: "",
      }
    }
  },
  mounted() {
    this.Add = Object.assign({}, this.list)
  },
  methods: {
    submitform() {
      this.$refs.modelTextInput.$refs.name.validate();
      this.$refs.modelDueDate.$refs.DueDate.validate();

      if (!this.$refs.modelTextInput.$refs.name.hasError && !this.$refs.modelDueDate.$refs.DueDate.hasError) {
        this.submitTask();
      }
    },
    submitTask() {
      // console.log('hello');
      this.updatetask(this.list.id, { data: this.Add });
      this.$emit('close');
    },
  },
}
</script>

<style scoped></style>
