export default {
  global: {
    componenteFormativo:
      'Herramientas tecnológicas para el análisis financiero',
    descripcionCurso:
      'Este componente fortalece las competencias del aprendiz en el uso de herramientas tecnológicas, especialmente Excel, para el análisis financiero. A través de funciones básicas, fórmulas, gráficos y ejercicios aplicados, se desarrollan habilidades para calcular e interpretar indicadores clave de liquidez, rentabilidad, endeudamiento y eficiencia. Su enfoque práctico permite aplicar los conceptos en situaciones reales y tomar decisiones basadas en datos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Fundamentos del uso de herramientas tecnológicas en el análisis financiero',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Introducción a funciones básicas de Excel',
            hash: 't_1_1',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Cálculo e interpretación de indicadores financieros en Excel',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Aplicación práctica para el análisis financiero',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  complementario: [
    {
      tema: 'Tema_complementario',
      referencia: 'Referencia_complementario',
      tipo: 'Tipo_complementario',
      link: 'Link_complementario',
    },
    {
      tema: '',
      referencia: '',
      tipo: '',
      descarga: '/downloads/prueba.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Excel',
      significado:
        'Herramienta tecnológica que permite organizar, calcular y analizar información financiera mediante hojas de cálculo y funciones especializadas.',
    },
    {
      termino: 'Fórmula',
      significado:
        'Instrucción escrita en una celda de Excel para realizar cálculos automáticamente a partir de datos numéricos.',
    },
    {
      termino: 'Referencia Absoluta',
      significado:
        'Tipo de referencia en Excel que permanece fija al copiar una fórmula (ejemplo: $B$2).',
    },
    {
      termino: 'Razón Corriente',
      significado:
        'Indicador financiero que muestra la capacidad de la empresa para pagar sus obligaciones de corto plazo.',
    },
    {
      termino: 'Margen Neto',
      significado:
        'Porcentaje de las ventas que se convierte en utilidad neta luego de deducir todos los costos y gastos.',
    },
    {
      termino: 'Rotación de Cartera',
      significado:
        'Indicador que mide la eficiencia en la recuperación de cuentas por cobrar a partir de las ventas a crédito.',
    },
    {
      termino: 'Endeudamiento Externo',
      significado:
        'Mide qué proporción de los activos de una empresa ha sido financiada con recursos de terceros.',
    },
    {
      termino: 'Indicador Financiero',
      significado:
        'Cualquier medida cuantitativa utilizada para evaluar el desempeño financiero de una empresa, como la rentabilidad, liquidez, eficiencia o solvencia.',
    },
  ],
  referencias: [
    {
      referencia:
        'Coral Delgado, L. C. & Gudiño Dávila, E. L. (2014). Contabilidad universitaria. (7ª Edición). Bogotá, Colombia: Editorial. Mc Graw Hill.',
      link: '',
    },
    {
      referencia:
        'Díaz, H. (2006). Contabilidad general. (2ª Edición). México DF, México: Editorial. Pearson Prentice Hall.',
      link: '',
    },
    {
      referencia:
        'García, O. L. (2009). Administración financiera: Fundamentos y aplicaciones. (4ª Edición). Bogotá, Colombia: Editorial. Desconocida.',
      link: '',
    },
    {
      referencia:
        'Ortiz Anaya, H. (2011). Análisis financiero aplicado y principios de administración financiera. (14ª Edición). Bogotá, Colombia: Editorial. Universidad Externado de Colombia.',
      link: '',
    },
    {
      referencia: 'Microsoft. (s.f.). Funciones financieras de Excel.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gustavo Ernesto Mariño Puentes',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>Fullstack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>Fullstack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
