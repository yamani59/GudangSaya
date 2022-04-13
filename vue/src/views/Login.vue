<template>
  <div id="Login" :class="className.login">
    <div :class="className.formWrapper">
      <h1>Login</h1>
      <Form :inputs="inputs" @dataForm="(e) => login(e)" :class="className.form"/>
      <RouterLink :class="className.back" to="/">Back</RouterLink>
    </div>
    <NotificationList @close="(e) => closeNotif(e)" :type="notif.type" :msg="notif.msg" />
  </div>
</template>

<script>
  import { Form, NotificationList } from '../components'
  import axios from 'axios'

  export default {
    name: 'LoginItem',
    components: {
      Form, NotificationList
    },

    data() {
      return {
        notif: {
          show: false,
          type: '',
          msg: '',
        },
        inputs: [
          {type:'text', name:'username'},
          {type:'password', name:'password'},
        ],
        className: {
          formWrapper: ['form-wrapper'],
          login: ['d-flex justify-content-center flex-column align-items-center'],
          form: ['form'],
          back: ['back-link']
        },
        getFormValue: []
      }
    },

    methods: {
      login(e) {
        axios.post('http://127.0.0.1:8000/api/v1/login', {
          username: e[0],
          password: e[1]
        }).then(res => {
          localStorage.setItem('access_token', res.data.access_token)
          localStorage.setItem('refresh_token', res.data.refresh_token)
          this.$router.push({path: '/dashboard'})
        }).catch(err => {
          console.log(err) // debagging
          this.notif.show = true
        })
      },
      closeNotif(e) {
        this.notif.show = e
      }
    },

    mounted() {
      if (window && localStorage.getItem('access_token') != 'undefine')
        this.$router.push({path: '/dashboard'})
    }
  }
</script>

<style>
#Login {
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