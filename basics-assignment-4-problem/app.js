Vue.createApp({
    data(){
        return {
            userInput: '',
            isHidden: false,
            userInputBackgroundColor: ''
        }
    },
    methods: {
        toggle(){
            this.isHidden = !this.isHidden;
        }
    },
}).mount('#assignment');