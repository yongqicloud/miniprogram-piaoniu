  // pages/mine/minepages/ticketing/accounts/accounts.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    price: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    num:1,
    totalprice:0,
    dealaccount:{}
  },
  observers: {
    'price': function (price) {
      // 在 numberA 或者 numberB 被设置时，执行这个函数
      this.setData({
        totalprice: (this.data.num) * (price)
      })
    }
  },
  lifetimes:{
    attached: function () {
      wx.request({
        url: 'https://m.piaoniu.com/api/v3/activities/131693?b2c=true&areaTicketType=2&supportSpeedPackBuy=true', //仅为示例，并非真实的接口地址
        data: {
          x: '',
          y: ''
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: (res) => {
          this.setData({
            dealaccount: {
              poster:res.data.poster,
              properName: res.data.properName,
              time: res.data.timeRange,
              address: res.data.venue.name
            }
          })
        }
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
      handleop(e){
        let type = e.currentTarget.dataset.id
        let num = this.data.num;
          if(type=="add"){
            num++
            this.setData({
              num
            })
          }else{
            if (num > 1) {
              num--
              this.setData({
                num
              })
            }
          }
        this.setData({
          totalprice:(this.data.num)*(this.data.price)
        })
      },
      handleaccount(){
        this.setData({
          dealaccount: {...this.data.dealaccount, price:this.data.totalprice }
        })
        let orderdata = JSON.stringify(this.data.dealaccount)
       wx.navigateTo({
         url: '/pages/mine/minepages/order/order?orderdata='+orderdata,
       })
      }
  }
})
