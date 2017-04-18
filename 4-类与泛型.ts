/**
 * Created by xianrongbin on 2017/4/15.
 */

/**
 * 1、类的声明 三种访问权限 构造函数
 * */
class Person {
    constructor(name: string) {
        this.name = name;
    }


    public name;

    public eat() {
        console.log(name);
    }
}

var p1 = new Person('default name');
p1.eat();


/**
 *2、类的继承
 * */
class Employee extends Person {
    constructor(name: string, code: string) {
        super(name);//调父类的constructor
        this.code = code;
    }

    code: string;

    work() {
        super.eat();
        this.doWork();
    }

    private doWork() {

    }
}

var e1 = new Employee('xiao ding', 'No.55666');
e1.work();

/**
 *泛型 参数化的类型，一般用来限制集合的内容
 *
 * */

let workers: Array<Person> = [];

workers[0] = new Person('jack');
workers[1] = new Employee('Tom', 'N01235');

function Hello<T>(arg: T): T {
    return arg;
}

var outPut=Hello<string>('hello world');