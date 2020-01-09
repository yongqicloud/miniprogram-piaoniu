  // pages/mine/pages/allOrder/allOrder.js
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
     show:false,
     allstate:{
       frist:true,
       two:false,   
       three:false,
       four:false                                                           
     },
      active:{
       color: "red",
       fotnSize:"32rpx"
      }
  },
  pageLifetimes:{
    onLoad:function () {
      console.log(this.is)
    }
  },
  lifetimes: {
    attached: function () {
       console.log(this.is)
    },
    ready:function(options){
        console.log(options)
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },

    onShow() {
      /*
        需要在mounted之后调用也就是wx中onLoad之后
         */
      this.query = this.$root.$mp.query
      console.log(this.query)
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    allkinds(){
      // var query = wx.createSelectorQuery();
      // let a = query.select(".detail-pop").fields({computedStyle: ['margin', 'fontSize']},(res) => {
      //   res.fontSize
      // }).exec()
     
      this.setData({
        show:true,
        fontcolor:"#000"
    })
  },
   closetap(){
     this.setData({
       show:false,
       fontcolor: "red"
     })
   },
   handlefrist(){
     this.setData({
       allstate: {
         frist: true,
         two: false,
         three: false,
         four: false
       }
     })
   },
    handletwo() {
      this.setData({
        allstate: {
          frist: false,
          two: true,
          three: false,
          four: false
        }
      })
    },
    handlethree() {
      this.setData({
        allstate: {
          frist: false,
          two: false,
          three: true,
          four: false
        }
      })
    },
    goback(){
      wx.navigateBack({delta:1})
    },
    handlefour() {
      this.setData({
        allstate: {
          frist: false,
          two: false,
          three: false,
          four: true
        }
      })
    }
  }
})
