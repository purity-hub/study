// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    //轮播图数组
    swiperList:[],
    //九宫格数据
    gridList:[]
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    this.getSwiperList()
    this.getGridList()
  },
  getSwiperList(){
    wx.request({
      url: 'https://www.escook.cn/slides',
      method: 'GET',
      success:(res)=>{
        //console.log(res);
        this.setData({
          swiperList:res.data
        })
      }
    })
  },
  getGridList(){
    wx.request({
      url: 'https://www.escook.cn/categories',
      method:'GET',
      success:(res)=>{
        this.setData({
          gridList:res.data
        })
      }
    })
  }
})
