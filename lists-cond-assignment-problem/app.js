Vue.createApp({
    data() {    
        return{
            userInput: '',
            tasks:[],
            visibility: true
        }
},
computed:{
    buttonCaption(){
        return this.visibility ? 'Hide List' : 'Show List'
    }

},
methods:{
    addTask(){
        this.tasks.push(this.userInput),
        this.userInput = ''
    },
    removeTask(index){
        this.tasks.splice(index,1)
    },
    toggleVisibility(){
        this.visibility = !this.visibility
    }
}
}
).mount('#assignment')