<template>
  <div id="Dashboard">
    <b-col md="6" class="mb-3">
      <p>Cylon animation:</p>
      <b-icon icon="three-dots" animation="cylon" font-scale="4"></b-icon>
    </b-col>
  </div>  
</template>

<script>
export default {
  name: "DashboardItem",
}
</script>

<style>
#Dashboard {
  overflow: hidden;
  height: 100vh;
  background: #D1D1D1;
}
</style>