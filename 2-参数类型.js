/**
 * Created by xianrongbin on 2017/4/15.
 */
/**
 * 1、参数类型
 * 在参数名称后面使用冒号来指定参数的类型
 *
 * **/
var myName = 'xianrongbin';
/**
 * 此时会在 .ts文件中报错，但在编译后的.js文件中照样可以使用
 * */
myName = 19;
/**
 * 2、类型推断机制 此时alias默认类型是string类型
 * */
var alias = 'hello world';
alias = 12;
/**
 *Boolean Number String  Enum Any void
 * */
var arrList = [123, 55, 66];
var listName = ['jack', 'Tom'];
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var colorName = Color.Blue;
var anyValue = 'china';
anyValue = 12;
/**
 * 3、可以给方法以及方法参数 指定类型
 * */
function getAge(age) {
    return 'herry is' + '--' + age;
}
/**
 * 4、自定义类型
 */
var Person = (function () {
    function Person() {
    }
    return Person;
}());
var onePerson = new Person();
/**
 * 5、默认参数
 * 在参数声明后面用等号来指定参数的默认值
 * 方法带默认值的参数必须声明在后面
 */
function address(name, address) {
    if (address === void 0) { address = 'default address'; }
}
/**
 * 6、可选参数
 * 在方法的参数声明后面用问号来表明此参数为可选参数
 *可选参数必须声明在必填参数后面
 */
function apply(name, age, address) {
    if (address === void 0) { address = 'default address'; }
}
apply('herry');
