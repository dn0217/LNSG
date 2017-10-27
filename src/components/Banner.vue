<template>
  <swiper :options="swiperOption" ref="mySwiper" class="slide">
    <swiper-slide v-for="list in images">
      <img :src="list" alt="">
    </swiper-slide>
    <div class="swiper-button-prev btn" slot="button-prev"></div>
    <div class="swiper-button-next btn" slot="button-next"></div>
  </swiper>
</template>
  
<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
          setWrapperSize :true,
          speed:1000,
          loop : true,
          observer:true,
          observeParents:true
        },
        images: ['../../static/images/2.jpg', '../../static/images/1.jpg', '../../static/images/3.jpg']
      }
    },

    components: {
      swiper,
      swiperSlide
    }
 
  }
</script>

<style lang="scss" scoped>
  .slide{
    position: relative;
    overflow: hidden;
  }
  .slide .swiper-slide{
    float:left;
    height: 550px;
    background: #000;
    img{
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .btn{
    position: absolute;
    top:50%;
    width:30px;
    height: 30px;
    background: #000;
  }
  .swiper-button-prev{
    left:0;
  }
  .swiper-button-next{
    right:0;
  }
</style>