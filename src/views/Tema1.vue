<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Fundamentos del uso de herramientas tecnológicas en el análisis financiero

    p.mb-4(data-aos="fade-down") En el entorno empresarial actual, caracterizado por la velocidad del cambio, la globalización y el acceso masivo a la información, el análisis financiero ha evolucionado significativamente. Ya no se trata únicamente de revisar cifras estáticas al cierre de un periodo, sino:

    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align.cajon.C01.p-4
          .col-lg-8.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0.mb-0.px-4
            ul.lista-ul
              li.mb-3 
                i.fas.fa-angle-right
                | Comprender dinámicamente la situación financiera de una organización.
              li.mb-3 
                i.fas.fa-angle-right
                | Anticiparse a riesgos.
              li.mb-0 
                i.fas.fa-angle-right
                | Tomar decisiones basadas en datos. 
          .col-lg-3.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3.px-0
            figure
              img(src='@/assets/curso/temas/tema1/img01.png', alt='Imagen decorativa')  

    p.mb-4(data-aos="fade-down") En este contexto, la tecnología juega un papel esencial al facilitar procesos que antes eran manuales, lentos y propensos a errores.

    p.mb-5(data-aos="fade-down") Los tomadores de decisiones como gerentes, analistas financieros o contadores, requieren información clara, precisa y oportuna. Para lograrlo, necesitan:

    .cajon.cajon--BG01.px-md-5.px-4.mb-5
      .row.justify-content-center.align-items-center(data-aos="fade-down")
        .col-lg-3.d-none.d-lg-block
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema1/img02.png", alt="alt").img400.m-auto
        .col-lg-9
          SlyderF.custom(columnas="col-lg-6 col-xl-4")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema1/img03.svg", alt="alt").img100.m-auto
              p #[b Herramientas]
              p Apoyarse en herramientas que permitan procesar datos con agilidad.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema1/img04.svg", alt="alt").img100.m-auto
              p #[b Simulaciones]
              p Realizar simulaciones de escenarios.

            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema1/img05.svg", alt="alt").img100.m-auto
              p #[b Cálculos]
              p Automatizar cálculos complejos.

            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema1/img06.svg", alt="alt").img100.m-auto
              p #[b Reportes]
              p Generar reportes comprensibles para diferentes audiencias. 

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-down")
        p Este tipo de análisis financiero avanzado permite interpretar indicadores clave, evaluar la viabilidad de proyectos, analizar tendencias, además de establecer estrategias financieras sólidas.
        p La incorporación de herramientas tecnológicas al análisis financiero, no solo mejora la eficiencia operativa, sino que también eleva la calidad de los diagnósticos financieros. Además, promueve la trazabilidad de los datos, la transparencia en la toma de decisiones y la posibilidad de integrar la información financiera con otras áreas de la organización. En este sentido, el dominio de herramientas tecnológicas se ha convertido en una competencia esencial para los profesionales del área contable y financiera.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-right")(style="background-color:#B0BDA0") 
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img07.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Dentro de estas herramientas, Microsoft Excel se ha posicionado como una de las más utilizadas y versátiles. Su interfaz amigable, la posibilidad de personalizar fórmulas y modelos, junto con sus funciones estadísticas, financieras y gráficas, la convierten en una herramienta indispensable en cualquier departamento financiero. A través de Excel, es posible construir modelos de análisis financiero aplicables a empresas de cualquier tamaño, facilitando la comprensión y el uso estratégico de la información económica.

    .row.align-items-center.mb-4
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 50px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 La importancia de las herramientas tecnológicas en finanzas

    p En el campo financiero, la exactitud y la eficiencia en el manejo de la información, son aspectos clave para la toma de decisiones. Las herramientas tecnológicas permiten automatizar cálculos repetitivos, minimizar errores humanos y gestionar grandes volúmenes de datos con rapidez. Esto representa una ventaja significativa frente a los métodos manuales tradicionales, ya que los procesos financieros pueden desarrollarse de manera más ágil, precisa y ordenada.
    p.mb-4 Además de la automatización, las herramientas tecnológicas facilitan la creación de modelos de simulación, los cuales permiten analizar diferentes escenarios financieros: 

    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4.bg-C01.mb-4(data-aos="fade-left")
          .row.justify-content-center
            .col-md-6.col-lg-4.mb-4.mb-lg-0
              .p-3.bg-C02
                .row.align-items-center
                  .col-auto
                    figure
                      img(src='@/assets/curso/temas/tema1/img08.svg', alt='', style='width: 80px').m-auto
                  .col
                    .row.h-100.align-items-center
                      .col-12
                        p.mb-0 Optimistas

            .col-md-6.col-lg-4.mb-4.mb-lg-0
              .p-3.bg-C02
                .row.align-items-center
                  .col-auto
                    figure
                      img(src='@/assets/curso/temas/tema1/img09.svg', alt='', style='width: 80px').m-auto
                  .col
                    .row.h-100.align-items-center
                      .col-12
                        p.mb-0 Pesimistas

            .col-md-6.col-lg-4
              .p-3.bg-C02
                .row.align-items-center
                  .col-auto
                    figure
                      img(src='@/assets/curso/temas/tema1/img10.svg', alt='', style='width: 80px').m-auto
                  .col
                    .row.h-100.align-items-center
                      .col-12
                        p.mb-0 Conservadores

        p.mb-4 Esta capacidad de proyectar resultados y anticiparse a posibles comportamientos del mercado o de los indicadores internos de la empresa, es fundamental para la planificación financiera y el análisis del riesgo. Gracias a estas herramientas, los profesionales pueden tomar decisiones informadas basadas en datos objetivos.

        .row.justify-content-center.align-items-center
          .col-lg-3.col-12.mb-3.d-lg-flex.d-none(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/tema1/img11.svg', alt='Imagen decorativa')

          .col-lg-7.col-12.mb-3(data-aos="fade-right")
            .bloque-texto-b.color-primario.py-4
              .bloque-texto-b__texto
                p.mb-0 Otra ventaja importante es la posibilidad de representar la información financiera de forma visual, mediante gráficos, dashboards, tablas dinámicas y reportes interactivos. Esta representación mejora la comprensión del estado financiero de la organización, tanto para los expertos como para directivos, inversionistas o partes interesadas que no tienen formación técnica en contabilidad o finanzas. Así, la tecnología cumple también un rol comunicativo clave dentro de la gestión organizacional.

    .row.align-items-center.mb-4
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 50px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Ventajas del uso de Excel en el análisis financiero

    p.mb-4 Las siguientes, son las ventajas contempladas al aplicar esta herramienta de análisis financiero:

    .row.mb-5(data-aos="flip-up")
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 1
          h4.text-center 
            b Automatización de cálculos
          p Reduce el error humano y permite replicar modelos financieros.
          
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            .h2 2
          h4.text-center 
            b Análisis de escenarios
          p Facilita la toma de decisiones al evaluar distintas posibilidades.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 3
          h4.text-center 
            b Presentación clara de resultados
          p Gracias a sus herramientas gráficas y tablas dinámicas.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones-especial.p-5
          .tarjeta-numerada__numero
            .h2 4
          h4.text-center 
            b Accesibilidad y aplicabilidad
          p Es un #[i software] ampliamente difundido en el mundo empresarial.

    .row.align-items-center.mb-4
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 50px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Conexión con los indicadores financieros

    p.mb-4 El uso de Excel en el análisis financiero, va más allá del simple cálculo de cifras. Esta herramienta permite estructurar modelos que integran diferentes variables financieras, facilitando así la interpretación y evaluación de los resultados. Con Excel, no solo se obtiene un valor numérico, sino que se puede entender su comportamiento a lo largo del tiempo, compararlo entre periodos y analizar su impacto en el desempeño general de la empresa.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon--C01.p-2.mb-4
          .row.justify-content-center.align-items-center
            .col-4.d-none.d-lg-block.order-lg-2.order-2.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema1/img12.svg', alt='Imagen decorativa')
            .col-lg-6.col-12.mb-3.order-lg-1.order-2.mb-lg-0.p-4
              p Una de sus aplicaciones más relevantes es el análisis de indicadores financieros, también conocidos como razones financieras. Estos indicadores permiten medir aspectos fundamentales como la rentabilidad, la liquidez, el nivel de endeudamiento, la eficiencia operativa y el valor creado por la empresa. Con funciones adecuadas y el uso de fórmulas simples o complejas, Excel permite calcular y visualizar estos indicadores de manera clara, dinámica y actualizable

        p Al organizar adecuadamente los datos y vincularlos con las fórmulas correspondientes, el usuario puede construir reportes que se actualizan automáticamente con la información contable más reciente. Esta capacidad convierte a Excel en un aliado estratégico para la toma de decisiones financieras, ya que ayuda a identificar fortalezas, debilidades y oportunidades de mejora en la gestión de los recursos económicos de la organización.

    .row.align-items-center.mb-4
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 50px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Requisitos previos para el uso de Excel en análisis financiero

    p Para aprovechar al máximo las herramientas que ofrece Excel en el análisis financiero, es importante que el aprendiz cuente con unos conocimientos previos fundamentales. Estos conocimientos constituyen la base sobre la cual se construyen modelos de análisis, informes y reportes financieros confiables y funcionales. Sin este dominio inicial, el uso de funciones más avanzadas puede resultar confuso o llevar a errores en la interpretación de resultados.
    p.mb-5 Por lo anterior hay que tener presente los siguientes dos aspectos:

    .row.justify-content-center(data-aos="fade-down-right")
      .col-lg-4.col-12.mb-3.d-lg-flex.d-none
        figure
          img(src='@/assets/curso/temas/tema1/img13.png', alt='Imagen decorativa')
      .col-lg-8.col-12.mb-3
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--C01")
          .row(titulo="Aplicabilidad")
            .col-md-12.mb-4.mb-md-0
              p Es necesario comprender el uso correcto de las celdas, fórmulas y referencias. Esto incluye saber cómo escribir fórmulas básicas, aplicar operadores matemáticos y utilizar tanto referencias relativas como absolutas, las cuales son esenciales para construir modelos replicables sin perder la coherencia de los datos.

          .row(titulo="Estructuración")
            .col-md-12.mb-4.mb-md-0
              p También es importante entender cómo se estructuran las hojas de cálculo, cómo se navega entre ellas y cómo organizar adecuadamente la información en filas y columnas.

          .row(titulo="Organización y limpieza ")
            .col-md-12.mb-4.mb-md-0
              p Un requisito clave es la organización y limpieza de los datos. El análisis financiero requiere información precisa, sin duplicados ni errores de formato. Por eso, antes de aplicar cualquier función, el aprendiz debe ser capaz de revisar bases de datos, depurar registros, unificar formatos y validar la consistencia de la información. Esta fase, conocida como “preparación de los datos”, es tan importante como el análisis mismo, ya que garantiza que los resultados obtenidos sean fiables y útiles para la toma de decisiones.
    
    .row.justify-content-center.mb-0(data-aos="fade-down-right")
      .col-lg-10.col-12
        p.mb-0 Por lo anterior, antes de avanzar hacia el uso de funciones financieras específicas, es fundamental que el aprendiz consolide su comprensión del entorno de trabajo de Excel y fortalezca sus habilidades operativas básicas. Estas competencias iniciales permitirán estructurar modelos con mayor claridad, precisión y eficiencia. A continuación, se abordarán las funciones básicas de Excel, que servirán como punto de partida para la construcción de modelos de análisis financiero, aplicados a distintos contextos empresariales.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Introducción a funciones básicas de Excel

    p Antes de utilizar funciones financieras avanzadas en Excel, es fundamental que el aprendiz domine las funciones básicas del programa. Estas herramientas permiten realizar cálculos simples de forma eficiente y son la base para construir modelos de análisis financiero más completos y confiables. Dominar estas funciones iniciales facilita el desarrollo de habilidades más complejas en el manejo de datos y elaboración de reportes.
    p.mb-4 A continuación, se presentan las funciones y operadores matemáticos más utilizados en el entorno financiero:

    .row.align-items-center.mb-4
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 50px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Funciones aritméticas básicas

    p.mb-4 Se utilizan las siguientes:

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-6.mb-3
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img14.svg' alt='AvatarTop')
          .tarjeta.color1(style= "width: 100%")
            .p-4
              h4 =SUMA(rango)
              p Suma un conjunto de celdas que contienen valores numéricos.

      .col-lg-6.mb-3
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img15.svg' alt='AvatarTop')
          .tarjeta.color1(style= "width: 100%")
            .p-4
              h4 =PROMEDIO(rango)
              p Calcula el promedio de los valores dentro del rango seleccionado.

      .col-lg-6.mb-3
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img16.svg' alt='AvatarTop')
          .tarjeta.color1(style= "width: 100%")
            .p-4
              h4 =MAX(rango)
              p Retorna el valor más alto dentro de un conjunto de datos.

      .col-lg-6.mb-3
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img17.svg' alt='AvatarTop')
          .tarjeta.color1(style= "width: 100%")
            .p-4
              h4 =MIN(rango)
              p Retorna el valor más bajo dentro de un conjunto de datos.

      .col-lg-6.mb-3
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img18.svg' alt='AvatarTop')
          .tarjeta.color1(style= "width: 100%")
            .p-4
              h4 =REDONDEAR(valor; número_de_decimales)
              p Redondea un número a la cantidad de decimales especificada.

    .row.align-items-center.mb-4
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 50px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Operadores matemáticos en fórmulas

    p.mb-4 Se listan los más comunes y que son familiares desde la formación temprana del aprendiz en sus estudios:

    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon--C01.p-2.mb-4
          .row.justify-content-center.align-items-center
            .col-4.d-none.d-lg-block.order-lg-2.order-2.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema1/img19.svg', alt='Imagen decorativa')
            .col-lg-6.col-12.mb-3.order-lg-1.order-2.mb-lg-0.p-4
              ul.lista-ul.mb-0
                li.mb-0
                  i.fas.fa-check(style="color:#BAC36A")
                  | + Suma

                li.mb-0
                  i.fas.fa-check(style="color:#BAC36A")
                  | - Resta

                li.mb-0
                  i.fas.fa-check(style="color:#BAC36A")
                  | * Multiplicación

                li.mb-0
                  i.fas.fa-check(style="color:#BAC36A")
                  | / División

                li.mb-0
                  i.fas.fa-check(style="color:#BAC36A")
                  | ^ Potenciación (elevado a una potencia)

    .row.align-items-center.mb-4
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 50px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Ejemplo práctico

    p.mb-4 Supóngase que se registran los ingresos mensuales de una empresa durante el primer trimestre del año:

    .row.justify-content-center.mb-0
      .col-lg-7.col-12
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 1.
          i Variación porcentual por años
        .tabla-a.color-acento-contenido.mb-5
          table(data-aos="zoom-in"  alt="En la tabla 2, se presentan ejemplos de metas aplicadas a un proyecto turístico en Colombia, destacando su alineación con objetivos estratégicos como sostenibilidad, desarrollo de infraestructura, promoción del destino y beneficio para la comunidad local.")
            thead
              tr(data-aos="fade-right")
                th(style="background-color: #FBE3FF; width: 20%; font-size: 18px;") MES
                th(style="background-color: #FBE3FF; width: 20%; font-size: 18px;") INGRESOS
            tbody
              tr(data-aos="fade-right")
                td #[b Enero]
                td $4.200.000
              tr(data-aos="fade-right")
                td #[b Febrero]
                td $4.800.000
              tr(data-aos="fade-right")
                td #[b Marzo]
                td $4.500.000

    p.mb-4 A partir del ejemplo, se debe realizar la siguiente aplicación en Excel:

    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon--C01.p-2.mb-4
          .row.justify-content-center.align-items-center
            .col-4.d-none.d-lg-block.order-lg-2.order-2.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema1/img20.svg', alt='Imagen decorativa')
            .col-lg-6.col-12.mb-3.order-lg-1.order-2.mb-lg-0.p-4
              ul.lista-ul.mb-0
                li.mb-0
                  i.fas.fa-check(style="color:#BAC36A")
                  p.mb-3 #[b Para calcular el ingreso total del trimestre]
                p.mb-3 Escribir esta función en la celda B5
                p.mb-3 =SUMA(B2:B4)

                li.mb-0
                  i.fas.fa-check(style="color:#BAC36A")
                  p.mb-3 #[b Para calcular el ingreso promedio mensual]
                p.mb-3 Escribir esta función en la celda B5
                p =PROMEDIO(B2:B4)

    .row.align-items-center.mb-4
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 50px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Referencias en fórmulas

    p.mb-4 Se distinguen los siguientes dos tipos de referencias:

    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon--C01.p-2.mb-4
          .row.justify-content-center.align-items-center
            .col-4.d-none.d-lg-block.order-lg-2.order-2.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema1/img21.svg', alt='Imagen decorativa')
            .col-lg-6.col-12.mb-3.order-lg-1.order-2.mb-lg-0.p-4
              ul.lista-ul.mb-0
                li.mb-3
                  i.fas.fa-check(style="color:#BAC36A")
                  | #[b Relativa (=B2+C2)]
                p.mb-3 Cambia automáticamente cuando la fórmula se copia a otra celda.

                li.mb-3
                  i.fas.fa-check(style="color:#BAC36A")
                  | #[b Absoluta (=$B$2+$C$2)]
                p.mb-0 Mantiene fija la referencia a las celdas, sin importar dónde se copie la fórmula.

    .row.justify-content-center.mb-0(data-aos="fade-down-right") 
      .col-10
        .cajon.color-secundario.p-4
          p.mb-0 Comprender y aplicar correctamente estas funciones y referencias es fundamental para desarrollar modelos escalables, especialmente al trabajar con grandes volúmenes de datos o al realizar análisis comparativos y proyecciones financieras.  

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
