<template>
  <div>
    <div class="row">
      <q-card-section>
        <div class="text-h6">
          <slot></slot>
        </div>
      </q-card-section>
      <q-space />
      <q-card-actions align="right" class="text-primary">
        <q-btn flat icon="close" v-close-popup />
      </q-card-actions>
    </div>
  </div>
</template>
