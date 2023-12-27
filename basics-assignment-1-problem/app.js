Vue.createApp({
    data(){
        return{
            name: 'James Lee',
            age: 3,
            imageUrl: 'https://picsum.photos/200/300',
        }
    },
    methods:{
        randomNum(){
            return Math.random()
        },
        calculateAge(){
            return this.age + 5
        }
    }
}).mount('#assignment')