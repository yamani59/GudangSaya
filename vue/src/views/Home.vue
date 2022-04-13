<template>
  <div :class='className.homeWrapper'>
    <div :class='className.titleWrapper' >
      <h1 :class='className.bigTitle'>Gudang Saya</h1>
      <div :class='className.title'>
        <RouterLink :class='className.link' to='/login'>Login</RouterLink>
        <RouterLink :class='className.link' to='/register'>Register</RouterLink>
      </div>
    </div>
    <NotificationList />
  </div>
</template>

<script>
  import NotificationList from '../components'

  export default {
    name: 'HomeItem',
    components: {
      NotificationList
    },
    data() {
      return {
        className: {
          homeWrapper: ['Home bg-primary d-flex justify-content-center align-items-center'],
          titleWrapper: ['title-wrapper'],
          bigTitle: ['big-title'],
          link: ['link'],
          title: ['title d-flex justify-content-start']
        }
      }
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=PT+Serif&display=swap');

.Home {
  height: 100vh;
}

.bg-primary {
  background: #D1D1D1!important;
}

.Home .title-wrapper {
  position: relative;
  animation-name: animate;
  animation-duration: 2s;
  animation-fill-mode: initial;
  animation-timing-function: ease;
}

.Home .big-title, .Home .link {
  font-family: 'PT Serif', serif;
}

.Home .big-title {
  font-size: 80pt;
  text-decoration: underline;
}

.Home .title {
  margin-top: -1em;
}

.Home .title .link {
  text-decoration: none;
  font-size: 25pt;
  color: rgb(27, 27, 27);
  margin: 0 1em 0 0;
  cursor: pointer;
}

.Home .title .link:hover {
  color: #FF5F00;
}

@keyframes animate {
  from {top: 100px; opacity: 0}
  to {top: 0px; opacity: 1}
}

</style>