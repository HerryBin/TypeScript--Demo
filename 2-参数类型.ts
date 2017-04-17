/**
 * Created by xianrongbin on 2017/4/15.
 */

/**
 * 1、参数类型
 * 在参数名称后面使用冒号来指定参数的类型
 *
 * **/
let myName: string = 'xianrongbin';

/**
 * 此时会在 .ts文件中报错，但在编译后的.js文件中照样可以使用
 * */
myName = 19;

/**
 * 2、类型推断机制 此时alias默认类型是string类型
 * */

let alias = 'hello world';

alias = 12;

/**
 *Boolean Number String  Enum Any void
 * */
let arrList: number[] = [123, 55, 66];

let listName: Array<string> = ['jack','Tom'];

enum Color { Red=1,Green=2,Blue=3};

var colorName:Number=Color.Blue;

let anyValue: any = 'china';
anyValue = 12;


/**
 * 3、可以给方法以及方法参数 指定类型
 * */
function getAge(age: number): string {
    return 'herry is' + '--' + age;
}


/**
 * 4、自定义类型
 */
class Person {
    name: string;
    age: number;
}

var onePerson: Person = new Person();

/**
 * 5、默认参数
 * 在参数声明后面用等号来指定参数的默认值
 * 方法带默认值的参数必须声明在后面
 */
function address(name: string, address: string = 'default address') {

}

/**
 * 6、可选参数
 * 在方法的参数声明后面用问号来表明此参数为可选参数
 *可选参数必须声明在必填参数后面
 */
function apply(name: string, age?: number, address: string = 'default address') {

}

apply('herry');