
<template>
  <q-input :model-value="listname" @update:model-value="($emit('update:listname', $event))" dense outlined class="q-mb-xs"
    label="Task-Name" autofocus :rules="[val => !!val || 'Task-Name is required']" ref="name">
    <template v-slot:append>
      <q-icon v-if="listname" name="close" @click="$emit('update:listname', '')" class="cursor-pointer"></q-icon>
    </template>
  </q-input>
</template>
<script>
export default {
  props: ['listname'],
}
</script>
