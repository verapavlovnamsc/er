<template>
  <div class="home">

<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <CardItem />
  </div>
</template>

<script>
// @ is an alias to /src

import CardItem from "@/components/Card-item"

export default {
  name: 'HomeView',
  components: {
    CardItem
  }
}
</script>
