<template>
  <div class="list">
    {{list.join(", ")}}
    <div><img alt="item" src="../assets/i/list-icon.png"></div>
    <div>Список</div>


  </div>
</template>
<script>
export default {
  data(){

  },
  computed: {
    list(){
      return this.$store.state.list
    }
  },
  components: {
  }
}
</script>
<style>
.list{
  border: 1px solid grey;
  border-radius: 4px;
  height: 40px;

  display: flex;
  justify-content: space-around;
  justify-items: center;
}
.list div{
  padding: .3em;
}
</style>