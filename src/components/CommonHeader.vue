<template>
  <header>
    <div class="l-content">
      <el-button type="primary" icon="el-icon-menu" size="mini" @click="collapseMenu()"></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>
          <router-link :to="current.path + ''" v-if="current">{{ current.label }}</router-link>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link"><img class="user" :src="userImg" /> </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex"
export default {
  computed: {
    ...mapState({
      current: (state) => state.tab.currentMenu,
    }),
  },
  data() {
    return {
      userImg: require("../assets/images/user.jpg"),
    }
  },
  methods: {
    collapseMenu() {
      this.$store.commit("showMenu")
    },
  },
}
</script>
<style lang="scss" scoped>
header {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  .l-content {
    display: flex;
    align-items: center;
    .el-breadcrumb {
      margin-left: 20px;
    }
  }
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>
<style lang="scss">
.el-breadcrumb__inner a,
.el-breadcrumb__inner.is-link {
  color: #666;
  font-weight: normal;
}
.el-breadcrumb__item:last-child .el-breadcrumb__inner,
.el-breadcrumb__item:last-child .el-breadcrumb__inner a {
  color: #fff;
}
.el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover {
  color: $theme-color;
}
</style>
