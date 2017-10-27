<template>
	<div id="header">
		<div class="showHeader">
			<div class="container">
				<div class="log">DN BLOG</div>
				<ul>
					<li v-for="list in nav" :class='list.isChooes ? "active" : "" ' @click="toDream(list.type)">
						<p></p>
						<router-link :to="list.link">{{ list.titleName }}</router-link>
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
				nav: [
					{
						titleName: 'HOME',
						type: 0,
						isChooes:true,
						link:'/'
					}, 
					{
						titleName: 'WORKS',
						type: 1,
						isChooes:false,
						link:'Works'
					},
					{
						titleName: 'NOTE',
						type: 2,
						isChooes:false,
						link:'Note'
					},
					{
						titleName: 'TALK',
						type: 3,
						isChooes:false,
						link:'Talk'
					},
					{
						titleName: 'ABOUT',
						type: 4,
						isChooes:false,
						link:'About'
					}
				]
			}
		},

	  	methods:{
	  		toDream(type){
	  			this.nav.forEach((ele, i) => ele.isChooes = type === i ? true : false)
	  		}
	  	}

	}

</script>

<style lang="scss" scoped>
	#header{
		background-image: url(../../static/images/dn.jpg);
	}
	.showHeader{
		width: 100%;
		height: 50px;
		padding:16px 0;
		box-shadow: 0px 1px 9px 1px #cfcfcf;
		.container{
			display: flex;
			width:1200px;
			height: 100%;
			margin:0 auto;
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
			    a{
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
				a{
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