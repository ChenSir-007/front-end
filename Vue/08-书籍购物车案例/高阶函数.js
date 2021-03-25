//filter/map/reduce
//filter中的回调函数有一个要求：必须返回一个Boolean值
//true:当返回true时，函数内部会自动将这次回调的n加入到新的数组中
//false:当返回false时，函数内部会过滤掉这次的n
const nums = [10,20,40,100,120,400,50]
let newNums = nums.filter(function (n) {
    return n<100
})
console.log(newNums)

//map函数使用
let new2Nums = newNums.map(function (n) {
    return n*2
})
console.log(new2Nums)

//reduce函数使用
//reduce作用对数组中所有内容进行汇总
let total = new2Nums.reduce(((previousValue, currentValue) => {return previousValue+currentValue}),0)
console.log(total)
//第一次：prevalue 0 currentvalue 20
//第二次：prevalue 0+20 currentvalue 40
//第三次：prevalue 20+40 currentvalue 80
//第四次：prevalue 60+80 currentvalue 100