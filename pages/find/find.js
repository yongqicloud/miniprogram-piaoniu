// pages/find/find.js
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
    hot : true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handelHotType(e){
      console.log(e.detail)
      if(e.detail === 1){
        this.setData({
          hot : true
        })
      }
      else {
        this.setData({
          hot: false
        })
      }
      console.log(this.data.hot)
    }
  }
})
