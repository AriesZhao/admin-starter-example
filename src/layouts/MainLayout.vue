<template>
  <admin-app :app-info="appInfo" :sider-width="250" sider-class="bg-grey-3" home-path="/home" home-icon="home">
    <template v-slot:left-header="props">
      <q-toolbar class="bg-primary text-white shadow-5">
        <q-avatar>
          <img src="/statics/app-logo-128x128.png" />
        </q-avatar>
        <q-toolbar-title style="font-size: 16px;">{{
          props.appInfo.title
        }}</q-toolbar-title>
      </q-toolbar>
    </template>
  </admin-app>
</template>

<script>
const appInfo = {
  title: 'Admin-Template',
  homePath: '/home'
}
export default {
  name: 'App',
  data() {
    return {
      appInfo: appInfo
    }
  }
}
</script>
