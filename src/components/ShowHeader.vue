<template>
	<div id="header">
		<div class="showHeader">
			<div class="container ">
				<div class="log">DN BLOG</div>
				<ul>
					<li v-for="(list, index) in nav" :class='list.isChooes ? "active" : "" ' @click="toDream(list.type, index)">
						<p></p>
						<span>{{ list.titleName }}</span>
						<p></p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	
	export default {
		data(){
			return {
				nav: []
			}
		},
		created(){
		    this.api.getNav().then(res => {
		      this.nav = res.data.data
		    })
		},

	  	methods:{
	  		toDream(type, index){
	  			this.nav.forEach((ele, i) => ele.isChooes = type === i ? 1 : 0)
	  			this.$router.push(this.nav[index].link)
	  		}
	  	}

	}

</script>

<style lang="scss" scoped>
	#header{
		position: fixed;
		left:0;
		top:0;
		width: 100%;
		background: #24242a;
	}
	.showHeader{
		width: 100%;
		height: 82px;
		padding:16px 0;
		box-shadow: 0px 1px 9px 1px #cfcfcf;
		.container{
			display: flex;
			width:1200px;
			height: 100%;
			margin:0 auto;
			background: #24242a;
		}
		.log{
			width: 20%;
			line-height: 50px;
			color: #fff;
			font-size: 35px;
			font-family: "Helvetica Neue";
		}
		ul{
			display: flex;
			justify-content:space-between;
			width: 80%;
			li{
				line-height: 50px;
				padding:0 10px;
				cursor: pointer;
			    span{
			    	color:#fff;
			    	display: block;
			    }
				p{	
				    width: 65px;
				    height: 2px;
				    background: transparent;
				    transition:all .3s;
				}
			}
			li:hover, .active{
				color: #FA7535;
				p{
					background: #fff;
				}
				span{
					color: #FA7535;
				}
				p:nth-of-type(1){
					transform: rotate(45deg);
					transform-origin:0% 100%;
				}
				p:nth-of-type(2){
					transform: rotate(-45deg);
					transform-origin:0% 100%;
					//transform:scale(.6)
				}
			}
		}
	}
</style>