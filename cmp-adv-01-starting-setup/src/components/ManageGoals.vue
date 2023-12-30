// set a overlay component to show the error message.We can add content to the overlay component by using slots.In the component ,we have all the logic to control the overlay component.so we dont need to pass data around with custom events or props which the error alerts emits here.Instead, we can handle everything right inside the component where the error is generated and hand off the styling and the markup off that dialog to the overlay component.

<template>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal">
    <button @click="setGoal">Set Goal</button>
    <!-- use teleport to move the error alert to the body of the page instead of deeply nested inside the component ,this will be better for semantic reasons and also for styling reasons -->
    <teleport to="body">
        <error-alert v-if="inputIsValid">
            <h2>Input is invalid!</h2>
            <p>Please enter at least a few characters..</p>
            <button @click="confirmInput">Okay</button>
        </error-alert>
    </teleport>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue'
export default {
    components: {
        'error-alert': ErrorAlert
    },
    data(){
        return{
            inputIsValid: false
        }
    },
    methods: {
        setGoal(){
            const enteredValue = this.$refs.goal.value;
            if (enteredValue.trim().length === 0){
                this.inputIsValid = true;
                // alert('Please enter a valid goal');
                // build a overlay component 

            }
        },
        confirmInput(){
            this.inputIsValid = false;
        }
    }
};
</script>
