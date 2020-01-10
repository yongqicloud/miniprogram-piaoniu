// pages/mine/minepages/ticketing/ticketing.js
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
    price:819,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onMyEvent(e){
      let price = e.detail
      this.setData({
        price
      })
    }
  }
})
