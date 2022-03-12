<!DOCTYPE html>
<html>
<body>

<?php
/* 标记与注释:<?php ?>(注释之间不能出现结束标记符)*/
echo "<h2>Hello,World!</h2>";
/**可以没有结束标记符，会一直扫描到结尾 */
?>
<?php
$large_number = 2147483648;
echo "var_dump的应用:";/**标签之后的下一句语句就是会自动换行 */
var_dump($large_number);
?>
<?php
$a = 1.23456789;
$b = 1.23456780;
$epsilon = 0.00001;

if(abs($a-$b) < $epsilon) {
    echo "<br />a==b:true";
}
?>
<?php
$a = "100 pigs"+12;
echo "100 pigs+12的结果为"+ $a;
//这里输出"Warning: A non-numeric value encountered in D:\Apache\Apache24\htdocs\ceshi.php on line 26"
?>
<?php
$array = array(
    "foo" => "bar",
    "bar" => "foo",
);
var_dump($array);
// 输出: array(2) { ["foo"]=> string(3) "bar" ["bar"]=> string(3) "foo" }
?>
<?php
$foo = 'Bob';
$bar = &$foo;//引用赋值,相当于取了别名
$bar = "My name is $bar";
echo $bar;
echo $foo;
// 输出My name is BobMy name is Bob
?>
<?php
$a = 1;
$b = 2;
function Sum()
{
    global $a, $b;//全局变量
    $b = $a + $b;
}

Sum();
echo $b;
?>
<?php
$a = 1;
$b = 2;
//下面报错不能重新声明,因为上面声明了Sum,先改成sum2
//sum也不行,函数不区分大小写
//函数名、方法名、类名不区分大小写
function sum2()
{
    //php将所有的全局变量存储在GLOBALS数组中
    $GLOBALS['b'] = $GLOBALS['a'] + $GLOBALS['b'];
}
Sum();
echo $b;
echo "<br />"
?>
<?php
//Constant expression contains invalid operations
//常量表达式包含无效操作
//static $int =sqrt(121);
?>
<?php
function test_global_ref() {
    global $obj;
    $new = new stdclass;
    $obj = &$new;
}

function test_global_noref() {
    global $obj;
    $new = new stdclass;
    $obj = $new;
}

test_global_ref();
$obj =‘’;
var_dump($obj);
test_global_noref();
var_dump($obj);
?>
<?php
function double($i){
    return $i+2;
}
//一些基础的表达式,前置或者后置
$b = $a = 5;
$c = $a++;
$e = $d = ++$b;
$f = double($d++);
$g = double(++$e);
$h = $g += 10;
?>
<?php
//PHP常量
define('PI',3.141592653589793);
define('-_-','smail');//正确
//const -_- = 'smail';//错误
const PII = 3.14;
//系统常量
echo '<hr/>',PHP_VERSION,'<br/>',PHP_INT_SIZE,'<br/>',PHP_INT_MAX;
echo '<hr/>',__DIR__,'<br/>',__FILE__;
?>
<?php
//php数据类型
//弱类型语言
//简单数据类型:整型(int)4,浮点型(float)8,字符串型(string),布尔类型(boolean)
//复合数据类型:对象(Object),数组类型(array)
//特殊数据类型:资源类型(resourse),空(NULL)
//类型转换
/**
 * $a = 'abc1.1.1';
 * $b = '1.1.1abc';
 * //自动转换
 * echo $a + $b;
 * //强制转换
 * echo (float)$a,(float)$b;
 */
?>


</body>
</html>
