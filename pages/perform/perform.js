// pages/perform/perform.js
const app = getApp()
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
		show: '',//show==comment显示排序的下拉框，show==time显示时间的下拉框
    color: '',//color等于相应的文字，文字变红
    order: '综合排序',//控制显示在排序下拉框标题的文字
		during: '全部时间',//控制显示在时间下拉框标题的文字
    showshadow: false,//控制遮罩层的显示
    dots: ['全部分类',
      '演唱会',
      ' 旅游玩乐',
      '话剧歌剧',
      '休闲展览',
      '体育赛事',
      '音乐会',
      ' 儿童亲子',
      '戏曲综艺',
      '舞蹈芭蕾'
    ],
    swiperCurrent: 0,
		time:'',
		sort:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
		//这个方法要是其中又没传的参数，设置data的某些字段就会是undefined,功能就有很多bug了，而且这是不能设置默认值的，因为你不知道你在其它的逻辑中修改的字段的值到底是怎么样的
    // handleData: function({
    //   color,
    //   show,
    //   showshadow,
    //   during,
    //   order
    // }) {
    //   this.setData({
    //     showshadow,
    //     show,
    //     color,
    //     during,
    //     order
    //   })
    // },
    changeSwiper: function(e) {
      this.setData({
        swiperCurrent: e.currentTarget.dataset.i
      })
    },
    swiperChange: function(e) {
      this.setData({
        swiperCurrent: e.detail.current
      })
    },
    hiddenShadow: function() {
			this.setData({
        showshadow: false,
        show: "",
        color: ''
      })
    },
    showOrder: function(e) {
      let order = this.data.order
      if (this.data.show == 'comment') {
				this.setData({
          showshadow: false,
          show: "",
          color: ''
        })
      } else {
        this.setData({
          showshadow: true,
          show: "comment",
          color: order
        })
      }
    },
    showTime: function(e) {
      let during = this.data.during
      if (this.data.show == 'during') {
        this.setData({
          showshadow: fasle,
          show: "",
          color: ''
        })
      } else {
        this.setData({
          showshadow: true,
          show: "during",
          color: during
        })
      }
    },
    handleTime: function(e) {
			console.log(e.currentTarget.dataset.text)
			let time='';
			switch (e.currentTarget.dataset.text) {
				case '全部时间':
					time = '';
					break;
				case '一周内':
					time = 'weekly';
					break;
				case '一月内':
					time = 'monthly';
					break;
				case '本周末':
					time = 'thisWeekend';
					break;
				default:
					time = '';
			}
      this.setData({
        during: e.currentTarget.dataset.text,
        color: e.currentTarget.dataset.text,
        show: "",
        showshadow: false,
				time:time
      })
    },
    handleOrder: function(e) {
			// console.log(e.currentTarget.dataset.text)
			let sort='';
			switch (e.currentTarget.dataset.text){
				case '综合排序':
					sort = '';
					break;
				case '最新优先':
					sort = '2';
					break;
				case '低价优先':
					sort = '3';
					break;
				case '好评优先':
					sort = '4';
					break;
				default:
					sort = '';
			}
      this.setData({
        order: e.currentTarget.dataset.text,
        color: e.currentTarget.dataset.text,
        show: "",
        showshadow: false,
				sort:sort
      })
    }
  }
})