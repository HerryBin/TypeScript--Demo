/**
 * Created by xianrongbin on 2017/4/15.
 */
/*1、多行字符串*/
var content = "aaa\nbbbb\ncccc";
/*2、字符串模板*/
var getName = function () {
    return 'xianrongbin';
};
console.log("hello  " + getName());
/*3、字符串自动拆分*/
function test(template, name, age) {
}
var myName = 'xianrongbin', getAge = function () {
    return 18;
};
(_a = ["hello,my name is ", ",i'm ", ""], _a.raw = ["hello,my name is ", ",i'm ", ""], test(_a, myName, getAge()));
var _a;
