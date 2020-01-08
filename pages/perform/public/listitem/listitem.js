// pages/perform/public/listitem.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		datalist:{
			type:{}
		}
	},
	lifetimes: {
		attached: function () {
	console.log(this.properties.datalist.value)
		}
	},
	/**
	 * 组件的初始数据
	 */
	data: {
		// datalist:[]
	},

	/**
	 * 组件的方法列表
	 */
	methods: {

	}
})
