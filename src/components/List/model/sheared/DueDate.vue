<template>
  <q-input :model-value="duedate" @update:model-value="($emit('update:duedate', $event))" dense outlined class="q-mb-xs"
    label="Due-Date" :rules="[val => !!val || 'Due-Date is required']" ref="DueDate">
    <template v-slot:append>
      <q-icon v-if="duedate" name="close" @click="$emit('update:duedate', '')" class="cursor-pointer"></q-icon>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
          <q-date :today-btn=true :model-value="duedate" @update:model-value="($emit('update:duedate', $event))">
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="OK" color="primary" flat />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>
<script>
export default {

  props: ['duedate'],
  data() {
    return {

    }
  },
}
</script>
