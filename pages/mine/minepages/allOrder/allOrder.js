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
      },
      id:"0"
  },
  
  lifetimes: {
    ready: function () {
      let pages = getCurrentPages();
      let type = pages[1].options.type
      let id = pages[1].options.id
      this.setData({
        id
      })
      switch(type){
        case "one":
          this.setData({
            allstate: {
              frist: false,
              two: true,
              three: false,
              four: false
            }
          }) 
        break;
        case "two":
          this.setData({
            allstate: {
              frist: false,
              two: false,
              three: true,
              four: false
            }
          })
        break;
        case "three":
          this.setData({
            allstate: {
              frist: false,
              two: false,
              three: false,
              four: true
            }
          })
        break;
      }
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    allkinds(){
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
       id:"0",
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
        id: "1",
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
        id: "2",
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
        id:"3",
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
