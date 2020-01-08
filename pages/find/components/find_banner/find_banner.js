// pages/find/components/find_banner/find_banner.js
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
    background: ['../../images/find_banner.png'],
    //是否显示面板指示点
    indicatorDots: true,
    // 滑动方向是否为纵向
    vertical: false,
    autoplay: true,
    // 自动切换时间间隔	
    interval: 2000,
    // 滑动动画时长	
    duration: 500,
    // 是否采用衔接滑动
    circular : true
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  // 轮播图插件
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },

  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})
