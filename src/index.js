// [1, 2, 3].map(x => x + 1)
//局部赋值
// var a = "aaa";
// {
//     let a = "bbb"
// }
// console.log(a);

//
// for (let i = 0; i < 10; i++) {
//     console.log("内" + i);
// }
// console.log("外" + i);

//数组
// let[a,b,c,d]=[1,2,3]
// console.log(a)
// console.log(d)

// 对象
// let{a,b}={a:'123',b:'456'}
// console.log(b+a)

//字符串
// let[a,b,c,d,e,f]="string"
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)

//扩展运算符 对象不确定
// function f(...arg) {
//     console.log([0])
//     console.log([1])
//     console.log([2])
//     console.log([3])
// }
// f(1,2,3)

//剩余运算符
// function f(first,...arg) {
//     console.log(arg.length)
//     console.log(first)
//     console.log(arg)
// }
// f(0,1,2,3)

//查找是否存在
// let a="123"
// let b="123456789"
// document.write(b.includes(a))
// // console.log(b.includes(a))
// // // 判断开头是否存在
// document.write(b.startsWith(a));
// // 判断结尾是否存在：
// document.write(b.endsWith(a));

//字符串拼接
// let a="123"
// let b=`456${a}`
// console.log(b)

//字符串模板对运算的支持
// let a=1
// let b=2
//
// let c=`${a+b}`
// let d=a+b
//
// console.log(c)
// console.log(d)

// 解构的默认值  undefined相当于什么都没有，b是默认值。
// let [a,b="ys"] = ['闫嵩',undefined];
// console.log(a+b);   // 控制台显示“闫嵩ys”
// // undefined和null的区别
// let [a,b="ys"]=['闫嵩',null];
// console.log(a+b); //控制台显示“闫嵩null”

// 如何判断是否是数字
// let a = 11/4;
// console.log(Number.isFinite(a));
// console.log(Number.isFinite('a'));
// console.log(Number.isFinite(NaN));
// console.log(Number.isFinite(undefined));

// ES5 判读NaN 不是数字则为true
// console.log("******************************")
// console.log(isNaN(NaN));//true
// console.log(isNaN(undefined));//true
// console.log(isNaN('taiji'));//true
// console.log(isNaN(123));//false
// console.log(isNaN({}));//true
// console.log(isNaN(100+'2a'));//true

// ES6 判读NaN 不是NaN则为false
// console.log("#############################")
// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN(undefined));
// console.log(Number.isNaN('taiji'));
// console.log(Number.isNaN(123));
// console.log(Number.isNaN({}));
// console.log(Number.isNaN(100+'2a'));
// console.log(Number.isNaN(parseInt("abc1111")));

//Number.isInteger 判断是否为整数
// console.log("------------------------")
// let a= 918.1
// console.log(Number.isInteger(a));
// console.log(Number.parseInt(a));
// console.log(Number.parseFloat(a));

// ES6新增的数组知识
//json转数组
// let json={
//     '0':123,
//     '1':'张三',
//     '2':'太极',
//     length:3
// }
// console.log("json:"+json)
// //把json数组转换成array  Array.from方法
// let arr=Array.from(json)
// console.log("数组:"+arr)

// Array.of方法
// let arr=Array.of(3,4,5);
// console.log(arr)

// let arr = Array.of('太极','ys','开发者社区')
// console.log(arr)

//find() 实例方法
// let arr=[1,2,3,4,5,6,7,8];
// var v=arr.find((value, index, arr) => {
//     // return value >4;//5
//     return index>4;//6
//     // return arr
// })
// console.log(v)

//findIndex()方法
// 求得大于4的数
// let arr1=[1,2,3,4,5,6,7,8];
// var i = arr1.findIndex((value) => value >4);
// console.log(i);
//
// //filter()方法 不同之处在于filter返回的是数组
// let arr2=[1,2,3,4,5,6,7,8];
// var a = arr2.filter((value) => value >4);
// console.log(a)

// 数组去重
// var myArr = [1,4,3,4,5,6,3,7,4];
// console.log(myArr.filter((value,index,arr)=>
//     arr.indexOf(value)===index));

// fill
// fill左闭右开
//(4) ["ys", "web", "web", "你好"]
// let arr=['ys','闫嵩','太极公司','你好'];
// arr.fill('web',1,3);
// console.log(arr);

//数组循环
//  let arr=['ys','闫嵩','太极公司'];
// for (let item of arr){
//    console.log(item);
// }

// for…of数组索引
// let arr=['ys','闫嵩','太极公司'];
// for (let index of arr.keys()){
//     console.log(index)
// }


// 同时输出数组的内容和索引：
// 我们用entries()这个实例方法，配合我们的for…of循环
// let arr=['ys','闫嵩','太极公司'];
// for(let [index,val] of arr.entries()){
//     console.log(index+':'+val);
// }

//entries方法 切分数组
// let arr=['ys','闫嵩','太极公司'];
// let list = arr.entries();
// console.log(list);
//
// console.log(list.next().value);
// console.log('******************')
// console.log(list.next().value);
// console.log('&&&&&&&&&&&&&&&&&&&')
// console.log(list.next().value);
// console.log('$$$$$$$$$$$$$$$$$$$')


//ES6箭头函数
// 默认值  es6箭头函数
// var add=(a,b=2) => a+b;
// console.log(add(1));

// var add=(a,b=1)=>{
//     console.log('taiji')
//     return a+b;
// }
// console.log(add(1))

//对象的函数解构 json
// let a = undefined;//4
// // let a=1;//1
// function fun (a=4){
//     console.log(a);
// }
// fun(a);

// 对象的函数解构
// let json = {
//     a:'ys',
//     b:undefined
// }
// function fun({a,b='web'}){
//     console.log(a,b);
// }
// fun(json);

//数组的函数解构
// let arr = ['ys','闫嵩','太极'];
// function fun(a,b,c,d){
//     console.log(a,b,c,d)
// }
//
// fun(...arr);

// in的用法
// let obj={
//     a:'123',
//     b:'ys'
// }
// // c指key
// console.log('c' in obj);

// 对象
// 对象赋值
// let name = '123'
// let skill = '456'
// var obj = {name, skill}
// console.log(obj)
//
// // key值的构建
// let key = '123'
// var obj = {
//     [key]: '456'
// }
// console.log(obj.key)
//
// //自定义对象方法
// let obj = {
//     add: function (a, b) {
//         return a + b;
//     }
// }
// console.log(obj.add(1, 2))
//
// // Object.is( ) 对象比较
// // is()
// let o1={name:'123'}
// let o2={name:'123'}
// console.log(o1.name===o2.name)
// console.log(Object.is(o1.name,o2.name))
// // ===同值相等 is严格相等
// console.log(+0===-0)
// console.log(Object.is(+0,-0))
//
// console.log(NaN===NaN)
// console.log(Object.is(NaN,NaN))

//assign
// let a={a:'ys'};
// let b={b:'闫嵩'};
// let c={c:'web'};
// let d=Object.assign(a,b,c);
// console.log(d);

// Symbol  ES6新增的
// let a = new String;
// let b = new Number;
// let c = new Boolean;
// let d = new Array;
// let e = new Object;
// let f = Symbol();
// console.log(typeof(f));

// Symbol的打印
// let ys = Symbol('ys');
// console.log(ys);
// console.log(ys.toString());

// Symbol在对象中的应用
// let ys = Symbol();
// let obj = {
//     [ys]:'ys'
// }
// console.log(obj[ys]);
// obj[ys]='taiji'
// console.log(obj[ys]);

//Symbol对象元素的保护作用
// let obj = {name:'ys',skill:'web',age:18};
// for (let item in obj){
//     console.log(obj[item]);
// }
// let obj ={name:'ys',skill:'web'};
// let age = Symbol();
// obj[age]=18;
// console.log(obj);
// for(let item in obj){
//     console.log(obj[item]);
// }
// console.log(obj[age]);

// set的声明值不能重复，自动去重
// let setArr = new Set(['ys','闫嵩','ys']);
// setArr.add('前端技术');
// console.log(setArr);
// has查找set中的值
// console.log(setArr.has('ys'));

// Set值的增删改
// setArr.clear(); //删除全部
// // // 删除一个
// setArr.delete('web');
// console.log(setArr);

//循环输出
//for...of
// for(let item of setArr){
//     console.log(item);
// }
// forEach
// setArr.forEach((value)=>console.log(value));
// size属性  size属性可以获得Set值的数量。
// console.log(setArr.size);

//WeakSet的声明  这块有个坑，如果则会输出两遍obj的值
// let weakObj = new WeakSet();
// let obj={a:'ys',b:'闫嵩'};
// // let obj1 = obj;
// let obj1={a:'ys',b:'闫嵩'};
// weakObj.add(objh);
// weakObj.add(obj1);
// console.log(weakObj);

//map数据类型
// json
// let json={
//     name:'ys',
//     skill:'web'
// };
// // console.log(json.name);
//
// var map = new Map();
// map.set(json,'I am');
// // console.log(map);
// map.set('ys',json);
// console.log(map);

//map增删查
//get 取值
// console.log(map.get("ys"));//{ name: 'ys', skill: 'web' }
//
// console.log(map.get(json))//I am
// // delete 删除特定的值
// map.delete(json)
// console.log(map.get(json))//undefined

// clear 删除全部的值
// map.clear();//undefined

//size
// console.log(map)//Map {}
// console.log(map.size)//0
//
// //has
// console.log(map.has('ys'));//对比是否存在key为xx的值


//proxy 代理 ES6 增强 对象和函数(方法) 生命周期 预处理
// proxy的作用，其实就是用来改变默认方法和属性的
//
// let obj={
//     add:function (val) {
//         return val+100;
//     },
//     name: "yansong"
// }
//
// console.log(obj.add(100))
// console.log(obj.name)
//
// const employee = {
//     firstName: 'yan',
//     lastName: 'song',
// };
//
// console.group('employee');
// console.log(employee.firstName);
// console.log(employee.lastName);
//
// let handler={
//     get:function (tager,fieldName) {
//         if (fieldName==="fullName"){
//             return `${tager.firstName}${tager.lastName}`;
//         }
//         return fieldName in tager ?
//             tager[fieldName] :
//             `没有, '${fieldName}'!`
//     }
// }
// let p = new Proxy(employee, handler);
// console.log('#########################')
// console.group('proxy');
// console.log(p.firstName);
// console.log(p.lastName);
// console.log("org");  //org
// console.log(p.org);//  没有, 'org'!
// console.groupEnd()
//
// //promise es5 回调地狱
// let state = 1;
// function step1(resolve,reject){
//     console.log('1.开始-洗菜做饭');
//     if(state==1){
//         resolve('洗菜做饭完成')
//     }else{
//         reject('洗菜做饭-错误')
//     }
// }
// // // //
// function step2(resolve,reject){
//     console.log('2.开始-坐下来吃饭');
//     if(state==1){
//         resolve('坐下来吃饭')
//     }else{
//         reject('坐下来吃饭-错误')
//     }
// }
// //
// function step3(resolve,reject){
//     state = 0;
//     console.log('3.开始-收拾桌子');
//     if(state==1){
//         resolve('收拾桌子')
//     }else{
//         reject('收拾桌子-错误')
//     }
// }
// //
// new Promise(step1).then(function(val){
//     console.log(val);
//     return new Promise(step2);
// }).then(function(val){
//     console.log(val);
//     return new Promise(step3);
// }).then(function(val){
//     console.log(val);
// });

//class
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}


