const app = new Vue({
    el: '#app',
    data: {
        list: [
            {
            id:1,
            name:'《算法导论》',
            data:'2006-9',
            price:85.00,
            count:1
            },
            {
            id:2,
            name:'《UNIX编程艺术》',
            data:'2006-2',
            price:59.00,
            count:1
            },
            {
            id:3,
            name:'《编程珠玑》',
            data:'2008-10',
            price:39.00,
            count:1
            },
            {
            id:4,
            name:'《代码大全》',
            data:'2006-3',
            price:129.00,
            count:1
            }
        ]
    },
    filters:{
        showPrice(price){
            return '￥' + price.toFixed(2)
        }
    },
    methods:{
        increment(index) {
            this.list[index].count++
        },
        decrement(index) {
            this.list[index].count--
        },
        removeHandle(index){
            this.list.splice(index,1)
        }
    },
    computed:{
        totalPrice(){
            let totalPrice = 0;
            for (let i = 0;i < this.list.length;i++){
                totalPrice += this.list[i].price * this.list[i].count
            }
            // for (let item of this.list){
            //     totalPrice += item.price*item.count
            // }
            return totalPrice
        }
    }
});