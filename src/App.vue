<template>
  <div class="wrapper">
    <Header />

    <nav>
      <router-link to="/about">Каталог</router-link> >
      <router-link to="/about">Строительные материалы</router-link> >
      <router-link to="/about">Сухие строительные смеси</router-link> >
      <router-link to="/about">Шпаклевки</router-link> >
      <router-link to="/">Шпаклевка</router-link>
    </nav>

    <router-view/>
  </div>
</template>
<script>



import Header from "@/components/Header"
export default {
  components: {

    Header
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@200;300;400;500;600;700;800;900&family=Open+Sans:wght@300;400;500;700;800&display=swap');
body{
  margin: 0;
}
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  //padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.wrapper{
  margin: 0 auto;
}
.vueperslides__track{
  height: 70px;
}
.vueperslide__content-wrapper{
  height: 70px;
}
.vueperslide vueperslide--visible{
  height: 70px;
}
.vueperslide vueperslide--active vueperslide--visible{
  height: 70px;
}
.vueperslides__track-inner{
  height: 70px;
}
.vueperslides__parallax-wrapper{
  height: 70px;
}
.vueperslides__inner{
  height: 70px;
}
.vueperslides{
  height: 70px;
}
.vueperslide__content-wrapper{
  height: 70px !important;
}
.vueperslides__arrow button{
  width: 50%;
}
</style>
