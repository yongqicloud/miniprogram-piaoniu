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
    activeClass:'精彩推荐',
    list:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    checkoutNav(e){
      console.log(e)
      let { title, categoryid} = e.currentTarget.dataset
      
      wx.request({
        url: 'https://m.piaoniu.com/api/v3/activities?pageIndex=1&categoryId=' + categoryid,
        method:'GET',
        success:(res)=> {
          // console.log(res.data)
          this.setData({
            activeClass: title,
            list:res.data.data
          })
        }
      })
    },
    fetchData:()=>{

    }
  },
  lifetimes:{
    attached(){
      wx.request({
        url: 'https://m.piaoniu.com/api/v3/activities?pageIndex=1&categoryId=0',
        method: 'GET',
        success: (res) => {
          console.log(res.data)
          this.setData({
            list: res.data.data,
            name_list: app.nav_list
          })
        }
      })
    }
  }
})
