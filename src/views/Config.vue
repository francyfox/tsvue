<template lang="pug">
.wrapper
  .main
    h2
      b Выберите тип кровли
    #SelectRoofType
      .row
        .col.s12.m2
          .card-panel.teal.waves-effect(@click='toggle')
            span.white-text
              img(src='https://www.grandline.ru/web/images/roof-type-1.png' alt='roof' width='64')
              h6 Односкатная
        .col.s12.m2
          .card-panel.teal.waves-effect(@click='toggle')
            span.white-text
              img(src='https://www.grandline.ru/web/images/roof-type-2.png' alt='roof' width='64')
              h6 Двускатная
        .col.s12.m2
          .card-panel.teal.waves-effect(@click='toggle')
            span.white-text
              img(src='https://www.grandline.ru/web/images/roof-type-3.png' alt='roof' width='64')
              h6 Вальмовая
        .col.s12.m2
          .card-panel.teal.waves-effect(@click='toggle')
            span.white-text
              img(src='https://www.grandline.ru/web/images/roof-type-4.png' alt='roof' width='64')
              h6 Шатровая
        .col.s12.m2
          .card-panel.teal.waves-effect(@click='toggle')
            span.white-text
              img(src='https://www.grandline.ru/web/images/roof-type-5.png' alt='roof' width='64')
              h6 Мансардная
    h2
      b Материал
    #SelectMaterial
      .row
        button.waves-effect.waves-light.btn-large(@click='toggle' data-name='metal') Металлочерпица
        button.waves-effect.waves-light.btn-large(@click='toggle' data-name='prof') Профнастил
        button.waves-effect.waves-light.btn-large(@click='toggle' data-name='falc') Фальцевая
    hr
    h2
      b Размеры вашей кровли
    .row
      #size.col.s10.m4.z-depth-2.offset-s6.pad
        input#w(type='text' placeholder='W - Ширина ската')
        input#w2(type='text' placeholder='W2 - Ширина2 ската')
        input#w3(type='text' placeholder='W3 - Ширина конька')
        input#h(type='text' placeholder='H - Длина ската')
        input#h1(type='text' placeholder='H1 - Длина1 ската')
        input#h2(type='text' placeholder='H2 - Длина2 ската')
        label.input-field
          input#warm.filled-in(type='checkbox')
          span Сделать расчет с утеплителем
        label.input-field
          input#sofit.filled-in(type='checkbox')
          span Сделать расчет cофита
        label.input-field
          input#strop.filled-in(type='checkbox')
          span Размер по стропилам
      #img.col.s12.m2.card-image
        img(height='400' src='https://www.grandline.ru/glroof/img/step2/odnosk/odnoskiw.png' alt='size')

</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({

  name: "config",
  data() {
    return {
      StepData: {}
    }
  },
  methods: {
    toggle: function( event: any ): any {
      const elem: string = event.target.dataset.name;
      const elementID: string = event.target.closest('[id]').id;

      console.log(this.$data.StepData.elem);
      if (elem){
        this.$forceUpdate();
        return this.$set(this.StepData, elementID, elem);
      }
    }
  }
})





</script>
