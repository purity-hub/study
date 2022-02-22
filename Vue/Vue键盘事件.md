 1. Vue中常见按键别名：
回车=>enter
删除=>delete(捕获“删除”和退格键)
空格=>space
换行=>tab(特殊，必须配合keydown使用)
上=>up
下=>down
左=>left
右=>right

2. Vue未提供别名的按键，可以使用按键原始名,但是要转化未短横线命名法:caps-lock
3. 系统修饰符(特殊)：ctrl，alt，shift，meta
(1)配合keyup:按下修饰键的同时，再按其他键，随后释放其他键，事件才会触发
(2)配合keydown使用：正常触发事件
4. keyCode去指定具体的按键
5. Vue.config.keyCodes.自定义键名=编码

```javascript
@keyup.enter
```
任意键开始：

```c
while(1){
　　GameStart();
　　// GameEnd()
　　while(!kbhit());  //  没有按键就死循环
　　ch = getch();
　　if(ch ！= '2'){  
　　// 若是2则重新开始，不是则退出
　　	break;
　　}
}// 不是ESC 则继续死循环
```

