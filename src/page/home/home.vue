<template>
  <div class="page">
    <div class="card">

    </div>
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

<style scoped>
.page{
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1a1a1a;
  height: 100vh;
}
</style>
