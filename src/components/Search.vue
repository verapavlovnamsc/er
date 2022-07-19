<template>
  <div class="search">

    <input list="items">
    <datalist id="items">
      <option v-for="item in items" :key="item">{{item}}</option>
    </datalist>

  </div>

</template>
<script>

export default {
  data(){
   return {
     items: ['Шпаклевка', 'Штукатурка', 'Обои', 'Кровля']
   }
  },



  components: {
  }
}
</script>
<style>
.search{
  /*background-color: #FED83D;*/
  border-radius: 4px;
  height: 40px;
  display: flex;
  justify-content: space-around;
  justify-items: center;
}
</style>
