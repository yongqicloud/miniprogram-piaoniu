// pages/mine/allState/allState.js
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
    type:"one"
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    handlefrist(){
      let type = this.data.type
      wx.navigateTo({
        url: '/pages/mine/minepages/allOrder/allOrder?type=aaa',
      })
    }
  }
})
