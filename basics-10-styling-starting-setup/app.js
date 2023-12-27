Vue.createApp({
    data(){
        return{
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false
        }
    },
    computed: {
        boxAClasses(){
            return {active: this.boxASelected}
        },
        boxBClasses(){
            return {active: this.boxBSelected}
        },
        boxCClasses(){
            return {active: this.boxCSelected}
        }
    },
    methods: {
        boxSelected(box){
            console.log(this)
            if(box === 'A'){
                this.boxASelected = !this.boxASelected
            }else if(box === 'B'){
                this.boxBSelected = !this.boxBSelected
            }else if(box === 'C'){
                this.boxCSelected = !this.boxCSelected
            }
        }
    }
}).mount("#styling")