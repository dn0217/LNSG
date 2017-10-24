<template>
  <div class="paging">
    <span><</span>
    <ul>
        <li v-for="(number, index) in papeNumber" @click="changes(index+1)" :class="(index+1)===current?'current':''">{{number}}</li>
    </ul>
    <span>></span>
    <span>第{{current}}页</span>
    <span class="numberPages">10  条/页|共20条</span>
  </div>
</template>

<script>
export default {
  name: 'paging',
  data () {
    return {
      papeNumber: ['1', '2'],        //从后台获取的总页码
      current: 1                     //当前选中
    }
  },

  methods:{
    changes(index){
      this.$data.current = index
      this.$store.dispatch('papesNumber', index)
    }
  }
}
</script>

<style>
.paging{
  display: flex;
  width: 100%;
  height:30px;
  line-height: 30px;
  margin-top: 40px;
}
.paging ul li{
  display: inline-block;
  width:30px;
  height: 100%;
  text-align: center;
  cursor: pointer;
  margin:0 10px;
}
.paging ul li.current{
  background: #000;
  color: #fff;
}
.numberPages{
  background: blue;
  color: #fff;
  margin-left: 10px;
}
</style>
