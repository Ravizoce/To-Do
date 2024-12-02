<template>
  <q-layout view="hHh lpR fFf" class="window-height	">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title class="absolute-center">
          Quasar App
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer :breakpoint="781" show-if-above bordered :width="200" class="bg-primary scroll">
      <q-list dark>
        <q-item-label header>
          Navigation
        </q-item-label>
        <!-- <EssentialLink v-for="link in essentialLinks" :key="link.title" :to="to" v-bind="link" /> -->

        <q-item v-for="link in mylinks" exact :key="link.title" clickable tag="a" :to="link.to" class="text-grey-3">
          <q-item-section avatar>
            <q-icon :name="link.icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ link.title }}</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-footer elevated class="bg-primary text-white ">
      <q-toolbar>
        <q-toolbar-title>
          <div class="q-pb-sm  q-mb-sm">
            <q-tabs v-model="tab">
              <q-route-tab v-for="link in mylinks" :key="link.title" :name="link.title" :icon="link.icon"
                :label="link.title" :to="link.to" />
            </q-tabs>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
    <q-page-container class="scroll window-height ">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
// import EssentialLink from 'components/EssentialLink.vue'

// const linksList []
export default defineComponent({
  name: 'MainLayout',

  // components: {
  //   EssentialLink
  // },
  setup() {

    return {

      tab: ref('mail'),
      mylinks: [
        {
          title: 'To-Do list',
          icon: 'list',
          to: '/'
        },
        {
          title: 'Setting',
          icon: 'settings',
          to: '/setting'
        },
      ],

      // essentialLinks: linksList,
      // toggleLeftDrawer() {
      //   leftDrawerOpen.value = !leftDrawerOpen.value
      // },
    }
  }
})
</script>
<style scoped lang="scss">
@media screen and (min-width: 767px) {
  .q-footer {
    display: none;
  }
}

.q-drawer {
  .q-router-link--exact-active {
    background: rgb(128, 128, 128) !important;
  }
}
</style>
