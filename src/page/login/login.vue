<template>
  <div class="page">
    <div class="card">
      <div class="card2">
        <div class="textBox">
          <span>P</span>
          <span>O</span>
          <span>K</span>
          <span>É</span>
          <span>M</span>
          <span>O</span>
          <span>N</span>
        </div>
        <div class="btnBox">
          <el-button type="primary" class='loginBtn' @click="getUserInfo">GO</el-button>
        </div>
      </div>
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
/* 方框样式 */
.card {
  width: 400px;
  height: 500px;
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  border-radius: 20px;
  transition: all .3s;
}
.card:hover {
  box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
}
.card2 {
  width: 400px;
  height: 500px;
  background-color: #171717;
  border-radius: 15px;
  transition: all .2s;
  position: relative;
}
.card2:hover {
  transform: scale(0.98);
  border-radius: 20px;
}
/* 文字样式 */
.textBox {
  height: 100px;
  width: 100%;
  padding-top: 50px;
  font-size: 18px;
  font-weight: 600;
  font-family: monospace;
  letter-spacing: 1em;
  color: #f5f5f5;
  filter: drop-shadow(0 0 10px);
  display: flex;
  justify-content: center;
  align-items: center;
}
.textBox span {
  animation: loading6454 1.75s ease infinite;
}
.textBox span:nth-child(2) {
  animation-delay: 0.25s;
}
.textBox span:nth-child(3) {
  animation-delay: 0.5s;
}
.spinner span:nth-child(4) {
  animation-delay: 0.75s;
}

.spinner span:nth-child(5) {
  animation-delay: 1s;
}

.spinner span:nth-child(6) {
  animation-delay: 1.25s;
}

.spinner span:nth-child(7) {
  animation-delay: 1.5s;
}

@keyframes loading6454 {
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}
/* 按钮样式 */
.btnBox{
  position: absolute;
  bottom: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.loginBtn {
  --glow-color: rgb(217, 176, 255);
  --glow-spread-color: rgba(191, 123, 255, 0.781);
  --enhanced-glow-color: rgb(231, 206, 255);
  --btn-color: rgb(100, 61, 136);
  border: .25em solid var(--glow-color);
  padding: 1em 3em;
  color: var(--glow-color);
  font-size: 15px;
  font-weight: bold;
  background-color: var(--btn-color);
  border-radius: 1em;
  outline: none;
  box-shadow: 0 0 1em .25em var(--glow-color),
          0 0 4em 1em var(--glow-spread-color),
          inset 0 0 .75em .25em var(--glow-color);
  text-shadow: 0 0 .5em var(--glow-color);
  position: relative;
  transition: all 0.3s;
}
.loginBtn::after {
  pointer-events: none;
  content: "";
  position: absolute;
  top: 120%;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: var(--glow-spread-color);
  filter: blur(2em);
  opacity: .7;
  transform: perspective(1.5em) rotateX(35deg) scale(1, .6);
}
.loginBtn:hover {
  color: var(--btn-color);
  background-color: var(--glow-color);
  box-shadow: 0 0 1em .25em var(--glow-color),
          0 0 4em 2em var(--glow-spread-color),
          inset 0 0 .75em .25em var(--glow-color);
}
.loginBtn:active {
  box-shadow: 0 0 0.6em .25em var(--glow-color),
          0 0 2.5em 2em var(--glow-spread-color),
          inset 0 0 .5em .25em var(--glow-color);
}
</style>
