<template>
  <div class="notification-list">
    <div v-if="type == 'error'" class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>{{ msg }}</strong>
      <button @click="closeNotif" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div v-if="type == 'success'" class="alert alert-success alert-dismissible fade show" role="alert">
      <strong>{{ msg }}</strong>
      <button @click="closeNotif" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NotificationListComponent",
    emits: ['close'],
    props: {
      type: String,
      msg: String
    },
    methods: {
      closeNotif() {
        this.$emit('close', false)
      }
    }
  }
</script>

<style>
.notification-list {
  position: fixed;
  bottom: 0px;
  right: 0;
  margin: 2em;
  width: 20em;
  animation-name: notif;
  animation-duration: 0.5s;
  animation-fill-mode: initial;
  animation-timing-function: ease;
}

@keyframes notif {
  from {bottom: -100px; opacity: 0}
  to {bottom: 0px; opacity: 1}
}
</style>