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
    handletap(e){
      let type = e.currentTarget.dataset.type
      let  id =e.currentTarget.dataset.id
      wx.navigateTo({
        url: '/pages/mine/minepages/allOrder/allOrder?type=' + type + "&id="+id,
      })
    }
  }
})
