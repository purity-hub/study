module.exports = Behavior({
  data:{
    username:'purity'
  },
  properties:{},
  methods:{}
  // 肯定会伴随着覆盖的问题
  // 对象同名则合并-->大对象
  // 其它情况:组件 > 父behavior > 子behavior > 靠后的behavior > 靠前的behavior
  // 优先级高的覆盖优先级低的
})