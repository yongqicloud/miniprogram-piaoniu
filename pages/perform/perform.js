// pages/perform/perform.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
		show:'',
		color:'',
		order:'综合排序',
		time:'全部时间',
		showshadow:false,
		dots: ['全部分类',
			'演唱会',
			' 旅游玩乐',
			'话剧歌剧',
			'休闲展览',
			'体育赛事',
			'音乐会',
			' 儿童亲子',
			'戏曲综艺',
			'舞蹈芭蕾'],
		swiperCurrent:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
		handleData: function ({ color, show, showshadow,time,order}){
			this.setData({
				showshadow,
				show,
				color,
				time,
				order
			})
		},
		changeSwiper:function(e){
			console.log(e.currentTarget.dataset.i)
			this.setData({
				swiperCurrent: e.currentTarget.dataset.i
			})
			console.log(e)
		},
		swiperChange: function (e) {
			// console.log(e)
			this.setData({
				swiperCurrent: e.detail.current
			})
		},
		hiddenShadow:function(){
			this.handleData({
				showshadow: false,
				show: "",
				color: ''})
		},
		showOrder:function(e){
			let order = this.data.order
			if (this.data.show == 'comment'){
				this.handleData({
					showshadow: false,
					show: "",
					color: ''
				})
			}else{
				this.handleData({
					showshadow: true,
					show: "comment",
					color: order
				})
			}
		},
		showTime:function(e){
			let time = this.data.time
			if (this.data.show == 'time') {
				this.handleData({
					showshadow: fasle,
					show: "",
					color: ''
				})
			} else {
				this.handleData({
					showshadow: true,
					show: "time",
					color:time
				})
			}
		},
		handleTime:function(e){
			this.handleData({
				time: e.currentTarget.dataset.text,
				color: e.currentTarget.dataset.text,
				show: "",
				showshadow: false,
			})
		},
		handleOrder: function (e) {
			this.handleData({
				order: e.currentTarget.dataset.text,
				color: e.currentTarget.dataset.text,
				show: "",
				showshadow: false,
			})
		}
  }
})
