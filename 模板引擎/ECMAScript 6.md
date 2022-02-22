@[TOC](目录)
# ECMAScript 6
ECMAScript 是JavaScript语言的国际标准，JavaScript是ECMAScript的实现。

## ECMAScript 和 JavaScript 的关系
ECMAScript 和 JavaScript 的关系是，前者是后者的规格，后者是前者的一种实现（另外的 ECMAScript 方言还有 JScript 和 ActionScript）。日常场合，这两个词是可以互换的。
## let 与 const
### let
它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。

```javascript
{
  let a = 10;
  var b = 1;
}
a // ReferenceError: a is not defined.
b // 1
```
for循环的计数器，就很合适使用let命令。

```javascript
for (let i = 0; i < 10; i++) {
  // ...
}
console.log(i);
// ReferenceError: i is not defined
```
上面代码中，计数器i只在for循环体内有效，在循环体外引用就会报错。
#### 不存在变量提升
var命令会发生“变量提升”现象，即变量可以在声明之前使用，值为undefined。这种现象多多少少是有些奇怪的，按照一般的逻辑，变量应该在声明语句之后才可以使用。

let命令改变了语法行为，它所声明的变量一定要在声明后使用，否则报错。

```javascript
// var 的情况
console.log(foo); // 输出undefined
var foo = 2;
// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;
```
#### 暂时性死区
只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。
#### 不允许重复声明
let不允许在相同作用域内，重复声明同一个变量。
### 块级作用域
let实际上为 JavaScript 新增了块级作用域。
块级作用域的出现，实际上使得获得广泛应用的匿名立即执行函数表达式（匿名 IIFE）不再必要了。
#### 块级作用域与函数声明
ES5 规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。

###  const 命令
const声明一个只读的常量。一旦声明，常量的值就不能改变。

### 顶层对象的属性
顶层对象，在浏览器环境指的是window对象，在 Node 指的是global对象。ES5之中，顶层对象的属性与全局变量是等价的。
### globalThis 对象
JavaScript 语言存在一个顶层对象，它提供全局环境（即全局作用域），所有代码都是在这个环境中运行。但是，顶层对象在各种实现里面是不统一的。

 1. 浏览器里面，顶层对象是window，但 Node 和 Web Worker 没有window。
 2. 浏览器和 Web Worker 里面，self也指向顶层对象，但是 Node 没有self。
 3. Node 里面，顶层对象是global，但其他环境都不支持。

同一段代码为了能够在各种环境，都能取到顶层对象，现在一般是使用this变量，但是有局限性。

 1. 全局环境中，this会返回顶层对象。但是，Node 模块和 ES6 模块中，this返回的是当前模块。
 2. 函数里面的this，如果函数不是作为对象的方法运行，而是单纯作为函数运行，this会指向顶层对象。但是，严格模式下，这时this会返回undefined。
 3. 不管是严格模式，还是普通模式，new Function('return this')()，总是会返回全局对象。但是，如果浏览器用了
    CSP（Content Security Policy，内容安全策略），那么eval、new Function这些方法都可能无法使用。

```javascript
// 方法一
(typeof window !== 'undefined'
   ? window
   : (typeof process === 'object' &&
      typeof require === 'function' &&
      typeof global === 'object')
     ? global
     : this);
// 方法二
var getGlobal = function () {
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error('unable to locate global object');
};
```

