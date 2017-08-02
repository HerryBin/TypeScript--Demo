/**
 * Created by xianrongbin on 2017/8/1.
 */
/**
 *  1、布尔值
 *  2、数字
 *     TypeScript里所有的数字都是浮点数，0x 16进制度，0b 二进制，0o 八进制
 *
 *  3、字符串
 *     和ES6一样，可以使用模板字符串 `${变量名A}`，定义多行文本和内嵌表达式
 *
 *  4、数组
 *     可以是普通数组，也可以是数组泛型
 *
 *  5、元组
 *    允许表示 一个已知 元素数量和类型的数组，各元素类型不必相同
 *
 *  6、枚举类型
 *     默认从0开始元素编号，也可以手动指定
 * */
var isDone = true;
var age = 0x16;
var sayAge = "I'm " + age + " now";
var numberArray = [12, 33, 99];
var tupleArray = ['name', 19];
console.log(tupleArray[0]);
tupleArray[3] = 'world';
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 9] = "Blue";
})(Color || (Color = {}));
var redColor = Color.Blue;
