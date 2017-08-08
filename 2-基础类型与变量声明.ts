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

    let isDone: boolean=true;

    let age:number=0x16;

    let sayAge:string=`I'm ${age} now`;

    let numberArray : Array<number>=[12,33,99];

    /** 只读数组*/
    let a: number[] = [1, 2, 3, 4];
    let ro: ReadonlyArray<number> = a;
    /*ro[1]=2; error*/

    let tupleArray :[string,number] =['name',19];

    console.log(tupleArray[0]);

    tupleArray[3] = 'world';

    enum Color{ Red=1,Green=2,Blue=9}

    let redColor:Color=Color.Blue;

/**
 *  7、Any类型
 *     当我们不知道此值是什么类型时，这些值是一个动态内容，用 any 来进行标志
 *
 *  9、void 表示没有任何类型
 *     声明void 类型的变量，只能赋予其 undefined 和 null;
 */

    let notSure: any=4;
    notSure.toFixed();

    function error() :void{
        console.log("you can't here to go");
    }

    let u: undefined =undefined;
    let n: null=null;

    /** 默认情况下，null 和 undefined 是所有类型的子类型*/

    let dogAge: number =null;

    let fishCount : number = undefined;

    /**
     * 断言 告编译阶段诉机器，我已经做了必须的检查，在jsx,只能用as
     * */
    let strHello : string ='I love you';
    let strLen : number= (strHello as string).length;
    let strLen2 : number=(<string>strHello).length;