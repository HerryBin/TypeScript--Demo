/**
 * Created by xianrongbin on 2017/4/15.
 */

/*1、多行字符串*/
let content = `aaa
bbbb
cccc`;

/*2、字符串模板*/

let getName = function () {
    return 'xianrongbin';
};

console.log(`hello  ${getName()}`)


/*3、字符串自动拆分*/

function test(template, name, age) {

}

let myName = 'xianrongbin',
    getAge = function () {
        return 18;
    };

test`hello,my name is ${myName},i'm ${getAge()}`