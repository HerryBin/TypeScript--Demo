/**
 * Created by xianrongbin on 2017/4/16.
 */
/**
 * 1、ES6 箭头表达式
 * 用来声明匿名函数，消除传统匿名函数的this指针问题
 * */

/**
 * 如果表达式只有一行，不用写大括号与return
 * */
var setName = name => {
    return name + 'is a good person'
};

var sum = (arg1, arg2) => {
    return arg1 + arg2;
};

function getStock(name: string) {
    this.name = name;
    setInterval(() => {
        console.log(this.name)
    }, 1000);
}

getStock("jack");

/**
 *for..of
 * */

var arr=[3,5,19,22];
for(var item of arr){
    console.log(item);
}