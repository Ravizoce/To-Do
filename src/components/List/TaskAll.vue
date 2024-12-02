<template>
  <div>
    <q-item tag="label" clickable :class="checked ? 'prime' : 'second'">
      <q-item-section side top>
        <q-checkbox v-model="checked" @click="this.updatetask(list.id, { data: { completed: checked } })" />
      </q-item-section>
      <q-item-section>
        <q-item-label> {{ list.name }}</q-item-label>
      </q-item-section>

      <q-item-section side>
        <div class="row">
          <div class="column justify-center q-mr-xs">
            <q-icon name="event" size="25px" />
          </div>
          <div class="column">
            <q-item-label caption class="row justify-end">{{ list.duedate }}</q-item-label>
            <q-item-label caption class="row justify-end"><small>{{ list.duetime }}</small></q-item-label>
          </div>
        </div>
      </q-item-section>

      <q-dialog v-model="ShowEditmodel" persistent>
        <EditModel @close="ShowEditmodel = false" :list="list"></EditModel>
      </q-dialog>

      <q-item-section side>
        <div class="row">
          <q-btn @click.stop="ShowEditmodel = true" rounded dense unelevated :ripple="true" text-color="anccent"
            icon="edit" />
          <q-btn @click.stop="$emit('confirm_delete', list.id)" rounded dense unelevated :ripple="true"
            text-color="orange-6" icon="delete" />
        </div>
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
import { data } from 'autoprefixer'
import { useQuasar } from 'quasar'
import { useListStore } from 'src/stores/store'
import EditModel from 'src/components/List/model/EditModel.vue'

import useTasks from 'src/composable/todo'
import { list } from 'postcss'
// import { storeToRefs } from 'pinia';

// const $q = useQuasar();

export default {
  components: {
    EditModel
  },
  data() {
    return {
      ShowEditmodel: true
    }
  },
  setup() {
    const Store = useListStore();
    const { updatetask } = useTasks();
    const $q = useQuasar;
    return {
      Store,
      updatetask
    }

  },

  props: {
    list: Object,
    // id: String
  },
  data() {
    return {
      checked: !(!this.list.completed)
    }
  },
  methods: {
    // confirm_delete(id) {
    //   this.$q.dialog({
    //     title: 'Delete',
    //     message: 'The item will be deleted perminantly',
    //     ok: {
    //       push: true,
    //       color: 'primary'
    //     },
    //     cancel: {
    //       push: true,
    //       color: 'negative'
    //     },
    //     persistent: true
    //   }).onOk(() => {
    //     // this.destroy(id);
    //   })
    // }
  }
}
</script>

<style scoped>
#task:hover {

  background-color: black;
}

.prime {
  background-color: #1dcf76;
}

.second {
  background-color: #6de36d;
}
</style>
