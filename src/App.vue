<template>
  <div id="app">
    <nav-bar :title="navBarTitle" left-arrow fixed placeholder />
    <router-view />
    <tabbar v-model="tabbarIndex" placeholder>
      <tabbar-item icon="home-o" replace to="/">首页</tabbar-item>
      <tabbar-item icon="bullhorn-o"  replace to="/message">消息</tabbar-item>
      <tabbar-item icon="user-circle-o"  replace to="/my">我的</tabbar-item>
    </tabbar>
  </div>
</template>
<script>
// @ is an alias to /src
import { Tabbar, TabbarItem, NavBar } from "vant";
export default {
  name: "App",
  components: {
    NavBar,
    Tabbar,
    TabbarItem
  },
  data() {
    return {
      tabbarIndex: 0,
    }
  },
  computed: {
    navBarTitle() {
      return this.$route.meta.title
    }
  },
  mounted() {
    this.$request.get('posts')
  }
};
</script>
<style lang="less">
#app {
  width: 100%;
  font-size: 14px;
}
</style>
