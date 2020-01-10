// pages/perform/public/listitem.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		datalist:{
			type:Object
		},
		id:{
			type:String
		}
	},
	lifetimes: {
		ready: function () {

			// console.log(this.properties.datalist)
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
		jumppage:function(){
			console.log(this.properties.id.value ,0)
			// wx: navigateTo({ url: "pages/perform/activityPage/activitypage?"+this.properties.id.value }) 
		}
	}
})
