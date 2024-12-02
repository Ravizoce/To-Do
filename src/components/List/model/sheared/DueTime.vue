<template>
  <q-input :model-value="DueTime" @update:model-value="($emit('update:DueTime', $event))" dense outlined class="q-mb-xs"
    label="Due-Time">
    <template v-slot:append>
      <q-icon v-if="DueTime" name="close" @click="$emit('update:DueTime', '')" class="cursor-pointer"></q-icon>
      <q-icon name="access_time" class="cursor-pointer">
        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
          <q-time :model-value="DueTime" @update:model-value="($emit('update:DueTime', $event))">
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="OK" color="primary" flat />
            </div>
          </q-time>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script>
export default {
  props: ['DueTime']
}
</script>
