<script>
import useValidate from '@vuelidate/core'
import {required,email,minLength,sameAs} from '@vuelidate/validators'
import { reactive ,computed} from 'vue'
export default { 
  setup(){
const state = reactive({
    email: '',
      password: {
        password: '',
        confirm: '',
      },
})
const rules = computed(()=>{
  return{
      email: { required ,email},
      password: {
        password: { required,minLength:minLength(6)},
        confirm: { required,sameAs: sameAs(state.password.password) },
      },
    }
})
const v$= useValidate(rules,state)
return {
  state,
  v$

}
  },
  

  methods: {
    submitForm() {
      this.v$.$validate()
      if(!this.v$.$error){
      alert('Form successfully submitted')}
      else {
        alert('Form failed validation')
      }
    },
  },
};
</script>

<template>
  <div class="root flex flex-col justify-center items-center border border-gray-300 p-6 rounded-lg shadow-md max-w-sm mx-auto gap-y-4 mt-24">
    <h2 class="text-2xl font-semibold mb-4">Create an Account</h2>
    
    <p class="mb-3 w-full">
      <input 
        type="text" 
        placeholder="Email"
        class="p-3 w-72 border border-gray-300 rounded-md"
      />
    </p>

    <p class="mb-3 w-full">
      <input 
        type="text" 
        placeholder="Password"
        v-model="state.password.password"
        class="p-3 w-72 border border-gray-300 rounded-md"
      />
    </p>

    <p class="mb-3 w-full">
      <input 
        type="text" 
        placeholder="Confirm Password"
        v-model="state.password.confirm"
        class="p-3 w-72 border border-gray-300 rounded-md"
      />
    </p>

    <button 
      class="w-72 py-3 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition"
      @click="submitForm"
    >
      Submit
    </button>
  </div>
</template>
