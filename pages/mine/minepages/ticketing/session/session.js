// pages/mine/minepages/ticketing/session/session.js
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
    session:{}
  },
  lifetimes:{
    attached:function(){
        wx.request({
          url: 'https://m.piaoniu.com/api/v3/activities/131693?b2c=true&areaTicketType=2&supportSpeedPackBuy=true', //仅为示例，并非真实的接口地址
        data: {
          x: '',
          y: ''
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success:(res) =>  {
          this.setData({
            session:res.data
          })
        }
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
