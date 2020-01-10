// pages/perform/activitypage/activitypage.js
import {get} from '../http/http.js'
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		id:'',
		price:'',
		position:'',
		imgsrc:'',
		score:'',
		time:'',
		title:''
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		// console.log(options)
		this.setData({
			id: options.id,
			price: options.price,
			position: options.position,
			imgsrc: options.img,
			score: options.score,
			time: options.time,
			title:options.title
		},()=>{
			console.log(this.data)
		})
	
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})