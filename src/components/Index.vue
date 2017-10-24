<template>
  <div class="index">
    <SidebarNav></SidebarNav>
    <div class="page_right">
    	<ListData></ListData>
    	<Paging></Paging>
    </div>
  </div>
</template>

<script>
import ListData from './ListData'
import Paging from './Paging'
import SidebarNav from './SidebarNav'

export default {
  name: 'index',
  data () {
    return {
      
    }
  },
  methods:{
  	
  },
  components:{
  	ListData,
  	Paging,
  	SidebarNav
  }
}
</script>

<style>
*{
	margin:0;
	padding:0;
	list-style: none;
}
.index .slider{
	position: fixed;
	left: 0;
	top:0;
	width: 20%;
	height: 100%;
}
.page_right{
	width: 100%;
	box-sizing: border-box;
	padding-left: 20%;
}
</style>
