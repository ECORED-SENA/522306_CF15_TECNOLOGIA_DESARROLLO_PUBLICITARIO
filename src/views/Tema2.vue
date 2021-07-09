<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Métricas en Facebook
    
    .row.justify-content-center.mb-5
      .col-lg-6.align-self-center
        p.mb-2 Siendo la red social con el mayor número de usuarios a nivel mundial, Facebook es una plataforma por excelencia para el desarrollo de estrategias de marketing viral. Los diferentes servicios de pago y gratuitos que ofrece permiten que las empresas realicen diferentes tipos de actividades comerciales y promocionales que se pueden medir con datos estadísticos puntuales, los cuales se pueden monitorizar semanalmente.
        p.mb-2 Facebook en la actualidad permite realizar unas mediciones muy completas de la actividad de las fanpage. Para el ingreso a estas estadísticas es necesario acceder a la página y en el menú en la parte izquierda, ingresar a Estadísticas, allí se verá la información en forma detallada.
        p A continuación, se resaltan algunas de las estadísticas más importantes que ofrece Facebook:
      .col-lg-5.align-self-center
        figure
          img(src='@/assets/curso/tema2/img1.svg', alt='Métricas en Facebook', style="width:85%")

    .row.justify-content-center.mb-5
      .col.mb-4(style="padding:1px;")
        .arrow-crd
          .arrow-crd__header
            p 1
          .arrow-crd__body
            p.mb-5 Resumen
            figure.mb-4
              img.mb-4(src='@/assets/curso/tema2/avatares/img1.svg',alt='AvatarTop', style="width:90px")
      .col.mb-4(style="padding:1px;")
        .arrow-crd.arrow-crd_oddCl
          .arrow-crd__header--azul
            p 2
          .arrow-crd__body
            p.mb-5 Seguidores
            figure.mb-4
              img.mb-4(src='@/assets/curso/tema2/avatares/img2.svg',alt='AvatarTop', style="width:90px")
      .col.mb-4(style="padding:1px;")
        .arrow-crd
          .arrow-crd__header.mb-4
            p 3
          .arrow-crd__body(style="padding: 0;")
            p.mb-4 Centro de <br> anuncios
            figure
              img.mb-4(src='@/assets/curso/tema2/avatares/img3.svg',alt='AvatarTop', style="width:65%").mx-auto
      .col.mb-4(style="padding:1px;")
        .arrow-crd.arrow-crd_oddCl
          .arrow-crd__header--azul
            p 4
          .arrow-crd__body
            p.mb-5 Me gusta
            figure
              img.mb-4(src='@/assets/curso/tema2/avatares/img4.svg',alt='AvatarTop', style="")
      .col.mb-4(style="padding:1px;")
        .arrow-crd
          .arrow-crd__header
            p 5
          .arrow-crd__body
            p.mb-5 Alcance
            figure
              img.mb-4(src='@/assets/curso/tema2/avatares/img5.svg',alt='AvatarTop', style="width:90px")
      .col.mb-4(style="padding:1px;")
        .arrow-crd.arrow-crd_oddCl
          .arrow-crd__header--azul
            p 6
          .arrow-crd__body
            p.mb-4 Visitas a la <br> pagina
            figure.mb-4
              img.mb-4(src='@/assets/curso/tema2/avatares/img6.svg',alt='AvatarTop', style="width:90px")
      .col.mb-4(style="padding:1px;")
        .arrow-crd
          .arrow-crd__header
            p 7
          .arrow-crd__body
            p.mb-5 Publicaciones
            figure
              img.mb-4(src='@/assets/curso/tema2/avatares/img7.svg',alt='AvatarTop', style="width:90px")

      .col.mb-4(style="padding:1px;")
        .arrow-crd
          .arrow-crd__header--azul
            p 8
          .arrow-crd__body
            p.mb-5 Historias
            figure.mb-4
              img.mb-4(src='@/assets/curso/tema2/avatares/img8.svg',alt='AvatarTop', style="width:90px").mx-auto
        
      .col.mb-4(style="padding:1px;")
        .arrow-crd
          .arrow-crd__header
            p 9
          .arrow-crd__body
            p.mb-5 Personas
            figure.mb-4
              img.mb-4(src='@/assets/curso/tema2/avatares/img9.svg',alt='AvatarTop', style="width:90px").mx-auto

    ///**TARJETAS TRANSPARENTES --------------------------------------------------------------------------------*/

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b
          img(src='@/assets/curso/tema2/numeros/num1.svg',alt='AvatarNum',style='align-self: flex-start; margin-top: 25px')
          .tarjeta.transparent1
            .p-4
              .h4 Resumen
              p.mb-4 Muestra datos generales de la actividad de la página, en un periodo de 7 o 28 días o de los últimos dos días.
              figure.mb-4
                img(src='@/assets/curso/tema2/facebook/Anexo_1.png',alt='resumen').mx.auto
                

              p.mb-4 Entre ellos se encuentran:

              .row.justify-content-center(style="border-bottom: 2px solid #c5c5c5")
                .col-lg-6
                  .tarjeta-avatar-b.mb-0
                    img(src='@/assets/curso/tema2/avatares/img1.svg' alt='AvatarTop').align-self-start.mt-3
                    .tarjeta
                      .p-4
                        p #[strong Acciones en la página:] muestra el número de clics en el contacto de la página y en el botón de Call to Action que esta tenga.
                
                .col-lg-6
                  .tarjeta-avatar-b.mb-2
                    img(src='@/assets/curso/tema2/avatares/img1.svg' alt='AvatarTop').align-self-start.mt-3
                    .tarjeta
                      .p-4
                        p #[strong Visitas a la página:] muestra el número de veces que las personas vieron el perfil de la página.

              .row.justify-content-center(style="border-bottom: 2px solid #c5c5c5")
                .col-lg-6
                  .tarjeta-avatar-b.mb-0
                    img(src='@/assets/curso/tema2/avatares/img1.svg' alt='AvatarTop').align-self-start.mt-3
                    .tarjeta
                      .p-4
                        p #[strong Vistas previas a la página:] muestra el número de veces que las personas pasaron el mouse sobre la foto de perfil para obtener una vista previa.
                
                .col-lg-6
                  .tarjeta-avatar-b.mb-2
                    img(src='@/assets/curso/tema2/avatares/img1.svg' alt='AvatarTop').align-self-start.mt-3
                    .tarjeta
                      .p-4
                        p #[strong Me gusta de la página:] indica el número de personas nuevas que dieron “me gusta” a la página, discriminados entre orgánicos y pagados.

              .row.justify-content-center(style="border-bottom: 2px solid #c5c5c5")
                .col-lg-6
                  .tarjeta-avatar-b.mb-0
                    img(src='@/assets/curso/tema2/avatares/img1.svg' alt='AvatarTop').align-self-start.mt-3
                    .tarjeta
                      .p-4
                        p #[strong Alcance de la publicación:] indica el número de personas que vieron algunas de las publicaciones al menos una vez.
                
                .col-lg-6
                  .tarjeta-avatar-b.mb-2
                    img(src='@/assets/curso/tema2/avatares/img1.svg' alt='AvatarTop').align-self-start.mt-3
                    .tarjeta
                      .p-4
                        p #[strong Alcance de la historia:] indica el número de personas que se les mostró en pantalla alguna historia de la página, diferenciando entre orgánicas, promocionales y totales.
              
              .row.justify-content-center(style="border-bottom: 2px solid #c5c5c5")
                .col-lg-6
                  .tarjeta-avatar-b.mb-0
                    img(src='@/assets/curso/tema2/avatares/img1.svg' alt='AvatarTop').align-self-start.mt-3
                    .tarjeta
                      .p-4
                        p #[strong Recomendaciones:] indica el número de veces que otras personas recomendaron la página.

                .col-lg-6
                  .tarjeta-avatar-b.mb-2
                    img(src='@/assets/curso/tema2/avatares/img1.svg' alt='AvatarTop').align-self-start.mt-3
                    .tarjeta
                      .p-4
                        p #[strong Interacción con la publicación:] indica el número de veces que las personas interactuaron con una de las publicaciones a través de reacciones, comentarios, contenido compartido y clics.
              
              .row.justify-content-center(style="border-bottom: 2px solid #c5c5c5")
                .col-lg-6
                  .tarjeta-avatar-b.mb-0
                    img(src='@/assets/curso/tema2/avatares/img1.svg' alt='AvatarTop').align-self-start.mt-3
                    .tarjeta
                      .p-4
                        p #[strong Nivel de respuesta:] indica el porcentaje de los mensajes que se respondieron a través de Messenger.

                .col-lg-6
                  .tarjeta-avatar-b.mb-2
                    img(src='@/assets/curso/tema2/avatares/img1.svg' alt='AvatarTop').align-self-start.mt-3
                    .tarjeta
                      .p-4
                        p #[strong Videos:] muestra el número de veces que los videos de la página fueron reproducidos por, al menos, 3 segundos, discriminado por pagados, totales y no pagados.
              
              .row.justify-content-center(style="border-bottom: 2px solid #c5c5c5")
                .col-lg-6
                  .tarjeta-avatar-b.mb-0
                    img(src='@/assets/curso/tema2/avatares/img1.svg' alt='AvatarTop').align-self-start.mt-3
                    .tarjeta
                      .p-4
                        p #[strong Seguidores de la página:] número de personas nuevas que comenzaron a seguir la página, distinguiendo por pagado y no pagado.

                .col-lg-6
                  .tarjeta-avatar-b.mb-2
                    img(src='@/assets/curso/tema2/avatares/img1.svg' alt='AvatarTop').align-self-start.mt-3
                    .tarjeta
                      .p-4
                        p #[strong Tus 5 publicaciones más recientes:] facebook muestra un resumen de las 5 últimas publicaciones mostrando la cantidad de personas que interactuaron con ellas a través de reacciones, compartidas o comentadas.

              .row.justify-content-start
                .col-lg-6
                  .tarjeta-avatar-b.mb-0
                    img(src='@/assets/curso/tema2/avatares/img1.svg' alt='AvatarTop').align-self-start.mt-3
                    .tarjeta
                      .p-4
                        p #[strong Páginas en observación:] este componente permite comparar el rendimiento de la página y las publicaciones que se hagan en ella con otras páginas similares.

              p Además del resumen, Facebook permite analizar estadísticas detalladas de muchos de los datos que son más relevantes para la empresa y que permiten tomar decisiones en el desarrollo de estrategias promocionales y comerciales. Ahora, se detallarán algunas de ellas:

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b
          img(src='@/assets/curso/tema2/numeros/num2.svg',alt='AvatarNum',style='align-self: flex-start; margin-top: 25px')
          .tarjeta.transparent1
            .p-4
              .h4 Seguidores
              p.mb-4 Muestra de forma más detallada y para un periodo seleccionado, el total de seguidores de la página, los seguidores pagos y orgánicos y el origen de seguimiento de la página: computador, la página misma, por búsqueda o por aplicación. Dando clic en cada ítem, se muestran las estadísticas detalladas y datos promediados. 
              figure.mb-4
                img(src='@/assets/curso/tema2/facebook/Anexo_2.png',alt='seguidores').mx.auto
                
              p.mb-4 Para las estadísticas de seguidores se muestran tres gráficas fundamentales:

              .row.justify-content-center(style="border-bottom: 2px solid #c5c5c5")
                .col-lg-6
                  .tarjeta-avatar-b.mb-0
                    img(src='@/assets/curso/tema2/avatares/img2.svg' alt='AvatarTop').align-self-start.mt-3
                    .tarjeta
                      .p-4
                        p #[strong Total de seguidores:] muestra el acumulado de seguidores por día a través de una gráfica lineal. 

                .col-lg-6
                  .tarjeta-avatar-b.mb-2
                    img(src='@/assets/curso/tema2/avatares/img2.svg' alt='AvatarTop').align-self-start.mt-3
                    .tarjeta
                      .p-4
                        p #[strong Seguidores de la página:] muestra la cantidad de personas que siguen la página, clasificando en orgánicos, pagados y anulaciones de seguimientos.

              .row.justify-content-start
                .col-auto
                  .tarjeta-avatar-b.mb-0
                    img(src='@/assets/curso/tema2/avatares/img2.svg' alt='AvatarTop').align-self-start.mt-3
                    .tarjeta
                      .p-4
                        p #[strong Origen de seguimientos de la página:] muestra el número de veces que se comenzó a seguir la página diferenciando el origen de seguimiento; si fue desde un computador, desde la propia página, a través de una búsqueda, desde una aplicación u otro.


    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b
          img(src='@/assets/curso/tema2/numeros/num3.svg',alt='AvatarNum',style='align-self: flex-start; margin-top: 25px')
          .tarjeta.transparent1
            .p-4
              .h4 Centro de anuncios
              p.mb-4 Este es un componente muy importante para las empresas. Permite obtener información de los últimos 7, 30, 60 o 90 días de la actividad de los anuncios que se publiquen en la página y relacionando, además, el presupuesto invertido en dicha actividad.
              figure.mb-4
                img(src='@/assets/curso/tema2/facebook/Anexo_3.png',alt='seguidores').mx.auto
                
              p.mb-4 El informe muestra tres variables fundamentales:

              .row.justify-content-center(style="border-bottom: 2px solid #c5c5c5")
                .col-lg-6
                  .tarjeta-avatar-b.mb-0
                    img(src='@/assets/curso/tema2/avatares/img3.svg' alt='AvatarTop').align-self-start.mt-3
                    .tarjeta
                      .p-4
                        p #[strong Alcance:] se refiere al número de personas que vieron los anuncios de la página; el alcance debe diferenciarse de las impresiones que incluyen varias visualizaciones de una misma persona. 

                .col-lg-6
                  .tarjeta-avatar-b.mb-2
                    img(src='@/assets/curso/tema2/avatares/img3.svg' alt='AvatarTop').align-self-start.mt-3
                    .tarjeta
                      .p-4
                        p #[strong Interacciones:] indica el número de acciones que las personas realizan en relación con los anuncios de la página.

              .row.justify-content-start
                .col-lg-6
                  .tarjeta-avatar-b.mb-0
                    img(src='@/assets/curso/tema2/avatares/img3.svg' alt='AvatarTop').align-self-start.mt-4
                    .tarjeta
                      .p-4
                        p #[strong Clics en el enlace:]esta métrica indica el número de clics en los enlaces del anuncio que direccionan a destinos específicos dentro y fuera de Facebook.


    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b
          img(src='@/assets/curso/tema2/numeros/num4.svg',alt='AvatarNum',style='align-self: flex-start; margin-top: 25px')
          .tarjeta.transparent1
            .p-4
              .h4 Me gusta
              p.mb-4 Esta sección de las estadísticas de Facebook muestra una de las variables más importantes para las empresas. Se puede calcular desde los últimos tres meses y ver la información día a día, permitiendo observar el progreso diario de la página en cuanto al total de “Me gusta” que esta obtiene. 
              figure.mb-4
                img(src='@/assets/curso/tema2/facebook/Anexo_4.png',alt='seguidores').mx.auto
                
              p.mb-4 Las siguientes son tres tipos de estas métricas:

              .row.justify-content-center(style="border-bottom: 2px solid #c5c5c5")
                .col-lg-6
                  .tarjeta-avatar-b.mb-0
                    img(src='@/assets/curso/tema2/avatares/img4.svg' alt='AvatarTop').align-self-start.mt-4
                    .tarjeta
                      .p-4
                        p #[strong Total de “Me gusta” de la página:]  indica el número total de las personas que han dado “Me gusta” y el rendimiento promedio a lo largo del tiempo, muestra el total acumulado de cada día.

                .col-lg-6
                  .tarjeta-avatar-b.mb-2
                    img(src='@/assets/curso/tema2/avatares/img4.svg' alt='AvatarTop').align-self-start.mt-4
                    .tarjeta
                      .p-4
                        p #[strong “Me gusta” de la página:] este punto muestra el número de “Me gusta” de la página tanto orgánicos, pagos y “Ya no me gusta”. A través de una gráfica lineal se muestran los picos de estas variables y el detalle de cada uno de ellos en los que se puede verificar el origen de los “Me gusta” y el porcentaje de cada uno de ellos.

              .row.justify-content-start
                .col-lg-6
                  .tarjeta-avatar-b.mb-0
                    img(src='@/assets/curso/tema2/avatares/img4.svg' alt='AvatarTop').align-self-start.mt-4
                    .tarjeta
                      .p-4
                        p #[strong Dónde se produjeron los “Me gusta”:] este indicador muestra el número de veces que las personas hicieron clic en el “Me gusta” de la página e indica el lugar donde se produjo: sección de noticias, en la propia página, a través de una búsqueda, por sugerencias o de personas que restauraron una cuenta inactiva.


    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b
          img(src='@/assets/curso/tema2/numeros/num5.svg',alt='AvatarNum',style='align-self: flex-start; margin-top: 25px')
          .tarjeta.transparent1
            .p-4
              .h4 Alcance
            
              .tarjeta.color-secundario.p-4.p-md-5.mb-5
                .row.justify-content-around.align-items-center
                  .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
                    img(src="@/assets/curso/tema2/img2.svg", alt="Alcance", style="width:80%;").mx-auto
                  .col-md.col-lg-6
                    .titulo-segundo.mb-4
                      h3 Alcance
                    p.mb-4 Es una de las métricas más relevantes en un plan de medios y hace parte de los objetivos KPI que desde las estrategias de medios se plantean.
                    a.boton.color-acento-botones(:href="obtenerLink('/downloads/Alcance.pdf')" target="_blank" type="application/pdf")
                      span Descargar
                      i.fas.fa-file-download
              
    
    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b
          img(src='@/assets/curso/tema2/numeros/num6.svg',alt='AvatarNum',style='align-self: flex-start; margin-top: 25px')
          .tarjeta.transparent1
            .p-4
              .h4 Visitas a la pagina
              p.mb-4 Otra métrica con alto nivel de relevancia para la empresa es la cantidad de visitas que recibe la página. En este punto se pueden verificar las estadísticas por trimestres y periodos más cortos, incluso desde el mismo periodo del año anterior.
              figure.mb-4
                img(src='@/assets/curso/tema2/facebook/Anexo_6.png',alt='seguidores').mx.auto
                
              p.mb-4 En esta sección es posible ver una serie de datos de forma muy detallada:

              .row.justify-content-center(style="border-bottom: 2px solid #c5c5c5")
                .col-lg-6
                  .tarjeta-avatar-b.mb-0
                    img(src='@/assets/curso/tema2/avatares/img6.svg' alt='AvatarTop').align-self-start.mt-2
                    .tarjeta
                      .p-4
                        p #[strong Visitas totales:]  muestra el total de visitas que tuvo el perfil de la página en determinado día o periodo.

                .col-lg-6
                  .tarjeta-avatar-b.mb-2
                    img(src='@/assets/curso/tema2/avatares/img6.svg' alt='AvatarTop').align-self-start.mt-2
                    .tarjeta
                      .p-4
                        p #[strong Visitas por sección:] indica el total de visitas que tuvo cada pestaña del perfil de la página: inicio, publicaciones, fotos, videos, comunidad.
              
              
              .row.justify-content-center(style="border-bottom: 2px solid #c5c5c5")
                .col-lg-12
                  .tarjeta-avatar-b.mb-0
                    img(src='@/assets/curso/tema2/avatares/img6.svg' alt='AvatarTop').align-self-start.mt-4
                    .tarjeta
                      .p-4
                        p #[strong Total visitantes:]  este indicador muestra el número de personas que, con las sesiones iniciadas, vieron el perfil de la página. Esta sección muestra, además, otros datos importantes:
                        .row.justify-content-center
                          .col-sm.mb-2.mb-sm-0
                            ul.lista-ul
                              li 
                                i.fas.fa-angle-right(style="color: #f5ca56 ;")
                                p #[strong Por sección:] personas que iniciaron sesión y vieron las diferentes pestañas del perfil de la página.
                              li 
                                i.fas.fa-angle-right(style="color: #f5ca56 ;")
                                p #[strong Por edad y sexo:] personas que iniciaron sesión que vieron el perfil de la página diferenciados por edad y sexo.
                              li 
                                i.fas.fa-angle-right(style="color: #f5ca56 ;")
                                p #[strong Por país:] personas que iniciaron sesión que vieron el perfil de la página discriminados por país de origen.
                              li 
                                i.fas.fa-angle-right(style="color: #f5ca56 ;")
                                p #[strong Por ciudad:] personas que iniciaron sesión y que vieron el perfil de la página mostrando la ciudad de origen.
                              li 
                                i.fas.fa-angle-right(style="color: #f5ca56 ;")
                                p #[strong Por dispositivo:] personas que iniciaron sesión y que vieron el perfil de la página, permitiendo diferenciar el tipo de dispositivo desde el cual accedieron: computador o móvil.

              .row.justify-content-start
                .col-lg-6
                  .tarjeta-avatar-b.mb-0
                    img(src='@/assets/curso/tema2/avatares/img6.svg' alt='AvatarTop').align-self-start.mt-3
                    .tarjeta
                      .p-4
                        p #[strong Orígenes principales:] muestra el total de los usuarios conectados por origen de referencia: Facebook, Google.com, Google.com.co, Google.es o Yahoo!


    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b
          img(src='@/assets/curso/tema2/numeros/num7.svg',alt='AvatarNum',style='align-self: flex-start; margin-top: 25px')
          .tarjeta.transparent1
            .p-4
              .h4 Publicaciones
              p.mb-4 Es una métrica que resulta muy relevante para la empresa, tanto si la estrategia consiste en el desarrollo de una campaña o un anuncio individual. 
              figure.mb-4
                img(src='@/assets/curso/tema2/facebook/Anexo_7.png',alt='Publicaciones').mx.auto
                
              p.mb-4 En esta sección se muestran dos tipos de datos en relación con las publicaciones; el primero es la información del momento en que están conectados los fans de la página y el segundo es el rendimiento de los tipos de publicaciones. 
              p.mb-4 En este mismo apartado, Facebook permite ver datos y estadísticas relacionadas con cada anuncio y que son de alta relevancia para la toma de decisiones: fecha de publicación, tipo de publicación y otros datos más detallados:

              .row.justify-content-center(style="border-bottom: 2px solid #c5c5c5")
                .col-lg-6
                  .tarjeta-avatar-b.mb-0
                    img(src='@/assets/curso/tema2/avatares/img7.svg' alt='AvatarTop').align-self-start.mt-3
                    .tarjeta
                      .p-4
                        p #[strong Segmentación:] muestra el segmento de mercado al que se dirigió la publicación.

                .col-lg-6
                  .tarjeta-avatar-b.mb-2
                    img(src='@/assets/curso/tema2/avatares/img7.svg' alt='AvatarTop').align-self-start.mt-3
                    .tarjeta
                      .p-4
                        p #[strong Alcance:] muestra a cuántas personas llegó la publicación y separa entre fans y no fans.

              .row.justify-content-start
                .col-lg-6
                  .tarjeta-avatar-b.mb-0
                    img(src='@/assets/curso/tema2/avatares/img7.svg' alt='AvatarTop').align-self-start.mt-3
                    .tarjeta
                      .p-4
                        p #[strong Interacción:] en este punto muestra el total de clics que recibe cada publicación y las reacciones, comentarios y las veces que se compartió el mismo.



    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b
          img(src='@/assets/curso/tema2/numeros/num8.svg',alt='AvatarNum',style='align-self: flex-start; margin-top: 25px')
          .tarjeta.transparent1
            .p-4
              .h4 Historias
              p.mb-4 Este apartado muestra de forma detallada las cifras de historias publicadas en la página. La información está desglosada en: veces únicas abiertas, interacciones y número de historias publicadas.
              figure.mb-4
                img(src='@/assets/curso/tema2/facebook/Anexo_8.png',alt='Historias').mx.auto
                


    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b
          img(src='@/assets/curso/tema2/numeros/num9.svg',alt='AvatarNum',style='align-self: flex-start; margin-top: 25px')
          .tarjeta.transparent1
            .p-4
              .h4 Personas
              p.mb-4 Esta sección de las estadísticas de Facebook es también muy importante. Muestra el número de personas que vieron alguna de las publicaciones realizadas en la página con variables como sexo y edad; datos que han sido suministrados por los mismos usuarios.
              figure.mb-4
                img(src='@/assets/curso/tema2/facebook/Anexo_9.png',alt='Personas').mx.auto
                
                p.mb-4 Esta sección muestra otras variables de alta utilidad para la toma de decisiones:

              .row.justify-content-center(style="border-bottom: 2px solid #c5c5c5")
                .col-lg-6
                  .tarjeta-avatar-b.mb-0
                    img(src='@/assets/curso/tema2/avatares/img9.svg' alt='AvatarTop').align-self-start.mt-3
                    .tarjeta
                      .p-4
                        p #[strong Tus fans:] muestra el total por rango de edad y sexo de las personas que vieron alguna publicación de la página.

                .col-lg-6
                  .tarjeta-avatar-b.mb-2
                    img(src='@/assets/curso/tema2/avatares/img9.svg' alt='AvatarTop').align-self-start.mt-3
                    .tarjeta
                      .p-4
                        p #[strong Tus seguidores:]  muestra el total de las personas que siguen la página con rangos de edad y sexo.

              .row.justify-content-center
                .col-lg-6
                  .tarjeta-avatar-b.mb-0
                    img(src='@/assets/curso/tema2/avatares/img9.svg' alt='AvatarTop').align-self-start.mt-3
                    .tarjeta
                      .p-4
                        p #[strong Personas alcanzadas:] indica el número de personas a las que se les mostró contenido de la página y clasificadas por edad y sexo.

                .col-lg-6
                  .tarjeta-avatar-b.mb-2
                    img(src='@/assets/curso/tema2/avatares/img9.svg' alt='AvatarTop').align-self-start.mt-3
                    .tarjeta
                      .p-4
                        p #[strong Personas que interactúan:] hace referencia al número de personas que hablan de la página, catalogadas por rango de edad y sexo.

              p.mb-4 Adicionalmente, esta sección muestra el país de origen de las personas que siguen e interactúan con la página y las publicaciones, así como la ciudad y el idioma.














    

    

    

    

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
