<template>
  <div class="page">
    <div class="card">
      <div class="card2">
      </div>
    </div>
    <!-- <el-button type="primary" @click="getUserInfo">登录</el-button>
    <div>{{userInfo}}</div> -->
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
.page{
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1a1a1a;
  height: 100vh;
}
.card {
  width: 400px;
  height: 500px;
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  border-radius: 20px;
  transition: all .3s;
}
.card2 {
  width: 400px;
  height: 500px;
  background-color: #171717;
  border-radius: 15px;
  transition: all .2s;
}

.card2:hover {
  transform: scale(0.98);
  border-radius: 20px;
}

.card:hover {
  box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
}
</style>
