<template>
  <q-page class="scroll flex justify-center">
    <div style="min-width: 500px" class="q-pa-md q-mt-lg q-ml-sm">
      <q-list bordered separator v-if="Object.keys(tasks).length">
        <TaskAll v-for="(list, key) in tasks" :key="list.id" :list="list" @confirm_delete="confirm_delete" :id="key">
        </TaskAll>
      </q-list>
    </div>
    <q-dialog v-model="AddModelInsert" persistent>
      <AddModel @close="AddModelInsert = false"></AddModel>
    </q-dialog>
    <div class="absolute-bottom text-center q-mb-xl">
      <q-btn @click="AddModelInsert = true" round color="primary" size="xl" icon="add" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { useListStore } from 'src/stores/store';
// import { storeToRefs } from 'pinia';
import { useQuasar } from 'quasar';
import TaskAll from 'src/components/List/TaskAll.vue'
import AddModel from 'src/components/List/model/AddModel.vue'
import useTasks from 'src/composable/todo';
import { onMounted, onUpdated } from 'vue';
export default defineComponent({

  components: {
    TaskAll,
    AddModel,
  },
  data() {
    return {
      AddModelInsert: false
    }
  },
  setup() {
    const $q = useQuasar;
    const Store = useListStore();
    const { tasks, gettasks, destroy } = useTasks();
    onMounted(() => gettasks());
    onUpdated(() => gettasks());

    return {
      // Store,
      tasks,
      destroy
    }
  },
  methods: {
    confirm_delete(id) {
      // console.log(id);
      this.$q.dialog({
        title: 'Delete',
        message: 'The item will be deleted perminantly',
        ok: {
          push: true,
          color: 'primary'
        },
        cancel: {
          push: true,
          color: 'negative'
        },
        persistent: true
      }).onOk(() => {
        this.destroy(id);
      })
    }
  }
})
</script>
