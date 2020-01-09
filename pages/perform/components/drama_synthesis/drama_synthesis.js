// components/all_sort/all_sort.js
import { get } from '../../http/http.js'


Component({
	/**
	 * 组件的属性列表
	 */
	properties: {

	},
	lifetimes: {
		attached: function () {
			get({
				url: 'https://m.piaoniu.com/api/v3/activities?pageIndex=1&categoryId=7&time=&sort=&seatMap=false&highestPrice=&lowestPrice='
			}).then((res) => {
				// console.log(res)
				this.setData({
					datalist: res.data.data
				}, () => {
					// console.log(this.data.datalist)
				})
			})
		}
	},
	/**
	 * 组件的初始数据
	 */
	data: {
		datalist: []
	},

	/**
	 * 组件的方法列表
	 */
	methods: {

	}
})
