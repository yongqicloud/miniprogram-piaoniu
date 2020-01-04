// pages/index/nav-swiper/nav-swiper.js
const app = getApp()
console.log(app)
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

  },
  lifetimes:{
    attached(){
      this.setData({
        list:app.nav_list
      })
    }
  }
})
