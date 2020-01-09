// pages/index/auto-load/auto-load.js
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
    attached() {
      wx.request({
        url: 'https://api.piaoniu.com/v3/home/recommend?categoryType=0&pageIndex=1&pageSize=10',
        success: (res) => {
          console.log(res.data)
          const left_list = []
          const right_list = []

          res.data.data.forEach((item, index) => {
            if (index % 2 === 1) {
              right_list.push(item)
            } else {
              left_list.push(item)
            }
          })
          this.setData({
            left_list,
            right_list
          })
          setTimeout(() => {
            console.log(this.data)
          })
        }
      })
    }
  }
})
