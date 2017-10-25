<template>
	<div id="header">
		<div class="showHeader">
			<div class="container">
				<ul>
					<li><router-link to="">HOME</router-link></li>
					<li><router-link to="">WORKS</router-link></li>
					<li><router-link to="">NOTE</router-link></li>
					<li><router-link to="">TALK</router-link></li>
					<li><router-link to="">ABOUT ME</router-link></li>
				</ul>
			</div>
		</div>
	</div>
</template>


<script>
	
	export default {

	}



</script>

<style lang="scss">
	.showHeader{
		width: 100%;
		height: 50px;
		padding:16px 0;
		box-shadow: 0px 1px 9px 1px #cfcfcf;
		.container{
			width:1200px;
			height: 100%;
			margin:0 auto;
		}
		ul{
			display: flex;
			align-items:center;
			justify-content:space-between;
			li{
				line-height: 50px;
			    //	color: #FA7535;
			}
		}
		
	}

</style>