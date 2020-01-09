// pages/index/nav-swiper/nav-swiper.js
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
    currentData:0,
    activeClass: '全部',
    name_list: [{
      title:'全部'
    },
    {
      title:'新演速递'
    },
    {
      title:'境外热卖'
    }],
    list:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    checkoutNav(e) {
      let { title ,index} = e.currentTarget.dataset
      this.setData({
        activeClass: title,
        currentData:index
      })
    },
    handleIndexChange(e){
      console.log(e)
      this.setData({
        currentData:e.detail.current
      })
    }
  },
  lifetimes: {
    
  }
})
