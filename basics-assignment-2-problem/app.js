Vue.createApp({
    data(){
        return{
            userInput1: '',
            userInput2:''
        }
    },
    methods:{
     showAlert(){
         alert('Hello World')
     },
     output1(event){
        this.userInput1 = event.target.value
     },
     output2(event){
        this.userInput2 = event.target.value
     }
    }}
).mount('#assignment');