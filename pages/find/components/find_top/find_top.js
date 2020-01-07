// pages/find/find_top.js
const app = getApp()
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //事件处理函数
    handelTopClick(e){
      if (e.currentTarget.dataset.text === "热门"){
        this.triggerEvent('HotType',1)
      }
      else{
        this.triggerEvent('HotType',2)
      }
    }
  },
  // lifetimes:{
    // onReady(){
    //   this.setData({
    //     hot : app.hot
    //   })
    // }
  // }
})
