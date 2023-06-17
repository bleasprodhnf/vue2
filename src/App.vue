<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { getSDK } from "./utils/lib";

const OpenIM = getSDK();
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods:{
    getList(){
    const c = {
    userID: "135",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVSUQiOiIxMzUiLCJQbGF0Zm9ybSI6IldlYiIsImV4cCI6MTY4NDg0MjE0OCwibmJmIjoxNjg0NjY5MDQ4LCJpYXQiOjE2ODQ2NjkzNDh9.KfDtK7Etv1BwcvtUXrxxuwg41yniOp0c3ShtPI-OJEE",
    apiAddress: "http://8.218.143.200:10002",
    wsAddress: "ws://8.218.143.200:10001",
    platformID: 5,
};
      OpenIM.login(c).then(res => {
        //isLogin.value = true;
        console.log(res)
        console.log("login suc...");
       // console.log(CbEvents.ONCONVERSATIONCHANGED);
       // imListen(openIMWs)
    }).catch(err => {
        console.log("login failed...");
        console.log(err)
        console.log("login failed...");

    })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
