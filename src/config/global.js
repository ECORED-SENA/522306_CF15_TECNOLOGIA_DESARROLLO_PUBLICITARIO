export default {
  global: {
    componenteFormativo: 'Analítica Web',
    descripcionCurso:
      'La analítica web es la medición, análisis y presentación de datos de monitorización a las actividades que una empresa realiza en medios online, con el fin de realizar acciones de mejoramiento de las estrategias y, con ello, generar mayor efectividad de los planes de marketing y comunicación digital llevados a cabo por la empresa para dar cumplimiento a los objetivos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-bg.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      /*{
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },*/
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Analítica web',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Qué es la analítica web?',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tendencias de la analítica web',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Métricas en la analítica web',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Métricas en Facebook',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Métricas en Instagram',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Google Analytics',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Métricas en otras redes sociales',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      /*{
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },*/
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ávila, B. y Llamazares, F. (2018). Medición de audiencias. TOM Micro. Utilidades en la elaboración de un plan de medios. ESIC Editorial.',
    },
    {
      referencia:
        'Benítez, M. (2019). Diccionario de marketing digital. MKT2U. ',
      link:
        'https://communitymanager2u.com/blog-diccionario-de-marketing-digital/',
    },
    {
      referencia: 'Cibrián, I. (2018). Marketing digital. ESIC Editorial.',
    },
    {
      referencia: 'Maldonado, S. (2016). Analítica web. ESIC Editorial.',
    },
    {
      referencia:
        'Rodríguez, I., Suárez, A. y García, M. (2008). Dirección publicitaria. Editorial UOC.',
    },
    {
      referencia: 'Roldan, S. (2016). Community Manager 2.0. Ecoe Ediciones.',
    },
    {
      referencia:
        'Áciedad Americana de Ensayos y Materiales (ASTM). (2003). Textiles. Editorial Staff. [Book]. Sistema de Bibliotecas SENA.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000051551',
    },
    {
      referencia:
        'Soria, M. (2015). Plan de medios de comunicación e internet. Editorial CEP.',
    },
    {
      referencia:
        'Turletti, P. (2018). El ROI de marketing y ventas. ESIC Editorial.',
    },
  ],
  glosario: [
    {
      termino: 'Alcance orgánico',
      significado:
        'porcentaje o dato numérico que evalúa el impacto y el número de personas que han visto una publicación de manera natural, sin ningún tipo de promoción o publicidad de pago (Benítez, 2019).',
    },
    {
      termino: 'Alcance viral',
      significado:
        'unidad de medida que calcula el número de personas que han visto una publicación a través de otros contactos.',
    },
    {
      termino: 'Analítica web',
      significado:
        'forma de medir y analizar los datos de tráfico de un sitio web, a través del cual se permiten tomar las mejores decisiones y optimizar los objetivos de la empresa.',
    },
    {
      termino: 'Cookies',
      significado:
        'pequeños fragmentos de información que quedan registrados en el navegador cuando se visita un sitio web y que permiten a este sitio seguir el rastro de la actividad de los usuarios.',
    },
    {
      termino: 'Fanpage',
      significado:
        'también llamada página de fans es la plataforma que ofrece Facebook a las empresas, marcas u organizaciones para visibilizar y conectar con los usuarios (Benítez, 2019).',
    },
    {
      termino: 'Hashtag',
      significado:
        'etiqueta formada por una palabra o un conjunto de palabras precedidas por el símbolo numeral (#) que transmite una idea, un nombre o un concepto que normalmente va asociado con un mensaje o texto.',
    },
    {
      termino: 'Marketing de contenidos',
      significado:
        'estrategias de marketing enfocadas en ofrecer contenidos útiles y de ayuda a los usuarios principalmente a través del blog y del social media marketing.',
    },
    {
      termino: 'Retargeting',
      significado:
        'nueva técnica de publicidad que consiste en mostrar al usuario productos afines, una especie de filtro personalizado de productos y servicios en los que se está más receptivo recibir información. El producto te sigue por la red (Benítez, 2019).',
    },
  ],
  /*complementario: [
    {
      texto:
        'BIC., (2015). “2 minutos para entender el desarrollo sostenible – Spanish”',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      texto:
        'Arnold, M. y Osorio, F., (1998). Introducción a los conceptos básicos de la Teoría general de sistemas. Cinta moebio 3: 40-49',
      tipo: 'Página web',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto:
        'Balboa, C. y Dominguez, M. (2014). Economía circular como marco para el ecodiseño: el modelo ECO-3. Informador Técnico (Colombia) Volumen 78, No. 1. Pág. 52-90.',
      tipo: 'Artículo científico',
      link: 'https://www.google.com/',
    },
    {
      texto: 'Economía de Rosquilla. (s.f.).',
      tipo: 'Página web',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto: '2 minutos para entender el desarrollo sostenible – Spanish',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],*/
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Manuel Augusto Arias López',
        cargo: 'Instructor-Experto temático',
        centro: 'Centro de Comercio y Servicios Regional Quindío',
      },
      {
        nombre: 'Vilma Lucía Perilla Méndez',
        cargo: 'Evaluadora instruccional',
        centro:
          'Centro para la Industria y la Comunicación Gráfica Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria y la Comunicación Gráfica Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Marcela Gonzales Gomez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro Industrial del Diseño y la Manufactura Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Lina Marcela Perez Manchego',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Adriana Marcela Suárez Eljure',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jhon Andres Ayala Angarita',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Veimar Celis Mélendez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
