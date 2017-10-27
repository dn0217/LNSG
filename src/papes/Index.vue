<template>
  <div class="index container">
    <div class="logo">
        <div class="logoArea"></div>
    </div>
    <Banner></Banner>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue'

export default {
  name: 'index',

  data () {
    return {
      
    }
  },
  created(){
    
  },

  methods:{
  	
  },

  components: {
    Banner
  }

}
</script>

<style lang="scss" scoped>
  
  .logo{
      padding:35px 0;
    .logoArea{
      width: 363px;
      height:95px;
      background: url(../../static/images/logo.png);
      margin:0 auto;
    }
  }
</style>
