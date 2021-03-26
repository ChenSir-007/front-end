var name = '小明'
var age = 18
var flag = true

function sum(num1,num2) {
    return num1+num2
}

if (flag){
    console.log(sum(20,30))
}
//导出方式1
export {flag,sum}

//导出方式2
export var num1 = 1000;
export var height = 1.88;

//导出函数和类
export function mul(num1,num2){
    return num1+num2
}

//使用export default,只能有一个default，在使用时可以对其重命名
const address = '北京市'
export default address