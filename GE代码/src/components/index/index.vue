<template>
    <div class="niu_danji">
      <img class="datu" src="./img/组51.png" alt />

      <!-- 文本 -->
      <div class="text">
        <p>值此喜迎新春的时刻</p>
        <p>让我们一起</p>
        <p>“牛”出守护神</p>
        <p>“牛”出好运来</p>
        <p>送给所有“生命守护者”</p>
        <p>祝愿所有人所求皆如愿，所行化坦途</p>
      </div>

      <!-- 灯笼 -->
      <img class="deng1" src="./img/组 48(1).png" alt="">
      <img class="deng2" src="./img/图层 80 拷贝.png" alt="">
      <!-- <img class="deng3" src="./img/组 48 拷贝 2.png" alt="">
      <img class="deng4" src="./img/组 50 拷贝.png" alt=""> -->
      <img src="./img/组 51 (3).png" alt="" class="deng3">
      <img class="deng5" src="./img/组 48 拷贝 2.png" alt="">
      <img class="deng6" src="./img/图层 80.png" alt="">
      <img src="./img/组 51 (4).png" alt="" class="deng7">
     <!-- <img class="deng7" src="./img/组 48(1).png" alt="">
      <img class="deng8" src="./img/组 50.png" alt="">  -->

      <!--机器-->
      <img class="top" src="./img/顶部.png" alt />
      <img class="buttom" src="./img/底部.png" alt />

      <!-- go -->
      <div class="go" @click="go">
        <p class="p1">点击</p>
        <p class="p2">牛一牛</p>
      </div>

      <!-- 球 -->
      <div class="dan_gund">
        <img class="i1 t1" :class="flog?'tt':''" src="../index/img/组 7.png" alt />
        <img class="i2 t2" :class="flog?'tt':''" src="../index/img/组 1 拷贝 10.png" alt />
        <img class="i3 t3" :class="flog?'tt':''" src="../index/img/组 1 拷贝 8.png" alt />
        <img class="i4 t4" :class="flog?'tt':''" src="../index/img/组 1.png" alt />
        <img class="i5 t5" :class="flog?'tt':''" src="../index/img/组 4.png" alt />
        <img class="i6 t6" :class="flog?'tt':''" src="../index/img/组 2.png" alt />
        <img class="i7 t7" :class="flog?'tt':''" src="../index/img/组 5.png" alt />
      </div>

      <!-- 出球 -->
      <img class="chuqiu" :class="chu?'chu':''" src="./img/组 7.png" alt v-if="numqiu==0" />
      <img class="chuqiu" :class="chu?'chu':''" src="./img/组 1 拷贝 10.png" alt v-if="numqiu==1" />
      <img class="chuqiu" :class="chu?'chu':''" src="./img/组 1 拷贝 8.png" alt v-if="numqiu==2" />
      <img class="chuqiu" :class="chu?'chu':''" src="./img/组 1.png" alt v-if="numqiu==3" />
      <!-- 扭蛋口 -->
      <img class="niudankou" src="./img/组 52.png" alt />

      <!-- 弹框 -->
      <div class="tankuang" :class="foo?'kk':''" v-if="fll">
        <div class="qian">
          <img class="tanimg" src="./img/弹窗 (6).png" alt v-show="name=='01'" />
          <img class="tanimg" src="./img/弹窗 (7).png" alt v-show="name=='02'" />
          <img class="tanimg" src="./img/弹窗 (8).png" alt v-show="name=='03'" />
          <img class="tanimg" src="./img/弹窗 (9).png" alt v-show="name=='04'" />
          <img class="tanimg" src="./img/弹窗 (10).png" alt v-show="name=='05'" />
          <img src="../changjing/img/矢量智能对象(1).png" class="yun" alt="">
          <img src="../changjing/img/矢量智能对象.png" class="yun1" alt="">
          <img src="../changjing/img/组 56.png" class="yun2" alt="">
          <img class="anniu an" @click="chuandi" src="./img/传递.png" alt />
        </div>
      </div>
      <!-- 遮罩层 -->
      <div class="datan" v-if="fll"></div>
    </div>
</template>


<script>
export default {
  name: "index",
  components: {},
  props:["msg"],
  data() {
    return {
      tu: false,
      flog: false,
      niu:false,
      // 旋转动画判断
      foo: false,
      fll: false,
      chu: false,
      tankuang1:false,
      num: null,
      numqiu: null,
      list: ["01", "02", "03", "04", "05"],
      name: ""
    };
  },
  computed: {},
  methods: {
    // 点击扭蛋
    go() {
      if (this.niu == false) {
         var audio = document.getElementById('music1');
         console.log(this.msg)
         if(this.msg==false){
            audio.play();  // 播放
             this.$emit('yingyue',"true")
         }
        
        // 随机数字，判断出球颜色
        this.numqiu = Math.floor(Math.random() * 3);
        // 开始动画
        this.niu=true
        this.flog = true;
        setTimeout(() => {
          this.flog = false;
          this.chu = true;
        }, 1500);
        setTimeout(() => {
          this.fll = true;
          this.chu = false;
        }, 3000);
        setTimeout(()=>{
           this.niu = false;
           this.tu=true
        },4500)
        // 判断扭蛋是否被抽完
        if (this.$route.query.num == undefined) {
          sessionStorage.setItem("list", this.list);
          // console.log(444);
        }
        // 存入本地防止下次再次抽到
        var lastname = sessionStorage.getItem("list");
        var text = lastname.split(",");
        // console.log(text);
        // console.log(text.length)
        var num = Math.floor(Math.random() * text.length);
        // console.log(num);
        this.num = num;
        this.name = text[num];
        // console.log(this.name);
        text.splice(num, 1);
        // console.log(text);
        // 判断扭蛋是否被抽完,如果全部抽完则从新获取完整数据
        if (text.length == 0) {
          sessionStorage.setItem("list", this.list);
        } else {
          sessionStorage.setItem("list", text);
        }
      }
    },
    // 点击传递
    chuandi() {
      if(this.tu==true){
        // this.foo = true;
        this.tankuang1=true
       // 根据抽取内容获取对应的下标
      var ret = this.list.findIndex(item => {
        return item == this.name;
      });
      this.$router.push({
        name: "changjing",
        query: {
          id: ret
        }
      });
      }
    },
    // // 点击查看
    // chakan() {
    //   this.tu=false
    //   // 根据抽取内容获取对应的下标
    //   var ret = this.list.findIndex(item => {
    //     return item == this.name;
    //   });
    //   // console.log(ret);
    //   this.$router.push({
    //     name: "changjing",
    //     query: {
    //       id: ret
    //     }
    //   });
    // }
  },
  created() {
  },
  mounted() {
  },
  activated() {}
};
</script>

<style lang="scss" scoped src="./index.scss"></style>
