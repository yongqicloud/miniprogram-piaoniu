// pages/mine/minepages/order/order.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  lifetimes:{
    ready:function () {
      let pages = getCurrentPages();
      let orderdata = JSON.parse(pages[1].options.orderdata)
      this.setData({
          orderdata
      })
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    orderdata:{}
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
