<template>
	<div class="note container">
		<div class="detailContent">
			<p class="title">{{ detail.title }}</p>
			<p class="contentBlock">{{ detail.note }}</p>
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
			this.api.getOneActicle(this.$route.params.id).then(res => {
				this.detail = res.data
			})
		},

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
	}
</style>