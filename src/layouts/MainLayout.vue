<template>
  <admin-app :app-info="appInfo" />
</template>

<script>
const appInfo = {
  logo: '',
  title: 'Admin-Template',
  showFooter: true,
  siderWidth: 250,
  siderClass: 'bg-grey-3'
}
export default {
  name: 'App',
  data () {
    return {
      appInfo: appInfo
    }
  }
}
</script>
