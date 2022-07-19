<template>
  <div class="header">
   <div class="up-header">
     <div class="location"><div><img alt="item" src="../assets/i/location.svg"></div><div>Волгоградская область</div></div>
     <div class="up-left-menu">

     <div class="services"><div>Тендеры</div><div>Базы подрядчиков</div><div>Другие сервисы<img alt="item" src="../assets/i/arrow-down.png"></div></div>
       </div>
  </div>
  <div class="low-header">
    <div class="logo"><img alt="item" src="../assets/i/knauf.svg"></div>
    <div class="catalog"><div><img alt="item" src="../assets/i/menu-icon.png"></div><div>Каталог</div></div>
    <Search />
    <List />
    <div class="login">А
    </div>
  </div>
  </div>

</template>
<script>
import Search from "@/components/Search"
import List from "@/components/List"


export default {
  components: {
    Search,
    List
  }

}
</script>
<style>
.card-image{
  display: flex;
}
.card-item{
  display: flex;
  justify-content: space-between;
}
.low-header {
  display: flex;
  justify-content: space-around;
  /*justify-items: center;*/
  padding: .6em 0;
  height: 76px;
}
.up-header {
  background: #FAFBFC;
  display: flex;
  justify-content: space-around;
  justify-items: center;
  font-size: 12px;
  height: 32px;
  padding: .6em 0;
}
.up-left-menu div{
  /*padding: .5em;*/
}
.location div{
  padding: .2em;

}
.header{
  /*width: 85%;*/
}
.location{
  display: flex;
  justify-content: space-around;
  justify-items: center;
}
.up-left-menu{
  display: flex;
  justify-content: space-around;
  justify-items: center;
}
.login{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #9B51E0;
  color: white;
  /*transform: translateY(-50%);*/
  vertical-align: middle;
  line-height: 50px;
}
.catalog{
  background-color: #FED83D;
  border-radius: 4px;
  height: 40px;
  display: flex;
  justify-content: space-around;
  justify-items: center;
}
.catalog div{
  padding: .3em;
}
.location{
  display: flex;
  justify-content: space-around;
  justify-items: center;
}
.services div{
  padding: .9em;
}
.services{
  display: flex;
  justify-content: space-around;
}



</style>