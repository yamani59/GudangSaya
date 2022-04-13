<template>
  <form @submit.prevent="handlerSubmit" :class="className.form">
    <div v-for="inp in inputs" :key="inp.name" :class="input">
      <input 
        v-if="inp.type != 'select'"
        :id="inp.name"
        :type="inp.type"
        :name="inp.name" 
        :placeholder="inp.name" 
        autocomplete="off"
        :class="className.input"
      />
      <select 
        v-if="inp.type == 'select'"
        :name="inp.name" 
        :id="inp.name"
        :class="className.inputSelect"
      >
        <option 
          v-for="option in inp.option" 
          :key="option.value"
          :value="option.value"  
        >
          {{ option.value }}
        </option>
      </select>
    </div>
    <div :class="input">
      <input 
        type="submit" 
        value="submit"
        :class="className.inputSubmit"  
      >
    </div>
  </form>
</template>

<script>
export default {
  name: "FormComponent",
  el: '#settings',
  emits: ['dataForm'],
  props: {
    inputs: Array
  },

  data() {
    return {
      className: {
        form: ['form'],
        input: ['form-control shadow mb-3'],
        inputSubmit: ['submit form-control shadow bg-gray-900'],
        inputSelect: ['form-select mb-3']
      }
    }
  },

  methods: {
    handlerSubmit(e) {
      let value = []
      for(let i = 0; i<e.target.length; i++) {
        value[i] = e.target[i].value
      }
      value.pop()
      this.$emit('dataForm', value)
    }
  }
}
</script>

<style>
.form {
  width: 100%;
}

.form .submit {
  color: white;
}

.form .submit:hover {
  background: #FF5F00;
}
</style>