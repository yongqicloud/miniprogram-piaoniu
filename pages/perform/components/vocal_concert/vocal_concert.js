// components/all_sort/all_sort.js

import { get } from '../../http/http.js'
Component({
	/**
	 * 组件的属性列表
	 */

	properties: {
		time: {
			type: String,
			observer: function (newVal, oldVal) {
				let newvalue = newVal
				this.setData({
					time: newvalue
				})
			}
		},
		sort: {
			type: String,
			observer: function (newVal, oldVal) {
				let newvalue = newVal
				this.setData({
					sort: newvalue
				})
			}
		}
	},
	observers: {
		'time,sort': function (time, sort) {
			console.log('改变了' + time)
			get({
				url: 'https://m.piaoniu.com/api/v3/activities?pageIndex=1&categoryId=1&sort=' + this.data.sort + '&seatMap=false&highestPrice=&lowestPrice=&time=' + this.data.time
			}).then((res) => {
				console.log(res)
				this.setData({
					datalist: res.data.data
				}, () => {
					// console.log(this.data.datalist)
				})
			})

		},
	},
	lifetimes: {
		attached: function () {
			// console.log(0)
			// console.log(this.properties.time.value)

			get({
				url: 'https://m.piaoniu.com/api/v3/activities?pageIndex=1&categoryId=1&time=&sort=&seatMap=false&highestPrice=&lowestPrice='
			}).then((res) => {
				//  console.log(res)
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
		datalist: [],

	},

	/**
	 * 组件的方法列表
	 */
	methods: {

	}
})
