<template>
  <div class="index container">
   <ul>
     <li v-for="list in listContent" @click="toDetail(list.id)">
        <p class="acticleTitle">{{ list.title }}</p>
        <div class="acticleInfo">
          <span>作者：{{ list.author }}</span>
          <span>发布时间：{{ list.time | filterTime}}</span>
        </div>
        <p class="acticleNote">{{ list.note }}</p>
     </li>
   </ul>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue'

export default {
  name: 'index',

  data () {
    return {
      listContent: []
    }
  },
  created(){
    this.api.getActicle().then(res => {
      this.log(res)
      this.listContent = res.data.data
    })
    
  },

  methods:{
  	toDetail(id){
      this.$router.push('/Detail/'+id)
    }
  },

  components: {
    Banner
  }

}
</script>

<style lang="scss" scoped>
  ul li{
    width: 100%;
    padding:10px;
    line-height: 30px;
    overflow: hidden;
    cursor: pointer;
  }
  .acticleTitle{
    font-size: 22px;
    color:#3a3a3a;
  }
  .acticleInfo{
    span{
      font-size: 14px;
      margin-right: 50px;
    }
  }
  .acticleNote{
    display: -webkit-box;
    -webkit-box-orient:vertical;
    height: 45px;
    line-height: 24px;
    font-size: 14px;
    overflow: hidden;
    text-overflow:ellipsis;
    -webkit-line-clamp:2;
  }
  
</style>


 


