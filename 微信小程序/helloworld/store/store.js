//专门来创建 Store实例对象
import {action, observable} from 'mobx-miniprogram'

// 全局变量
export const store = observable({
  // 数据字段
  numA: 1,
  numB: 2,
  activeTabBarIndex:0,
  // 计算属性(无需修改,自动计算)
  // get只读
  get sum(){
    return this.numA + this.numB
  },
  // 调用actions方法来修改store数据
  updateNumA:action(function(step){
    this.numA += step
  }),
  updateNumB:action(function(step){
    this.numB += step
  }),
  updateActiveTabBar:action(function(index){
    this.activeTabBarIndex=index
  })
})