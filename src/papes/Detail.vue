<template>
	<div class="note">
		<div class="detailContent">
			<p class="title">{{ detail.title }}</p>
			<p class="contentBlock" v-html="detail.content"></p>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				detail: {}
			}
		},

		created(){
			
		},

		mounted(){
			this.getActicle(this.$route.params.id);
			
		},


		methods: {
			getActicle(id){
				this.api.getOneActicle(id).then(res => {
					this.detail = res.data
				})
			}
		},

		watch: {
		    
		    $route(to, from){
		    	
			}
			
		}

	}
</script>

<style lang="scss" scoped>
	.detailContent{
		padding:12px;
	}
	.title{
		text-align: center;
		line-height: 75px;
		font-size: 24px;
		color:#3a3a3a;
	}
	.contentBlock{
		line-height: 35px;
		font-size:16px;
	}
	.note{
		width:1200px;
	    margin:0 auto;
	    background: #fff;
	    margin-bottom: 18px;
	    min-height: 1000px;
	}
</style>