<template>
  <div id="Register" :class="className.login">
    <div :class="className.formWrapper">
      <h1>Register</h1>
      <Form :inputs="inputs" @dataForm="(e) => register(e)" :class="className.form"/>
      <RouterLink :class="className.back" to="/">Back</RouterLink>
    </div>
    <NotificationList v-if="notif.show" @close="(e) => closeNotif(e)" :type="notif.type" :msg="notif.msg" />
  </div>
</template>

<script>
  import { Form, NotificationList } from '../components'
  import axios from 'axios'

  export default {
    name: 'RegisterItem',
    components: {
      Form, NotificationList
    },
    emits: ['getInputValue'],
    data() {
      return {
        notif: {
          show: false,
          type: '',
          msg: ''
        },
        inputs: [
          { type: 'text', name: 'name'},
          { type: 'email', name: 'email'},
          { type: 'select', name: 'role', option: [
            {value: 'admin'},
            {value: 'employed'},
          ]},
          { type: 'password', name: 'password'},
        ],
        className: {
          formWrapper: ['form-wrapper'],
          login: ['d-flex justify-content-center flex-column align-items-center'],
          form: ['form'],
          back: ['back-link']
        }
      }
    },
    methods: {
      register(value) {
        axios.post('http://127.0.0.1:8000/api/v1/register', {
          name: value[0],
          email: value[1],
          role: value[2],
          password: value[3]
        }).then(res => {
          console.log(res.data.name)
          this.notif = {
            show: true,
            type: 'success',
            msg: 'Registrasi Successfully'
          }
        }).catch(err => {
          console.log(err)
          this.notif = {
            show: true,
            type: 'error',
            msg: 'Failed to register'
          }
        })
        
      },
      closeNotif(value) {
        this.notif.show = value
      }
    },
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=PT+Serif&display=swap');

#Register {
  overflow: hidden;
  height: 100vh;
  background: #D1D1D1;
}

.form-wrapper {
  width: 40%;
  position: relative;
  animation-name: animate;
  animation-duration: 1s;
  animation-fill-mode: initial;
  animation-timing-function: ease;
}

h1 {
  text-align: center;
  font-family: 'PT Serif', serif;
  font-size: 80pt;
}

.form {
  width: 100%;
}

.back-link {
  font-size: 15pt;
  text-decoration: none;
  color: rgb(27, 27, 27);
  cursor: pointer;
  font-family: 'PT Serif', serif;
  text-align: center;
}

.back-link:hover {
  color: rgb(27, 27, 27);
}

@keyframes animate {
  from {top: 100px; opacity: 0}
  to {top: 0px; opacity: 1}
}
</style>