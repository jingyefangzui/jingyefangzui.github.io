<template>
  <div>
    <div class="box">
      <div class="scene" :class="fll?'tt':''">
        <img class="backgroundImg" :src="list[this.$route.query.id].img" alt />
        <img class="but" src="./img/好运加持.png" alt @click="go" />
      </div>

      <div class="boxxiao" :class="foo?'cheng':''" v-show="changjing">
        <img :src="list[this.$route.query.id].img1" alt />
        <img src="./img/分享.png" alt class="fen" />
        <div class="fen1" @click="share"></div>
        <img src="./img/再抽一个.png" alt class="chou" @click="zhaichou" />
      </div>

      <!-- 遮罩层 -->
      <div class="datan" v-show="ftt1"></div>
      <div class="datan1" v-show="ftt2"></div>
      <!-- 结束提示 -->
      <div class="out" v-show="ftt">
        <img src="./img/组 51.png" alt class="i1" />
        <img src="./img/矢量智能对象(1).png" class="i2" alt="">
        <img src="./img/矢量智能对象.png" class="i3" alt="">
        <img src="./img/组 56.png" class="i4" alt="">
            <div class="tankuangText">
            <p>{{text[this.$route.query.id].p1}}</p>
            <p>{{text[this.$route.query.id].p2}}</p>
          </div>
      </div>

      <!-- 二维码扫描 -->
      <img class="QRcode" :src="QR[this.$route.query.id].img" alt="" v-show="fenxiang">
      <img src="./img/关  闭.png" alt="" class="QRcodeClose" v-show="fenxiang" @click="QRcodeClose">

    </div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      flog: false,
      fll: false,
      foo: false,
      ftt: false,
      ftt1: false,
      ftt2: false,
      fenxiang:false,
      changjing:false,
      list: [
        {
          img: require("../changjing/img/组 12.png"),
          img1: require("../changjing/img/组 (12).png")
        },
        {
          img: require("../changjing/img/组 8.png"),
          img1: require("../changjing/img/组 (8).png")
        },
        {
          img: require("../changjing/img/组 11.png"),
          img1: require("../changjing/img/组 (11).png")
        },
        {
          img: require("../changjing/img/组 9.png"),
          img1: require("../changjing/img/组 (9).png")
        },
        {
          img: require("../changjing/img/组 10.png"),
          img1: require("../changjing/img/组 (10).png")
        }
      ],
      QR:[
        {img: require("../changjing/img/1 (11).png")},
         {img: require("../changjing/img/1 (7).png")},
          {img: require("../changjing/img/1 (8).png")},
           {img: require("../changjing/img/1 (9).png")},
            {img: require("../changjing/img/1 (10).png")},
      ],
      text:[
        {
           p1:"守护您的人",
           p2:'24小时都有空',
        },
         {
           p1:"守护您的人",
           p2:'比您更懂您',
        },
        {
           p1:"您不必急",
           p2:'有人奔赴而来',
        },
        {
           p1:"所有的精心准备",
           p2:'都在为您待命',
        },
        {
           p1:"您不必全懂",
           p2:'有人为您撑腰',
        },
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    // 切换场景
    go() {
      if (this.flog == false) {
        this.changjing=true
        // 渐变动画判断
        this.fll = true;
        this.flog = true;
        setTimeout(() => {
          (this.fll = false), (this.flog = false), (this.foo = true);
        }, 2000);
         setTimeout(() => {
              this.ftt1 = true;
              this.ftt=true
        }, 5000);
      }
    },
    // 关闭弹框
    QRcodeClose(){
      this.fenxiang=false
      this.ftt2=false
    },
    // 生成海报
    share() {
      this.fenxiang=true
      this.ftt2=true
    },
    zhaichou() {
      this.$router.push({
        name: "index",
        query: {
          num: this.$route.query.id
        }
      });
    }
  }
};
</script>
<style  lang="scss" scoped src="./changjing.scss">
</style>