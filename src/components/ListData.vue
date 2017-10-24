<template>
	<div class="listData">
		<table>
			<tr>
				<th>序列</th>
				<th>品牌</th>
				<th>车型</th>
				<th>云店名称</th>
				<th>车架号</th>
				<th>销售时间</th>
				<th>合伙人</th>
				<th>省</th>
				<th>市</th>
				<th>县(区)</th>
				<th>销售数量(台)</th>
				<th>销售金额(元)</th>
				<th>颜色</th>
			</tr>
			<tr v-for="list in detailsInfo[papesNumber-1]">
				<td>{{list.index}}</td>
				<td>{{list.brand}}</td>
				<td>{{list.Models}}</td>
				<td>{{list.name}}</td>
				<td>{{list.vehicle}}</td>
				<td>{{list.time}}</td>
				<td>{{list.partner}}</td>
				<td>{{list.sheng}}</td>
				<td>{{list.shi}}</td>
				<td>{{list.xian}}</td>
				<td>{{list.number}}</td>
				<td>{{list.money}}</td>
				<td>{{list.color}}</td>
			</tr>
		</table>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default{
		data(){
			return{
				//后台获取的数据
				detailsInfo:[
					[{
							index:'1',
							brand:'北京现代',
							Models:'2015款中华V3.1.5T 手动都市型',
							name:"北京现代4S店",
							vehicle:"H009000000000001",
							time:'2017-5-9',
							partner:'张三',
							sheng: '北京',
							shi:'北京',
							xian:'延庆',
							number:'1000',
							money:'100000',
							color:'红色'
						},
						{
							index:'2',
							brand:'北京现代',
							Models:'2015款中华V3.1.5T 手动都市型',
							name:"北京现代4S店",
							vehicle:"H009000000000001",
							time:'2017-5-9',
							partner:'张三',
							sheng: '北京',
							shi:'北京',
							xian:'延庆',
							number:'1000',
							money:'100000',
							color:'红色'
						},{
							index:'3',
							brand:'北京现代',
							Models:'2015款中华V3.1.5T 手动都市型',
							name:"北京现代4S店",
							vehicle:"H009000000000001",
							time:'2017-5-9',
							partner:'张三',
							sheng: '北京',
							shi:'北京',
							xian:'延庆',
							number:'1000',
							money:'100000',
							color:'红色'
						},{
							index:'4',
							brand:'北京现代',
							Models:'2015款中华V3.1.5T 手动都市型',
							name:"北京现代4S店",
							vehicle:"H009000000000001",
							time:'2017-5-9',
							partner:'张三',
							sheng: '北京',
							shi:'北京',
							xian:'延庆',
							number:'1000',
							money:'100000',
							color:'红色'
						},{
							index:'5',
							brand:'北京现代',
							Models:'2015款中华V3.1.5T 手动都市型',
							name:"北京现代4S店",
							vehicle:"H009000000000001",
							time:'2017-5-9',
							partner:'张三',
							sheng: '北京',
							shi:'北京',
							xian:'延庆',
							number:'1000',
							money:'100000',
							color:'红色'
						},{
							index:'6',
							brand:'北京现代',
							Models:'2015款中华V3.1.5T 手动都市型',
							name:"北京现代4S店",
							vehicle:"H009000000000001",
							time:'2017-5-9',
							partner:'张三',
							sheng: '北京',
							shi:'北京',
							xian:'延庆',
							number:'1000',
							money:'100000',
							color:'红色'
						},{
							index:'7',
							brand:'北京现代',
							Models:'2015款中华V3.1.5T 手动都市型',
							name:"北京现代4S店",
							vehicle:"H009000000000001",
							time:'2017-5-9',
							partner:'张三',
							sheng: '北京',
							shi:'北京',
							xian:'延庆',
							number:'1000',
							money:'100000',
							color:'红色'
						},{
							index:'8',
							brand:'北京现代',
							Models:'2015款中华V3.1.5T 手动都市型',
							name:"北京现代4S店",
							vehicle:"H009000000000001",
							time:'2017-5-9',
							partner:'张三',
							sheng: '北京',
							shi:'北京',
							xian:'延庆',
							number:'1000',
							money:'100000',
							color:'红色'
						},{
							index:'9',
							brand:'北京现代',
							Models:'2015款中华V3.1.5T 手动都市型',
							name:"北京现代4S店",
							vehicle:"H009000000000001",
							time:'2017-5-9',
							partner:'张三',
							sheng: '北京',
							shi:'北京',
							xian:'延庆',
							number:'1000',
							money:'100000',
							color:'红色'
						},{
							index:'10',
							brand:'北京现代',
							Models:'2015款中华V3.1.5T 手动都市型',
							name:"北京现代4S店",
							vehicle:"H009000000000001",
							time:'2017-5-9',
							partner:'张三',
							sheng: '北京',
							shi:'北京',
							xian:'延庆',
							number:'1000',
							money:'100000',
							color:'红色'
					}],
					[{
							index:'1',
							brand:'北京ISS',
							Models:'2015款中华V3.1.5T 手动都市型',
							name:"北京ISS4S店",
							vehicle:"H009000000000001",
							time:'2017-5-9',
							partner:'张三',
							sheng: '北京',
							shi:'北京',
							xian:'延庆',
							number:'1000',
							money:'100000',
							color:'红色'
						},
						{
							index:'2',
							brand:'北京ISS',
							Models:'2015款中华V3.1.5T 手动都市型',
							name:"北京ISS4S店",
							vehicle:"H009000000000001",
							time:'2017-5-9',
							partner:'张三',
							sheng: '北京',
							shi:'北京',
							xian:'延庆',
							number:'1000',
							money:'100000',
							color:'红色'
						},{
							index:'3',
							brand:'北京ISS',
							Models:'2015款中华V3.1.5T 手动都市型',
							name:"北京ISS4S店",
							vehicle:"H009000000000001",
							time:'2017-5-9',
							partner:'张三',
							sheng: '北京',
							shi:'北京',
							xian:'延庆',
							number:'1000',
							money:'100000',
							color:'红色'
						},{
							index:'4',
							brand:'北京ISS',
							Models:'2015款中华V3.1.5T 手动都市型',
							name:"北京ISS4S店",
							vehicle:"H009000000000001",
							time:'2017-5-9',
							partner:'张三',
							sheng: '北京',
							shi:'北京',
							xian:'延庆',
							number:'1000',
							money:'100000',
							color:'红色'
						},{
							index:'5',
							brand:'北京ISS',
							Models:'2015款中华V3.1.5T 手动都市型',
							name:"北京ISS4S店",
							vehicle:"H009000000000001",
							time:'2017-5-9',
							partner:'张三',
							sheng: '北京',
							shi:'北京',
							xian:'延庆',
							number:'1000',
							money:'100000',
							color:'红色'
						},{
							index:'6',
							brand:'北京ISS',
							Models:'2015款中华V3.1.5T 手动都市型',
							name:"北京ISS4S店",
							vehicle:"H009000000000001",
							time:'2017-5-9',
							partner:'张三',
							sheng: '北京',
							shi:'北京',
							xian:'延庆',
							number:'1000',
							money:'100000',
							color:'红色'
						},{
							index:'7',
							brand:'北京ISS',
							Models:'2015款中华V3.1.5T 手动都市型',
							name:"北京ISS4S店",
							vehicle:"H009000000000001",
							time:'2017-5-9',
							partner:'张三',
							sheng: '北京',
							shi:'北京',
							xian:'延庆',
							number:'1000',
							money:'100000',
							color:'红色'
						},{
							index:'8',
							brand:'北京ISS',
							Models:'2015款中华V3.1.5T 手动都市型',
							name:"北京ISS4S店",
							vehicle:"H009000000000001",
							time:'2017-5-9',
							partner:'张三',
							sheng: '北京',
							shi:'北京',
							xian:'延庆',
							number:'1000',
							money:'100000',
							color:'红色'
						},{
							index:'9',
							brand:'北京ISS',
							Models:'2015款中华V3.1.5T 手动都市型',
							name:"北京ISS4S店",
							vehicle:"H009000000000001",
							time:'2017-5-9',
							partner:'张三',
							sheng: '北京',
							shi:'北京',
							xian:'延庆',
							number:'1000',
							money:'100000',
							color:'红色'
						},{
							index:'10',
							brand:'北京ISS',
							Models:'2015款中华V3.1.5T 手动都市型',
							name:"北京ISS4S店",
							vehicle:"H009000000000001",
							time:'2017-5-9',
							partner:'张三',
							sheng: '北京',
							shi:'北京',
							xian:'延庆',
							number:'1000',
							money:'100000',
							color:'红色'
					}]
				]
			}
		},
		computed: {
			// ...mapGetters([
			//   'papesNumber'
			// ])
			papesNumber(){
				return this.$store.getters.papesNumber
			}

		}
		
	}

</script>


<style>
	.listData table{
		width: 100%;
	}
	.listData table tr{
		text-align: center;
		line-height: 50px;
	}
</style>