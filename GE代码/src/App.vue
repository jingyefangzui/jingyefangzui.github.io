<template>
  <div id="app">
    <img class="y1" src="./components/index/img/yyx.png" alt="" v-show="!fll" @click="musicPause">
    <img class="y1" src="./components/index/img/yy.png" alt="" v-show="fll" @click="musicPlay">
    <div class="audio">
      <!--隐藏audio标签-->
      <audio id="music1" loop>
        <source src="./assets/font/5fe30b03837d3(1).mp3">
      </audio>
    </div>
    <router-view v-on:yingyue="yingyue($event)" :msg="fll1"/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      fll:false,
      fll1:false,
    };
  },
  methods: {  
  musicPause(){
      var audio = document.getElementById('music1');
      audio.play();  // 播放
      this.fll=true
      this.fll1=true
  },
  musicPlay(){
     var audio = document.getElementById('music1');
     audio.pause();// 暂停
     this.fll=false
     this.fll1=true
  },
 yingyue(i){
   if(this.fll==false){
     console.log(111)
     this.fll=i
   }
 }
      
  },
  watch: {
  
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  width: 100%;
  /* height: 100%; */
  position: relative;
  background-color: #fff;
  overflow: hidden;
  /* font-family: 'GE'; */
}

.y1{
  width: 0.8rem;
  height: 0.8rem;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 5;
}
</style>
