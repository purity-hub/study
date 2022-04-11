// pages/list/list.js
// store 绑定
import {createStoreBindings} from 'mobx-miniprogram-bindings'
// store文件
import {store} from '../../store/store'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:'插值表达式',
    imageSrc:'http://www.itheima.com/images/logo.png',
    randomNum1:Math.random()*10,
    number1:1,
    count:0,
    msg:'你好，',
    upperInput:'sz',
    type: 2,//性别
    arr1: ['华为','小米','苹果'],
    userList:[
      {id:1,name:'光头强'},
      {id:2,name:'喜羊羊'},
      {id:3,name:'灰太狼'}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.storeBindings = createStoreBindings(this,{
      store,
      fields:['numA','numB','sum'],
      actions:['updateNumA']
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.storeBindings.destoryStoreBindings()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    //console.log("触发了刷新")
    this.setData({
      number1:1
    })
    wx.stopPullDownRefresh({
      success: (res) => {},
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //console.log("触发了下拉触底")

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 测试按钮事件
   * @param {*} e 
   */
  btnTapHandler (e){
    console.log("你点击了我！");
  },
  /**
   * 数字加一函数
   */
  addNum1(e){
    // 在控制台上展开e对象获取相应的数据
    //console.log(e);
    this.setData({
      number1:this.data.number1 + e.target.dataset.pnum
    })
  },
  /**
   * 输入框事件处理函数
   */
  inputHandler(e){
    // 通过e.detail.value获取数据
    //console.log(e)
    this.setData({
      msg:e.detail.value
    })
  },
  // 把输入的包含大写字母转化为小写字母
  ChangeUpper(e){
    this.setData({
      upperInput: e.detail.value
    })
  },
  getInfo(){
    wx.request({
      url: 'https://www.escook.cn/api/get',
      method: 'GET',
      data:{
        name:'zs',
        age:'30'
      },
      success:(res)=>{
        console.log(res)
      }
    })
  },
  postInfo(){
    wx.request({
      url: 'https://www.escook.cn/api/post',
      method: 'POST',
      data:{
        name:'zs',
        age:'30'
      },
      success:(res)=>{
        console.log(res)
      }
    })
  },
  gotoIndex(){
    wx:wx.switchTab({
      url: '/pages/index/index',
      success: (res) => {},
      fail: (res) => {},
      complete: (res) => {},
    })
  },
  gotoLogs(){
    wx:wx.navigateTo({
      url: '/pages/logs/logs'
    })
  },
  syncCount(e){
    console.log(e)
    this.setData({
      count:e.detail.value
    })
  },
  getChild(){
    // 通过id或者class设置组件唯一,获取这个组件
    const child = this.selectComponent('.zizujian1')
    //console.log(child)
    // 获取子组件,调用子组件的方法
    child.AddCount()
  },
  // 对比getInfo函数,避免了回调地狱
  // 打开增强编译
  async getDanger(){
    const {data:res}=await wx.p.request({
      method:'GET',
      url:'https://www.escook.cn/api/get',
      data:{
        name:'zs',
        age: 30
      }
    })
    console.log(res)
  },
  btnHandler1(e){
    //console.log(e)
    this.updateNumA(e.target.dataset.step)
  }
})