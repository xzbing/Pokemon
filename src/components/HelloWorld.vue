<template>
  <div>
    <el-button type="primary" @click="getUserInfo">登录</el-button>
    <div>{{userInfo}}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      userInfo: {}
    }
  },
  methods:{
    // 获取用户信息
    getUserInfo() {
      // 向具有指定ID的用户发出请求
      // this.$http.get('https://mock.apifox.cn/m1/363668-0-default/getUserInfo?id=4')
      // .then(response => {
      //   debugger
      //   this.userInfo = response.data
      //   console.log(this.userInfo);
      // })
      // .catch(error => {
      //   console.log(error);
      // });
      // 也可以通过 params 对象传递参数
      this.$http.get('https://mock.apifox.cn/m1/363668-0-default/getUserInfo', {
        params: {
          id: '4'
        }
      })
      .then(response => {
        this.userInfo = response.data
      })
      .catch(error => {
        console.log(error);
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
