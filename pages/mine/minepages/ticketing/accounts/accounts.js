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
    totalprice:0
  },
  observers: {
    'price': function (price) {
      // 在 numberA 或者 numberB 被设置时，执行这个函数
      this.setData({
        totalprice: (this.data.num) * (price)
      })
    }
  },
  // lifetimes:{
  //   attached:function () {
  //     this.setData({
  //       totalprice: (this.data.num) * (this.data.price)
  //     })
  //   }
  // },
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
  }
})
