// pages/mine/minepages/ticketing/price/price.js
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
    pricelist:[],
    price:819,
    activestyle:'',
  },
  lifetimes:{
    attached: function () {
      wx.request({
        url:"https://m.piaoniu.com/api/v3/ticketCategories/?eventId=1432760&supportSpeedPackBuy=true&b2c=true",
        data: {
          x: '',
          y: ''
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: (res) => {
          this.setData({
            pricelist: res.data
          })
        }
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    handlechoose(e){
      let price = e.currentTarget.dataset.price
      this.triggerEvent('myevent',price)
      this.setData({
        activestyle:"active"
      })
    }
  }
})
