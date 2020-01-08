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
      let { title } = e.currentTarget.dataset
      this.setData({
        activeClass: title,
      })
    }
  },
  lifetimes: {
    attached() {
      wx.request({
        url: 'https://api.piaoniu.com/v3/home/recommend?categoryType=0&pageIndex=1&pageSize=10',
        success:(res)=>{
          console.log(res.data)
          const left_list = []
          const right_list = []

          res.data.data.forEach((item,index)=>{
            if(index %2 === 1){
              left_list.push(item)
            }else{
              right_list.push(item)
            }
          })     
          this.setData({
            left_list,
            right_list
          })     
        }
      })
    }
  }
})
