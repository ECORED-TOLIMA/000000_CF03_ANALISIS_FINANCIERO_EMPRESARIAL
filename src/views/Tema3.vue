<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Aplicación práctica para el análisis financiero

    p.mb-5(data-aos="fade-down") El aprendizaje significativo en el análisis financiero, se potencia cuando los conceptos teóricos se trasladan a la práctica, mediante ejercicios reales. Por esta razón, esta temática, está orientada al uso de recursos audiovisuales que explican paso a paso cómo aplicar funciones de Excel en el cálculo y análisis de los principales indicadores financieros. Estos videos constituyen una herramienta didáctica complementaria que permite al aprendiz reforzar sus habilidades operativas de forma autónoma y visual.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-right")(style="background-color:#B0BDA0") 
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Cada video está diseñado para abordar un grupo de indicadores específicos, utilizando casos hipotéticos con cifras reales de una empresa simulada. El objetivo es que el aprendiz pueda replicar los procedimientos desde su propia hoja de cálculo, comprendiendo no solo las fórmulas empleadas, sino también su lógica financiera, correcta interpretación y utilidad para la toma de decisiones.

    p.mb-5(data-aos="fade-down") A lo largo de los videos, se orienta al aprendiz en el uso de referencias absolutas y relativas, el diseño de resúmenes financieros, el uso de formatos condicionales para resaltar desviaciones y la representación gráfica de tendencias, a través de gráficos de líneas o barras. Asimismo, se incluyen recomendaciones para validar los resultados, detectar errores comunes y estructurar reportes ejecutivos que puedan ser presentados a directivos o #[em stakeholders] (grupos de interés) de la organización.

    .row.justify-content-center.mb-5(data-aos="fade-down-right") 
      .col-10
        .cajon.color-primario.p-4
          p.mb-0 Esta metodología práctica, busca consolidar la competencia del aprendiz en el uso de Excel como herramienta de análisis financiero, promoviendo la autonomía, el pensamiento analítico y el desarrollo de habilidades digitales claves para el entorno empresarial actual. 

    .row.align-items-center.mb-4
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 50px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 De la teoría a la práctica: aplicación de indicadores financieros en Excel

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        p En el análisis financiero, comprender la lógica detrás de los indicadores no es suficiente; es indispensable saber cómo calcularlos e interpretarlos, aplicando herramientas concretas. Por ello, se relacionará una guía práctica basada en el caso de una empresa simulada de nombre “CINE FUTURO”, con datos reales de los años 2023 y 2024. Utilizando una plantilla de Excel diseñada específicamente para este fin, el aprendiz podrá aplicar fórmulas, estructurar reportes y analizar la evolución de los principales grupos de indicadores financieros.
        p Por lo anterior, a continuación, se describen cinco ejemplos representativos, uno por cada grupo de análisis que ilustran cómo calcular indicadores clave de manera efectiva, apoyados en herramientas tecnológicas que facilitan la toma de decisiones empresariales:

      .col-lg-5.col-8.mb-lg-0.mb-4.order-lg-2.order-1(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img02.png', alt='Texto que describa la imagen')

    .row.align-items-center.mb-4
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 50px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Indicador de liquidez – Razón corriente

    p.mb-5(data-aos="fade-down") La razón corriente, permite evaluar la capacidad de la empresa para cubrir sus obligaciones de corto plazo con sus activos corrientes. Su fórmula es:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon--C01.p-2.mb-0
          .row.justify-content-center.align-items-center
            .col-lg-6.col-12.mb-3.order-lg-1.order-2.mb-lg-0.p-4
              p.text-bold.text-center Razón corriente = Activo corriente / Pasivo corriente

    p(data-aos="fade-down") En Excel, para calcularla, se debe identificar en el estado de situación financiera las celdas correspondientes al total del activo corriente y al total del pasivo corriente. Por ejemplo, si el activo corriente está en la celda B5 y el pasivo corriente en B10, se escribe la fórmula =B5/B10. Este valor superior a 1 indica que la empresa posee más activos líquidos que deudas inmediatas, lo cual es positivo desde el punto de vista financiero.
    p.mb-4(data-aos="fade-down") Se sugiere acceder al siguiente video, el cual explica dicho procedimiento del indicador de razón corriente:

    .row.justify-content-center.align-items-center.mb-5        
      .col-lg-12(data-aos="flip-down")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/M6_TJTHw4Js?si=FCwlkHIx1yQDx5y6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.align-items-center.mb-4
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 50px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Indicador de endeudamiento – Endeudamiento externo

    p.mb-5(data-aos="fade-down") Este indicador muestra qué proporción de los activos de la empresa ha sido financiada con deuda externa. Se calcula con la fórmula:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon--C01.p-2.mb-0
          .row.justify-content-center.align-items-center
            .col-lg-6.col-12.mb-3.order-lg-1.order-2.mb-lg-0.p-4
              p.text-bold Endeudamiento externo = Pasivo total / Activo total

    .tarjeta--BG03.px-md-5.p-4.mb-5
      p(data-aos="fade-down") En Excel, se utilizan los valores totales de pasivos (celda C12) y de activos (celda C5) y se aplica la fórmula =C12/C5. Un resultado inferior al 50 % puede indicar una estructura financiera conservadora; sin embargo, esto depende del sector y la estrategia empresarial. En CINE FUTURO, por ejemplo, el endeudamiento externo se ha mantenido estable alrededor del 30 %, lo cual refleja un uso moderado del apalancamiento.
      p.mb-4(data-aos="fade-down") Al ingresar al siguiente video, podrá apreciar la explicación sobre el procedimiento previamente relacionado, en cuanto al indicador de endeudamiento externo:

      .row.justify-content-center.align-items-center.mb-5        
        .col-lg-12(data-aos="flip-down")
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/JCMoT3Bkgk0?si=Ops1vuvl91VLxaJA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.align-items-center.mb-4
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 50px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Indicador de actividad – Rotación de cartera
    
    p.mb-5(data-aos="fade-down") Este indicador mide la eficiencia con la que la empresa recupera sus cuentas por cobrar. Se calcula con la fórmula:

    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon--C01.p-2.mb-0
          .row.justify-content-center.align-items-center
            .col-lg-7.col-12.mb-3.order-lg-1.order-2.mb-lg-0.p-4
              p.text-bold Rotación de cartera = Ventas a crédito / Cuentas por cobrar promedio

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-12.mb-3.d-lg-flex.d-none.order-lg-2.order-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema3/img03.svg', alt='Imagen decorativa')

      .col-lg-7.col-12.mb-3.order-lg-1.order-1(data-aos="fade-right")
        .bloque-texto-b.color-primario.py-4
          .bloque-texto-b__texto
            p En Excel, se toman las ventas anuales a crédito (por ejemplo, D20) y el promedio de cuentas por cobrar entre dos periodos (por ejemplo, (E15 + F15)/2), utilizando la fórmula =D20/((E15+F15)/2). Un valor más alto indica que la empresa recupera rápidamente sus cuentas, lo cual mejora la liquidez y reduce el riesgo de incobrabilidad. Para CINE FUTURO, esta rotación es esencial, dado su modelo de ingresos recurrentes.
            br
            br
            p.mb-0 Acceda al siguiente video, para conocer la explicación de este tipo de indicador, basado en lo previamente indicado:

    .row.justify-content-center.align-items-center.mb-5        
      .col-lg-12(data-aos="flip-down")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vidkupF5pgA?si=0Y3UOi31gdHHKwYG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.align-items-center.mb-4
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 50px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Indicador de rentabilidad – Margen neto
    
    p.mb-5(data-aos="fade-down") El margen neto indica qué proporción de las ventas se convierte en utilidad neta. Se calcula con la fórmula:

    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon--C01.p-2.mb-0
          .row.justify-content-center.align-items-center
            .col-lg-5.col-12.mb-3.order-lg-1.order-2.mb-lg-0.p-4
              p.text-bold Margen neto = Utilidad neta / Ventas netas

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-right")(style="background-color:#B0BDA0") 
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img04.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p En Excel, si la utilidad neta está en la celda G25 y las ventas en G10, se emplea la fórmula =G25/G10. Este indicador refleja la rentabilidad final del negocio después de todos los costos y gastos. En el caso de CINE FUTURO, un margen neto creciente es señal de control eficiente sobre costos operativos y financieros.
        br
        br
        p Para finalizar con la representación visual de los indicadores, por medio del siguiente video, conocerá lo relacionado con el indicador de rentabilidad:

    .row.justify-content-center.align-items-center.mb-5        
      .col-lg-12(data-aos="flip-down")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/LxmYGh4WyJs?si=yigfNieFO5oUZKIj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.align-items-center.mb-4
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 50px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Aplicación didáctica: consolidación en Excel

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema3/img05.png', alt='Imagen decorativa')

    p.mb-4 El uso de Excel permite automatizar todos estos cálculos integrando celdas con referencias absolutas y relativas, lo cual facilita la actualización automática de los resultados al cambiar las cifras base. Además, combinando estos cálculos con herramientas como tablas dinámicas y gráficos, el aprendiz puede visualizar la evolución de los indicadores y emitir juicios financieros con mayor profundidad y claridad.

    .row.justify-content-center(data-aos="flip-up")
      .col-lg-8.col-12
        .cajon.cajon--C02.p-4
          .row.justify-content-center.al
            .col-auto.order-lg-1.order-1.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img06.svg', alt='Imagen decorativa')
            .col-lg-8.col-12.mb-3.order-lg-2.order-2.mb-lg-0
              p En los materiales complementarios, encuentra un archivo con los indicadores resueltos de la empresa “CINE FUTURO” tratados en los diferentes videos y otro archivo en blanco para que pueda practicar.


</template>

<script>
export default {
  name: 'Tema3',
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
