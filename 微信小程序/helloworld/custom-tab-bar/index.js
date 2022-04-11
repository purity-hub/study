// custom-tab-bar/index.js
import {storeBindingsBehavior} from 'mobx-miniprogram-bindings'
import {store} from '../store/store'
Component({
  behaviors:[storeBindingsBehavior],
  storeBindings:{
    store, //指定绑定的store
    fields:{
      sum:'sum',
      active:'activeTabBarIndex'
    },
    actions:{
      updateActiveTabBar:'updateActiveTabBar'
    }
  },
  // 监听(watch)
  observers:{
    'sum':function(val){
      this.setData({
        'list[1].info':val
      })
    }
  },
  options:{
    styleIsolation:'shared'
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    active:0,
    "list": [
      {
      "pagePath": "/pages/index/index",
      "text": "首页",
      "selectedIconPath": "/images/tabs/home-active.png",
      "iconPath": "/images/tabs/home.png"
    },
    {
      "pagePath": "/pages/list/list",
      "text": "学习",
      "selectedIconPath": "/images/tabs/study-active.png",
      "iconPath": "/images/tabs/study.png",
      "info":2
    },{
      "pagePath": "/pages/contact/contact",
      "text": "联系我",
      "selectedIconPath": "/images/tabs/contact-active.png",
      "iconPath": "/images/tabs/contact.png"
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event){
      // this.setData({
      //   active:event.detail
      // })
      this.updateActiveTabBar(event.detail)
      wx.switchTab({
        url: this.data.list[event.detail].pagePath,
      })
    }
  }
})
