<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Analítica web

    .row.justify-content-center.mb-5
      .col-lg-6.align-self-center
        p De igual forma que en medios convencionales, la necesidad de información y medición de efectividad de la comunicación en medios digitales lleva a realizar una serie de mediciones derivadas de los indicadores que se han mencionado anteriormente y de los datos suministrados por las diferentes plataformas web. Dichos datos son un insumo muy importante para el futuro desarrollo de estrategias y realizar correcciones casi en tiempo real de las acciones que se están realizando en la actualidad, dando la opción de redireccionarlas para el logro de los objetivos planteados, minimizar los riesgos al final de la campaña y optimizar la inversión que se haya realizado.
      .col-lg-5.align-self-center
        figure
          img(src='@/assets/curso/tema1/img1.svg', alt='Analitica', style="width:85%")

    figure.mb-5
      .video
        <iframe width="990" height="557" src="https://www.youtube.com/embed/1pCDpRCmtxY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



    #t_1_3.titulo-segundo
      .h2 1.3 Métricas en la analítica web

    .row.justify-content-center.mb-5
      .col-lg-6.align-self-center
        p La analítica web tiene como finalidad la recopilación y estudio de cifras relacionadas con la actividad de los medios y estrategias que la empresa realiza en la web para la toma de decisiones. Sin embargo, estas cifras dependen de los contenidos, el modelo de negocio y el mercado al cual va dirigido; esto quiere decir que hay empresas que deben mover números muy altos de interacciones para lograr sus objetivos, mientras otras deben generar interacción con una cantidad limitada de potenciales clientes para generar un ROI representativo.
      .col-lg-5.align-self-center
        figure
          img(src='@/assets/curso/tema1/img2.svg', alt='Métricas en la analítica web', style="width:85%")













</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
