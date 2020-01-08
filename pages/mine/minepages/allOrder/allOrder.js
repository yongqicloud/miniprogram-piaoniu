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
     fontcolor:"red",
     allstate:{
       frist:true,
       two:false,   
       three:false,
       four:false                                                           
     }
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
