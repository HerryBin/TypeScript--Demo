/**
 * Created by xianrongbin on 2017/4/15.
 */
/**
 *接口
 * */

interface IPerson {
    name: string;
    age: number;
}

class Person {
    constructor(public config: IPerson) {

    }
}

/*会检测传入的参数是否满足接口规定*/
let p1 = new Person({
    name: 'David',
    age: 19
});

interface IAnimal {
    eat();
}

class Sheep implements IAnimal {
    eat() {
        console.log('I\'m eat grass');
    }
}

/**
 * 2、模块 只能拿到暴露的属性或方法，类，暴露自己的资源以供别人使用
 * */

import {propExport, funcExport} from './5-demo-module';
console.log(funcExport);


/**
 *3、注解
 * 为程序的元素加上更直观更明了的说明
 * 这些说明信息与程序的业务逻辑无关，而是供指定的工具或框架使用的
 *
 * 4、类型定义文件 .d.ts
 * http://github.com/DefinitelyTyped/tsd
 * */