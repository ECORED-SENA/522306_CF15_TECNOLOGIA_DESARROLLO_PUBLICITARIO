<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Métricas en Instagram

    .row.justify-content-center.mb-5
      .col-lg-7
        p.mb-4 Instagram es hoy la red social con mayor popularidad en el mundo y se ha convertido en una plataforma esencial para procesos de comercialización. Hoy en día IG, como también se le conoce, tiene más de 1.000 millones de usuarios en el mundo y 25 millones de perfiles comerciales; además, alrededor de 2 millones de anunciantes utilizan las historias y los anuncios de esta red social.
        p.mb-4 Para acceder a las métricas de IG es necesario crear una cuenta comercial. Desde allí se puede acceder a Instagram Insights, que es una plataforma gratuita que genera información acerca de seguidores, publicaciones e historias.
        p.mb-4 En IG se tienen en cuenta:
        .row.justify-content-center.mb-5
          .col.mb-4(style="padding:1px;")
            .arrow-crd
              .arrow-crd__header
                p 1
              .arrow-crd__body
                p.mb-4 Métricas <br>de las <br> publicaciones
                figure.mb-4
                  img.mb-4(src='@/assets/curso/tema3/avatares/img1.svg',alt='AvatarTop', style="width:90px").mx-auto
          .col.mb-4(style="padding:1px;")
            .arrow-crd.arrow-crd_oddCl
              .arrow-crd__header--azul
                p 2
              .arrow-crd__body
                p.mb-4 Métricas <br>de<br> historias
                figure.mb-4
                  img.mb-4(src='@/assets/curso/tema3/avatares/img2.svg',alt='AvatarTop', style="width:90px").mx-auto
          .col.mb-4(style="padding:1px;")
            .arrow-crd
              .arrow-crd__header.mb-4
                p 3
              .arrow-crd__body(style="padding: 0;")
                p.mb-4 Métricas de <br>publicaciones<br> promocionadas
                figure
                  img.mb-4(src='@/assets/curso/tema3/avatares/img3.svg',alt='AvatarTop', style="width:90px").mx-auto
          .col.mb-4(style="padding:1px;")
            .arrow-crd.arrow-crd_oddCl
              .arrow-crd__header--azul
                p 4
              .arrow-crd__body
                p.mb-4 Métrica <br>de los <br>seguidores
                figure
                  img.mb-4(src='@/assets/curso/tema3/avatares/img4.svg',alt='AvatarTop', style="width:90px").mx-auto
      .col-lg-5.align-self-start
        figure.mb-2
          img(src='@/assets/curso/tema3/img1.svg',alt='Métricas en Instagram', style="width:380px").mx-auto
    

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b
          img(src='@/assets/curso/tema2/numeros/num1.svg',alt='AvatarNum',style='align-self: flex-start; margin-top: 25px')
          .tarjeta.transparent1
            .p-4
              .h4 Métricas de las publicaciones
              p.mb-4 En este punto es posible ver todas las publicaciones ordenadas de las más a la menos vista. También es posible filtrarlas con los siguientes criterios:
              
              .row.justify-content-center(style="border-bottom: 2px solid #c5c5c5")
                .col-lg-6
                  .tarjeta-avatar-b.mb-0
                    img(src='@/assets/curso/tema3/avatares/img1.svg' alt='AvatarTop')
                    .tarjeta
                      .p-4
                        p #[strong Tipo de contenido:] fotos, videos, secuencias o publicaciones pagadas.

                .col-lg-6
                  .tarjeta-avatar-b.mb-2
                    img(src='@/assets/curso/tema3/avatares/img1.svg' alt='AvatarTop')
                    .tarjeta
                      .p-4
                        p #[strong Tiempo:] desde los últimos 7 días hasta los últimos 2 años.
              
              .row(style="")
                .col-lg-6
                  .tarjeta-avatar-b.mb-0
                    img(src='@/assets/curso/tema3/avatares/img1.svg' alt='AvatarTop')
                    .tarjeta
                      .p-4
                        p #[strong Métricas:] alcance, clics “cómo llegar”, clics en el sitio web, comentarios, correos electrónicos, impresiones, interacciones, llamadas, Me gusta, mensajes de texto, seguimientos, veces compartido, veces guardado, vista al perfil.
                        
                .row
                  .col-lg-6
                    figure.mb-4
                      img(src='@/assets/curso/tema3/instagram/Anexo_9.png',style="width:525px;").mx-auto
                      figcaption Anexo 9
                  .col-lg-6
                    figure.mb-4
                      img(src='@/assets/curso/tema3/instagram/Anexo_10.png', style="width:495px;").mx-auto
                      figcaption Anexo 10 
                p.mb-4 Con este tipo de filtros es posible hacer un análisis de los mensajes en función con el rendimiento, así se pueden identificar, por ejemplo, aquellos anuncios que son preferidos por los usuarios y desarrollar más contenidos similares que atraigan nuevos usuarios o aumenten el flujo de lectores.

              .row(style="border-bottom: 2px solid #c5c5c5;")
                .col-lg-12
                  .tarjeta-avatar-b.mb-0
                    img(src='@/assets/curso/tema3/avatares/img1.svg' alt='AvatarTop').align-self-start.mt-4
                    .tarjeta
                      .p-4
                        p.mb-2 Cada una de las publicaciones tiene su información específica, dando clic sobre ellas se puede acceder a “Ver estadísticas”, donde es posible observar:
                        .row
                          .col-sm.mb-5.mb-s
                            ul.lista-ul
                              li 
                                i.fas.fa-angle-right(style="color: #f5ca56 ;")
                                | Cantidad de "Me gusta".
                              li 
                                i.fas.fa-angle-right(style="color: #f5ca56 ;")
                                | Comentarios.
                              li 
                                i.fas.fa-angle-right(style="color: #f5ca56 ;")
                                | Veces compartida.
                              li 
                                i.fas.fa-angle-right(style="color: #f5ca56 ;")
                                | Veces guardada.
              .row(style="border-bottom: 2px solid #c5c5c5;")
                .col-lg-12
                  .tarjeta-avatar-b.mb-0
                    img(src='@/assets/curso/tema3/avatares/img1.svg' alt='AvatarTop').align-self-start.mt-4
                    .tarjeta
                      .p-4
                        p.mb-2 También se pueden ver las interacciones y las acciones realizadas por los seguidores:
                        .row
                          .col-sm.mb-5.mb-s
                            ul.lista-ul
                              li 
                                i.fas.fa-angle-right(style="color: #f5ca56 ;")
                                | Vistas al perfil.
                              li 
                                i.fas.fa-angle-right(style="color: #f5ca56 ;")
                                | Clics en el sitio.
                
              .row(style="")
                .col-lg-12
                  .tarjeta-avatar-b.mb-0
                    img(src='@/assets/curso/tema3/avatares/img1.svg' alt='AvatarTop').align-self-start.mt-4
                    .tarjeta
                      .p-4
                        p.mb-2 Finalmente, se pueden detallar cifras relacionadas con el descubrimiento:
                        .row
                          .col-sm.mb-2.mb-s
                            ul.lista-ul
                              li 
                                i.fas.fa-angle-right(style="color: #f5ca56 ;")
                                | Seguimientos.
                              li 
                                i.fas.fa-angle-right(style="color: #f5ca56 ;")
                                | Alcance.
                              li 
                                i.fas.fa-angle-right(style="color: #f5ca56 ;")
                                | Impresiones.
                                li 
                                  ul
                                    li
                                      i.lista-ul__vineta
                                      | Del inicio.
                                    li
                                      i.lista-ul__vineta
                                      | Del perfil.
                                    li
                                      i.lista-ul__vineta
                                      | De hashtags.
                                    li
                                      i.lista-ul__vineta
                                      | De otro origen.
                        .row.justify-content-center
                          .col-auto
                            figure
                              img(src='@/assets/curso/tema3/instagram/Anexo_11.jpeg',atl="anexo11", style="width:400px;").mx-auto
                              figcaption Anexo 11

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b
          img(src='@/assets/curso/tema2/numeros/num2.svg',alt='AvatarNum',style='align-self: flex-start; margin-top: 25px')
          .tarjeta.transparent1
            .p-4
              .h4 Métricas de historias
              p.mb-4 Para acceder a las estadísticas de las historias, es necesario ir a “Estadísticas” de la cuenta a analizar, luego a “Contenido”, en la parte inferior aparecen las historias, allí se debe hacer clic en “Ver todo” para acceder a la información detallada. Se puede seleccionar ver las historias de los últimos 14 o 7 días, así como las de las últimas 24 horas. Se debe seleccionar la historia a la que se desea ver las estadísticas.
              .row.justify-content-center.mb-2
                .col-lg-5
                  figure.mb-4
                    img(src='@/assets/curso/tema3/instagram/Anexo_12.jpg',atl="anexo12").mx.auto
                    figcaption(style="background-color: #c2b7ea; ") Anexo12
                .col-lg-5
                  figure.mb-4
                    img(src='@/assets/curso/tema3/instagram/Anexo_13.jpg',atl="anexo13").mx.auto
                    figcaption(style="background-color: #c2b7ea; ") Anexo13
              
              .row.justify-content-start(style="")
                .col-lg-12
                  .tarjeta-avatar-b.mb-0
                    img(src='@/assets/curso/tema3/avatares/img2.svg' alt='AvatarTop').align-self-start.mt-4
                    .tarjeta
                      .p-4
                        p En este punto se puede ver la siguiente información:
                        .row
                          .col-sm.mb-1.mb-s
                            ul.lista-ul
                              li 
                                i.fas.fa-angle-right(style="color: #f5ca56 ;")
                                p.mb-0 #[strong Interacciones: ] muestra el número de personas que interactuaron con la historia de la publicación.
                              li 
                                ul
                                  li
                                    i.lista-ul__vineta
                                    | Respuestas.
                                  li
                                    i.lista-ul__vineta
                                    | Visitas al perfil.
                                  li
                                    i.lista-ul__vineta
                                    | Descubrimiento.
                                  li
                                    i.lista-ul__vineta
                                    | Cuentas alcanzadas.
                                  li
                                    i.lista-ul__vineta
                                    | Seguimientos.
                                  li.mb-0
                                    i.lista-ul__vineta
                                    p.mb-0 #[strong Navegación:] retrocesos, avances, siguiente historia, abandonos.
                        p.mb-0 Con esta información es posible conocer y analizar las historias con las que más ha interactuado el público y, de esta forma, realizar nuevas historias con los contenidos que más atraen y les gustan a los usuarios.



    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b
          img(src='@/assets/curso/tema2/numeros/num3.svg',alt='AvatarNum',style='align-self: flex-start; margin-top: 25px')
          .tarjeta.transparent1
            .p-4
              .h4 Métricas de publicaciones promocionadas
              p.mb-2 Estas estadísticas están disponibles únicamente para cuentas que han realizado promoción de alguna publicación.
              
              .row.justify-content-center(style="")
                .col-lg-12
                  .tarjeta-avatar-b.mb-0
                    img(src='@/assets/curso/tema3/avatares/img3.svg' alt='AvatarTop').align-self-start.mt-4
                    .tarjeta
                      .p-4
                        p En el botón “Ver todo” aparecerán las publicaciones promocionadas y al hacer clic sobre uno de ellos es posible ver la siguiente información:
                        .row
                          .col-sm.mb-1.mb-s
                            ul.lista-ul
                              li 
                                i.fas.fa-angle-right(style="color: #f5ca56 ;")
                                | Vistas de perfil.
                              li 
                                i.fas.fa-angle-right(style="color: #f5ca56 ;")
                                | Número de personas que vieron la publicación promocionada.
                              li 
                                i.fas.fa-angle-right(style="color: #f5ca56 ;")
                                | Número de impresiones.
                              li 
                                i.fas.fa-angle-right(style="color: #f5ca56 ;")
                                | Número de engagement.
                              li 
                                i.fas.fa-angle-right(style="color: #f5ca56 ;")
                                | Segmento demográfico (género, rango de edad, ubicación).
                              li 
                                i.fas.fa-angle-right(style="color: #f5ca56 ;")
                                | Valor invertido.
                        p.mb-0 Adicionalmente, es posible realizar una comparación de estos resultados con la misma publicación realizada de forma orgánica.


    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b
          img(src='@/assets/curso/tema2/numeros/num4.svg',alt='AvatarNum',style='align-self: flex-start; margin-top: 25px')
          .tarjeta.transparent1
            .p-4
              .h4 Métrica de los seguidores
              p.mb-4 Esta información es muy importante para conocer el arquetipo de los usuarios que siguen una cuenta. Es vital para la toma de decisiones del negocio en cuanto a promoción y comercialización. Para tener acceso a esta información es necesario acceder a “Estadísticas” y luego hacer clic en “Público”. Encontrando:
              
              .row.justify-content-center
                .col-lg-12
                  .tarjeta-avatar-b.mb-0
                    img(src='@/assets/curso/tema2/avatares/img4.svg' alt='AvatarTop').align-self-start.mt-2
                    .tarjeta
                      .p-4
                        p.mb-5 #[strong Sexo:]  muestra el porcentaje de hombres y mujeres que hacen parte de los seguidores de la cuenta.
                        .row.justify-content-center
                          .col-lg-5
                            figure.mb-2
                              img(src='@/assets/curso/tema3/instagram/Anexo_14.png',alt='Anexo 14').mx-auto
                              figcaption(style="background-color: #c2b7ea; ") Anexo 14
      

              .row.justify-content-start(style="border-bottom: 2px solid #c5c5c5")
                .col-lg-12
                  .tarjeta-avatar-b.mb-4
                    img(src='@/assets/curso/tema2/avatares/img4.svg' alt='AvatarTop').align-self-start.mt-2
                    .tarjeta
                      .p-4
                        p #[strong Lugares principales ciudades o países:] muestra el origen de las cuentas que siguen el perfil.

              .row.justify-content-center
                .col-lg-12
                  .tarjeta-avatar-b.mb-0.mt-4
                    img(src='@/assets/curso/tema2/avatares/img4.svg' alt='AvatarTop').align-self-start.mt-2
                    .tarjeta
                      .p-4
                        p.mb-5 #[strong Rangos de edad:] muestra los rangos de edad que más siguen la cuenta y los discrimina entre hombres y mujeres.
                        .row.justify-content-center
                          .col-lg-5
                            figure.mb-2
                              img(src='@/assets/curso/tema3/instagram/Anexo_15.png',alt='Anexo 15').mx-auto
                              figcaption(style="background-color: #c2b7ea; ") Anexo 15
              .row.justify-content-center
                .col-lg-12
                  .tarjeta-avatar-b.mb-0
                    img(src='@/assets/curso/tema2/avatares/img4.svg' alt='AvatarTop').align-self-start.mt-2
                    .tarjeta
                      .p-4
                        p.mb-5 #[strong Crecimiento:] muestra la actividad de la cuenta en relación con los nuevos seguidores, las publicaciones y los que dejaron de seguir la cuenta.
                        .row.justify-content-center
                          .col-lg-5
                            figure.mb-2
                              img(src='@/assets/curso/tema3/instagram/Anexo_16.png',alt='Anexo 16').mx-auto
                              figcaption(style="background-color: #c2b7ea; ") Anexo 16










</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
