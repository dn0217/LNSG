<template>
  <div class="Mobile">
    <div class="MobileContainer">
      <ul>
       <li v-for="list in showList">
          <router-link :to="'/Detail/'+list.id">
            <p class="acticleTitle">{{ list.title }}</p>
            <div class="acticleInfo">
              <span>作者：{{ list.author }}</span>
              <span>发布时间：{{ list.time | filterTime}}</span>
            </div>
            <p class="acticleNote" v-html="list.note"></p>
          </router-link>
       </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import ShowHeader from '../components/ShowHeader.vue'
// import ShowFooter from '../components/ShowFooter.vue'
export default {
  name: 'index',

  data () {
    return {
      allList: [],
      showList: []

    }
  },

  created(){
    
    this.api.getActicle().then(res => {
      this.allList = res.data.data.reverse();
      this.showList = res.data.data;
    })
    
  },

  methods: {
    geet(typeList){
      switch( typeList ){
        case 0:
          this.showList = this.allList;
          break;

        case 4:
          alert('暂没有个人信息哦！')
          break;

        default:
          this.showList = [];
          this.allList.forEach(ele => {
            if( ele.type == typeList ){
              this.showList.push(ele)
            }
          })
          break;
      }
    }
  },

  watch: {
    
  },


  components: {
    
  }

}
</script>

<style lang="scss" scoped>
  .Mobile{
    width:10rem;
    height: 100%;
    margin: 0 auto;
  }
  
</style>


 


