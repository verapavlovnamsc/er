<head>
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vueperslides"></script>
<link href="https://unpkg.com/vueperslides/dist/vueperslides.css" rel="stylesheet">
</head>
<template>
  <h1>Штукатурка цементная цокольная Knauf Sockelpultz 25 кг</h1>
  <div class="slidertext">
    <vueper-slides
        class="no-shadow"
        :visible-slides="4"
        slide-multiple
        :gap="3"
        :slide-ratio="1 / 4"
        :dragging-distance="200"
        :bullets="false"
        :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
      <vueper-slide v-for="(slide, i) in slides" :key="i" :title="slide.title" />
    </vueper-slides>
  </div>
  <div class="card-item">

    <div class="card-image">
      <div class="vidgets">
            <div class="vidgets-color">
                <div class="orange-block">
                  Хит продаж
                </div>
              <div class="red-block">
                  Акция
              </div>
            </div>

          <div class="v-spisok" @click="onclick"><img alt="item" src="../assets/i/plus.png">Добавить</div>

      </div>
          <div><img alt="item" src="../assets/i/item.png"></div>
    </div>
          <div class="card-text">
            <div><img alt="item" src="../assets/i/about_item.png">Коротко о товаре</div>
            <div>Вес · 25—50 кг</div>
            <div>Основа · Гипсовая супер штукатурка Knauf S...</div>
            <div class="blue-text">Все  характеристики</div>
            <div><img alt="item" src="../assets/i/like-item.png">Пользуется спросом</div>
            <div class="underline">2 274 просмотров </div>
            <div>В наличии в Москве на 4 марта 2020</div>
            <div class="blue-text">140 предложений</div>
            <img alt="item" src="../assets/i/knauflogo.png">


            </div>
          <div class="suggest-item">
            <div>Популярное предложение</div>
            <div>39 900 РУБ/ ШТ</div>
            <div>В наличии</div>
            <button class="catalog">Перейти в магазин</button>
            <div><img alt="item" src="../assets/i/secur.png">Провереннный поставщик</div>
            </div>


    </div>
  <div class="slidertext2">
    <vueper-slides
        class="no-shadow"
        :visible-slides="3"
        slide-multiple
        :gap="3"
        :slide-ratio="1 / 4"
        :dragging-distance="200"


        :bullets="false"
        :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
      <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" />
    </vueper-slides>
  </div>



</template>
<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import SimpleTypeahead from 'vue3-simple-typeahead'
import 'vue3-simple-typeahead/dist/vue3-simple-typeahead.css' //Optional default CSS

export default {
  name: 'my-vue-component',
  components: { VueperSlides, VueperSlide, SimpleTypeahead },
  data: () => ({
    slides: [
      {
        title: 'Штукатурка',
        content: 'Штукатурка',
        image: 'https://verapavlovnamsc.github.io/i/item1.png'
      },
      {
        title: 'Обои',
        content: 'Slide 2 content.',
        image: 'https://verapavlovnamsc.github.io/i/item2.png'
      },
      {
        title: 'Цемент',
        content: 'Slide 2 content.',
        image: 'https://verapavlovnamsc.github.io/i/item3.png'
      },
      {
        title: 'Обои',
        content: 'Slide 2 content.',
        image: '.https://verapavlovnamsc.github.io/i/item1.png'
      },
      {
        title: 'Обои',
        content: 'Slide 2 content.',
        image: 'https://verapavlovnamsc.github.io/i/item1.png'
      }
    ]
  }),
  computed: {
    list(){
      return this.$store.state.list
    }
  },
  methods: {
    onclick(){
      console.log(this.list)
      this.list.push("Штукатурка")
    }
  }
}
</script>

<style scoped>
.card-image{
  display: flex;
  width: 350px;
  height: 290px;
  border: 1px solid grey;
  border-radius: 4px;
  flex-direction: column;
  padding: 1.3em;
}
.card-item{
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: 0 auto;
  padding-top: 2em;

}
.card-text{
  text-align: left;
  padding: 1.3em;
}
.vidgets-color{
  display: flex;
  flex-direction: column;
}
.vidgets{
  display: flex;
  justify-content: space-between;
}
.orange-block{
  padding: .6em;
  margin: .2em;
  background: #F2994A;
  border-radius: 4px;
  font-size: 10px;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
}
.red-block{
  padding: .6em;
  margin: .2em;
  background-color: #E92F2F;
  border-radius: 4px;
  font-size: 10px;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
}
.v-spisok{
  margin-left: 5em;
  color: #1652F0;
  border: 1px solid grey;
  border-radius: 4px;
  height: 35px;
}
.suggest-item{
  border: 1px solid grey;
  border-radius: 4px;
  text-align: left;
  padding: 1.3em;
}
.sliderimg{
  /*width: 50%;*/
  padding-top: 5em;
  padding-left: 15em;
  display: flex;
}
.slidertext{
  width: 80%;
  margin: 0 auto;
  height: 70px !important;
  /*padding-top: -350px;*/
  position: relative;
  background-color: #ECEFF1;
}
.slidertext2{
  width: 30%;
  /*padding-top: 5em;*/
  padding-left: 15em;
  /*display: flex;*/
  /*height: 70px !important;*/
}
/*.vueperslides {*/
/*  height: 70px;*/
/*}*/
/*.vueperslide__content-wrapper{*/
/*  height: 70px;*/
/*}*/
/*h1{*/
/*  padding: 1em;*/
/*}*/



.blue-text{
  color: #1652F0;
}
.underline {
  text-decoration: underline;
  text-decoration-style: dotted;
}
.vueperslides__track{
  height: 70px;
}




</style>