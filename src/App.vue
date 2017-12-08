<template>
  <div id="app">
    <transition name="fade">
        <router-view class="router-view"></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'app',

  data(){
    return {
      
    }
  },

  computed: {
    isShowHeader(){
      return this.$store.getters.isShowHeader
    }

  },

  components:{
   
    
  }
}

</script>

<style>
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity .4s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  
</style>
