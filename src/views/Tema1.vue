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

    #t_1_1.titulo-segundo
      .h2 1.1 ¿Qué es la analítica web?

    figure.mb-5
      .video
        <iframe width="990" height="557" src="https://www.youtube.com/embed/1pCDpRCmtxY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
    hr.mb-5
    #t_1_2.titulo-segundo
      .h2 1.2 Tendencias de la analítica web

    p.mb-4 Derivado de los análisis que puede realizar una empresa en pro del mejoramiento de sus estrategias de mercadeo y comunicación, surgen tres corrientes principales en las que se puede centrar el proceso:

    .row.justify-content-center.mb-4
      .col-lg-11
        .row.mb-5.justify-content-center
          .col-lg-12
            .row.justify-content-center.p-3.mb-2(style="")
              .col-auto
                figure.mb-1
                  img(src='@/assets/curso/tema1/icon1.svg', alt='AvatarTop', style="width:150px").mx-auto
              .col-lg-9.align-self-center
                p.mb-0  #[strong Social analytics:] la llegada de las redes sociales ha obligado a que tanto sus usuarios desde el ámbito comercial, como sus administradores; implementen técnicas de análisis de la información que en ese tipo de plataformas es masiva y muy relevante para el proceso comercial.
            
            .row.justify-content-center.p-3.mb-2(style="")
              .col-auto
                figure.mb-1
                  img(src='@/assets/curso/tema1/icon2.svg', alt='AvatarTop', style="width:150px").mx-auto
              .col-lg-9.align-self-center
                p.mb-0  #[strong Mobile analytics:] la llegada de los teléfonos inteligentes trajo consigo un nuevo sistema de navegación, gestión, trabajo, entrenamiento y organización. Las aplicaciones (App), al igual que los sitios web y las plataformas online, generan una gran cantidad de información y datos que, al ser organizados y analizados, permiten la toma de decisiones de forma oportuna y adecuada.
            
            .row.justify-content-center.p-3.mb-2(style="")
              .col-auto
                figure.mb-1
                  img(src='@/assets/curso/tema1/icon3.svg', alt='AvatarTop', style="width:150px").mx-auto
              .col-lg-9.align-self-center
                p.mb-0 #[strong Big data:] nunca en el mundo se había tenido tanta información circulando y a disposición de casi cualquier persona que tenga acceso a internet. Los datos que generan las redes sociales, los sistemas de información, los sitios web y las entidades gubernamentales y privadas permiten conocer a un nivel superior cómo desarrollar el proceso comercial y de marketing en cualquier empresa.





    hr.mb-5
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
