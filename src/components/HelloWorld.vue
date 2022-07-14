<template>
  <div>
    <el-button type="primary" @click="getUserInfo">登录</el-button>
    <div>{{userInfo}}</div>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data () {
    return {
      userInfo: {}
    }
  },
  methods:{
    // 获取用户信息
    getUserInfo() {
      api.getInfo({
        id: '4'
      }).then(response => {
        this.userInfo = response.data
      }).catch(error => {
        console.log(error);
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
