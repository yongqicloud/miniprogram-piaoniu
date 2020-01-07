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
		show:null,
		color:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
	
		showComment:function(){
			// console.log(this)
			this.setData({
				show: "comment"
			})
		},
		showTime:function(event){
			this.setData({
				show:"time",
				color:true
			})
		}
  }
})
