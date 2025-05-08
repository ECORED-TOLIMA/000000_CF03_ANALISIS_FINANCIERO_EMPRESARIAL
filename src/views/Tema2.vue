<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Cálculo e interpretación de indicadores financieros en excel

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema2/img-01.png', alt='')

    p.mb-4 Este tema tiene como propósito enseñar al aprendiz cómo aplicar funciones de Excel para calcular los principales indicadores financieros de una empresa. Se trabajará con ejemplos prácticos que permitan comprender su utilidad en la toma de decisiones gerenciales y en el análisis del desempeño económico de una organización.

    .titulo1.mb-5(data-aos="zoom-in")
      img(src='@/assets/curso/temas/icono.svg', alt='Imagen decorativa')
      h4.mb-0 Indicadores de liquidez

    p.mb-4 Permiten conocer la capacidad de la empresa para cumplir con sus obligaciones de corto plazo y tienen en cuenta lo siguiente:

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/icono-01.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#E5E9FE")
            h4.text-center.mt-5.mb-0 Razón corriente
            p.text-center.mt-4.mb-0 Activo corriente / Pasivo corriente.

      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/icono-02.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#E5E9FE")
            h4.text-center.mt-5.mb-0 Prueba ácida
            p.text-center.mt-4.mb-0 Activo corriente - Inventarios / Pasivo corriente.

      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/icono-03.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#E5E9FE")
            h4.text-center.mt-5.mb-0 Aplicación en Excel
            p.text-center.mt-4.mb-0 Usar celdas con los valores contables para aplicar la fórmula directamente, utilizando referencias relativas y absolutas cuando sea necesario.

    .titulo1.mb-5(data-aos="zoom-in")
      img(src='@/assets/curso/temas/icono.svg', alt='Imagen decorativa')
      h4.mb-0 Indicadores de rentabilidad

    p.mb-4 Permiten evaluar la eficiencia de la empresa en la generación de utilidades. Tiene presente las siguientes acciones:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema2/img-02.svg' alt="Imagen decorativa")
      .col-lg-6(data-aos="fade-left")
        LineaTiempoD.color-acento-botones
          p.text-small(numero="1" titulo="Margen neto") Utilidad neta / Ventas netas.
          p.text-small(numero="2" titulo="Rendimiento sobre activos (ROA)") Utilidad neta / Activos totales.
          p.text-small(numero="3" titulo="Rendimiento sobre patrimonio (ROE)") LUtilidad neta / Patrimonio.
          p.text-small(numero="4" titulo="Aplicación en Excel") Construir un resumen de resultados financieros y aplicar las fórmulas con referencias automáticas a las celdas con los datos.
        
    .titulo1.mb-5(data-aos="zoom-in")
      img(src='@/assets/curso/temas/icono.svg', alt='Imagen decorativa')
      h4.mb-0 Indicadores de endeudamiento

    p.mb-4 Miden el nivel de deuda que tiene la empresa en relación con sus activos o patrimonio. Igualmente, tienen en cuenta las siguientes aplicaciones:

    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .tarjeta.tarjeta--gris2.p-2.mb-4
          .row.justify-content-center.align-items-center
            .col-4.d-none.d-lg-block.order-lg-2.order-2.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema2/img-03.svg', alt='Imagen decorativa')
            .col-lg-6.col-12.mb-3.order-lg-1.order-2.mb-lg-0.p-4
              ul.lista-ul.mb-0
                li.mb-0
                  i.fas.fa-check(style="color:#BAC36A")
                  | #[b Nivel de endeudamiento]
                  p.mb-0 Pasivo total / Activo total.

                li.mb-0
                  i.fas.fa-check(style="color:#BAC36A")
                  | #[b Autonomía financiera]
                  p.mb-0 Patrimonio / Activo total.
                
                li.mb-0
                  i.fas.fa-check(style="color:#BAC36A")
                  | #[b Aplicación en Excel]
                  p.mb-0 Elaborar un balance básico en una hoja de cálculo y aplicar las razones usando fórmulas simples.

    .titulo1.mb-5(data-aos="zoom-in")
      img(src='@/assets/curso/temas/icono.svg', alt='Imagen decorativa')
      h4.mb-0 Indicadores de eficiencia operativa

    p.mb-4 Evalúan el manejo de los recursos y el control sobre los costos y gastos. Similar a los indicadores anteriores, a continuación, se relacionan sus acciones y su aplicación en Excel:

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/icono-04.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#E5E9FE")
            h4.text-center.mt-5.mb-0 Rotación de cartera
            p.text-center.mt-4.mb-0 Ventas a crédito / Cuentas por cobrar.

      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/icono-05.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#E5E9FE")
            h4.text-center.mt-5.mb-0 Rotación de inventarios
            p.text-center.mt-4.mb-0 Costo de ventas / Inventario promedio.

      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/icono-06.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#E5E9FE")
            h4.text-center.mt-5.mb-0 Aplicación en Excel
            p.text-center.mt-4.mb-0 Calcular con datos históricos o proyecciones, complementando con gráficas de apoyo.
    
    .titulo1.mb-5(data-aos="zoom-in")
      img(src='@/assets/curso/temas/icono.svg', alt='Imagen decorativa')
      h4.mb-0 Interpretación de resultados

    p.mb-4 Una vez calculados los indicadores, se debe elaborar una breve interpretación que permita responder preguntas clave como:

    .row.fondo3-t3.justify-content-center.align-items-center.py-3.px-lg-5.px-4.mb-3
      .col-lg-3.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema2/img-04.svg' alt="Imagen decorativa")
      .col-lg-7.col-12.mb-3(data-aos="fade-left")
        p Los indicadores de liquidez son herramientas financieras que permiten









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
