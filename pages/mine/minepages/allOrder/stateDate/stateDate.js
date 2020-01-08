// pages/mine/minepages/allOrder/stateDate/stateDate.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  data: {
    orderlist: []
  },
  lifetimes: { 
    attached: function()  {
      console.log(this)
      wx.request({
        url: 'https://m.piaoniu.com/api/v2/home/recommends?pageIndex=1&pageSize=10', //仅为示例，并非真实的接口地址
        data: {
          x: '',
          y: ''
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success:(res) =>  {
          this.setData({
            orderlist:res.data.data
          })
        }
      })
    },
  },


  /**
   * 组件的方法列表
   */
  methods: {

  }
})
