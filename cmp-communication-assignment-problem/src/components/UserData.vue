<template>
  <div>
    <h1>User Data</h1>
    <form @submit.prevent="submitData">
    <div>
      <label for="enteredName">Name:</label>
      <input type="text" id="enteredName" v-model="enteredName" />
    </div>
    <div>
      <label for="enteredAge">Age:</label>
      <input type="number" id="enteredAge" v-model.number="enteredAge" />
    </div>
    <button type="submit">Submit</button>
    </form>
  </div>
</template>
<script>
export default ({
    data(){
        return {
            enteredName: '',
            enteredAge: ''
        }
    },
    methods:{
        submitData(){
            if(!this.enteredName || !this.enteredAge){
                alert('Please enter valid data')
                return
            }
            this.$emit("add-user-data",this.enteredName, this.enteredAge)
            this.enteredAge = this.enteredName = ''
        }
    }
})
</script>
