/**
 * Created by xianrongbin on 2017/4/15.
 */
/**
 * 1、Rest and Spread 操作符
 *用来申明任意数量的方法和参数
 * */
function func1() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
}
func1(1, 2, 3, 'testSpread');
function func2(a, b, c) {
}
var args = [1, 2];
func2.apply(void 0, args1);
/**
 *2、generator函数
 * 控制函数的执行过程，手工暂停和恢复代码执行
 * */
function doSomething() {
    console.log('start');
    yield;
    console.log('finish');
}
var func = doSomething();
func.next();
func.next();
/**
 *3、析构表达式
 * 通过表达式将对象或数组拆解成任意数量的变量
 * */
/**
 *从对象里面取值
 * */
function getStudent() {
    return {
        name: 'jack',
        age: 19,
        level: {
            firstLevel1: 1,
            secondLeve2: 2
        }
    };
}
var _a = getStudent(), StName = _a.name, age = _a.age, firstLevel1 = _a.level.firstLevel1;
console.log(firstLevel1);
/**
 *从数组里面取值
 * */
var arr = [1, 9, 55, 10, 8];
//取arr[0],arr[1]
var number1 = arr[0], number2 = arr[1];
//取arr[3],arr[4]
var No3 = arr[2], No4 = arr[3], others = arr.slice(4);
