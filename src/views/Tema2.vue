<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Cálculo e interpretación de indicadores financieros en Excel
    
    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema2/img01.png', alt='Imagen decorativa')

    p.mb-4 Este tema tiene como propósito enseñar al aprendiz cómo aplicar funciones de Excel para calcular los principales indicadores financieros de una empresa. Se trabajará con ejemplos prácticos que permitan comprender su utilidad en la toma de decisiones gerenciales y en el análisis del desempeño económico de una organización.

    .row.align-items-center.mb-4
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 50px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Indicadores de liquidez

    p.mb-5 Permiten conocer la capacidad de la empresa para cumplir con sus obligaciones de corto plazo y tienen en cuenta lo siguiente:

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img02.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#E5E9FE")
            h4.text-center.mt-5.mb-0 Razón corriente
            p.text-center.mt-4.mb-0 Activo corriente / Pasivo corriente.

      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img03.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#E5E9FE")
            h4.text-center.mt-5.mb-0 Prueba ácida
            p.text-center.mt-4.mb-0 Activo corriente - Inventarios / Pasivo corriente.

      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img04.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#E5E9FE")
            h4.text-center.mt-5.mb-0 Aplicación en Excel
            p.text-center.mt-4.mb-0 Usar celdas con los valores contables para aplicar la fórmula directamente, utilizando referencias relativas y absolutas cuando sea necesario.

    .row.align-items-center.mb-4
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 50px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Indicadores de rentabilidad

    p.mb-5 Permiten evaluar la eficiencia de la empresa en la generación de utilidades. Tiene presente las siguientes acciones:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema2/img05.png' alt="Imagen decorativa")
      .col-lg-6(data-aos="fade-left")
        LineaTiempoD.color-acento-botones.especial
          p(numero="1" titulo="Margen neto") Utilidad neta / Ventas netas.
          p(numero="2" titulo="Rendimiento sobre activos (ROA)") Utilidad neta / Activos totales.
          p(numero="3" titulo="Rendimiento sobre patrimonio (ROE)") LUtilidad neta / Patrimonio.
          p(numero="4" titulo="Aplicación en Excel") Construir un resumen de resultados financieros y aplicar las fórmulas con referencias automáticas a las celdas con los datos.

    .row.align-items-center.mb-4
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 50px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Indicadores de endeudamiento

    p.mb-4 Miden el nivel de deuda que tiene la empresa en relación con sus activos o patrimonio. Igualmente, tienen en cuenta las siguientes aplicaciones:

    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon--C02.p-2.mb-4
          .row.justify-content-center.align-items-center
            .col-4.d-none.d-lg-block.order-lg-2.order-2.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema2/img06.svg', alt='Imagen decorativa')
            .col-lg-6.col-12.mb-3.order-lg-1.order-2.mb-lg-0.p-4
              ul.lista-ul.mb-0
                li.mb-3
                  i.fas.fa-check(style="color:#BAC36A")
                  | #[b Nivel de endeudamiento]
                p.mb-3 Pasivo total / Activo total.

                li.mb-3
                  i.fas.fa-check(style="color:#BAC36A")
                  | #[b Autonomía financiera]
                p.mb-3 Patrimonio / Activo total.
                
                li.mb-3
                  i.fas.fa-check(style="color:#BAC36A")
                  | #[b Aplicación en Excel]
                p.mb-0 Elaborar un balance básico en una hoja de cálculo y aplicar las razones usando fórmulas simples.

    .row.align-items-center.mb-4
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 50px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Indicadores de eficiencia operativa

    p.mb-5 Evalúan el manejo de los recursos y el control sobre los costos y gastos. Similar a los indicadores anteriores, a continuación, se relacionan sus acciones y su aplicación en Excel:

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img07.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#E5E9FE")
            h4.text-center.mt-5.mb-0 Rotación de cartera
            p.text-center.mt-4.mb-0 Ventas a crédito / Cuentas por cobrar.

      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img08.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#E5E9FE")
            h4.text-center.mt-5.mb-0 Rotación de inventarios
            p.text-center.mt-4.mb-0 Costo de ventas / Inventario promedio.

      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img09.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#E5E9FE")
            h4.text-center.mt-5.mb-0 Aplicación en Excel
            p.text-center.mt-4.mb-0 Calcular con datos históricos o proyecciones, complementando con gráficas de apoyo.

    .row.align-items-center.mb-4
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 50px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Interpretación de resultados

    p.mb-4 Una vez calculados los indicadores, se debe elaborar una breve interpretación que permita responder preguntas clave como:

    .row.cajon--BG02.justify-content-center.align-items-center.py-3.px-lg-5.p-4.mb-3
      .col-lg-3.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema2/img10.svg' alt="Imagen decorativa")
      .col-lg-5.col-12.mb-0(data-aos="fade-left")
        ul.lista-ul.mb-0
          li.mb-3
            i.fas.fa-angle-right(style="color:#BAC36A")
            | ¿Cuál es la situación financiera de la empresa?
          li.mb-3
            i.fas.fa-angle-right(style="color:#BAC36A")
            | ¿Qué tan rentable es?
          li.mb-0
            i.fas.fa-angle-right(style="color:#BAC36A")
            | ¿Tiene buen manejo de sus recursos?

</template>

<script>
export default {
  name: 'Tema2',
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
