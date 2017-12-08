<template>
  <div class="index">
    <ShowHeader @show-what="geet"></ShowHeader>
    <div class="container">
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
    <ShowFooter></ShowFooter>
  </div>
</template>

<script>
import ShowHeader from '../components/ShowHeader.vue'
import ShowFooter from '../components/ShowFooter.vue'
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
    ShowHeader,
    ShowFooter
  }

}
</script>

<style lang="scss" scoped>
  ul li{
    width: 100%;
    padding:20px 30px;
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


 


