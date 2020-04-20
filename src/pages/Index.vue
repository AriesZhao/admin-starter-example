<template>
  <q-card>
    <q-tabs
      v-model="tab"
      dense
      class="text-grey"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      narrow-indicator
    >
      <q-tab name="props" label="Props" />
      <q-tab name="alarms" label="Slots" />
      <q-tab name="movies" label="Events" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="props">
        <div class="text-h6">sider-width:Number</div>
        Menu siderbar width, default value is 250
        <hr />
        <div class="text-h6">sider-class:String</div>
        Menu siderbar class name, default value is 'bg-grey-3'
        <hr />
        <div class="text-h6">menus:Array</div>
        Menu Array, menu item object like "{title:'menu name', url:'/demo/hello',
        icon: 'refresh',class:'text-blue'}". if the menus prop is not defined,
        the admin app will load menus from routers, in this case the admin app route must contians "meta:{root: true}"
        <hr />
        <div class="text-h6">admin-key:String</div>
        Before app page unload, the app-info prop will be stored in localStorage
        with admin-key prop as key.
      </q-tab-panel>

      <q-tab-panel name="alarms">
        <div class="text-h6">Alarms</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>

      <q-tab-panel name="movies">
        <div class="text-h6">Movies</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      tab: 'props'
    }
  }
}
</script>
