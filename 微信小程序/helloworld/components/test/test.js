// components/test/test.js
const myBehavior = require('../../behaviors/my-behavior')
// store
import {storeBindingsBehavior} from 'mobx-miniprogram-bindings'
import {store} from '../../store/store'
Component({
  // 挂载
  behaviors:[myBehavior,storeBindingsBehavior],
  lifetimes:{
    created(){}, //页面被显示
    attached(){}, //页面被隐藏
    datached(){} //页面尺寸发生变化
  },
  storeBindings:{
    store, //指定绑定的store
    fields:{
      numA:()=>store.numA,
      numB:()=>store.numB,
      sum:'sum'
    },
    actions:{
      updateNumB:'updateNumB'
    }
  },
  pageLifetimes:{
    show:function(){
      this._randonColor()
    },
    hide:function(){},
    resize:function(){}
  },
  options:{
    pureDataPattern: /^_/,
    // 开启多槽占位
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    //max: Number,
    max:{
      type:Number,
      value:10
    },
    count:Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    count:0,
    n1:'',
    n2:'',
    sum:'',
    _rgb:{
      r:0,
      g:0,
      b:0
    },
    fullColor:'0,0,0'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    AddCount(){
      if(this.data.count>=this.properties.max) return
      this.setData({
        count: this.data.count+1
      })
      this._showCount()
      //同步给父组件
      this.triggerEvent('sync',{value:this.properties.count})
    },
    // 自定义方法以下划线开头以便于区分
    _showCount(){
      wx.showToast({
        title: 'Count是' + this.data.count,
        icon: 'nono'
      })
    },
    setN1(e){
      this.setData({
        n1:e.detail.value
      })
    },
    setN2(e){
      this.setData({
        n2:e.detail.value
      })
    },
    changeR(){
      this.setData({
        '_rgb.r':this.data._rgb.r + 5 > 255 ? 255 : this.data._rgb.r + 5
      })
    },
    changeG(){
      this.setData({
        '_rgb.g':this.data._rgb.g + 5 > 255 ? 255 : this.data._rgb.g + 5
      })
    },
    changeB(){
      this.setData({
        '_rgb.b':this.data._rgb.b + 5 > 255 ? 255 : this.data._rgb.b + 5
      })
    },
    _randonColor(){
      this.setData({
        _rgb:{
          r:Math.floor(Math.random()*256),
          g:Math.floor(Math.random()*256),
          b:Math.floor(Math.random()*256)
        }
      })
    },
    // store
    btnHandler2(e){
      this.updateNumB(e.target.dataset.step)
    }
  },
  // watch监听
  observers:{
    'n1,n2':function(n1,n2){
      this.setData({
        sum:(n1-0)+(n2-0)
      })
    },
    '_rgb.r,_rgb.g,_rgb.b':function(r,g,b){
      this.setData({
        fullColor:r+','+g+','+b
      })
    }
  }
})
