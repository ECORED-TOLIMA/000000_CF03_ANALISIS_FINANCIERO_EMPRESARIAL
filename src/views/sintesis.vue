<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p(data-aos="fade-down") Este componente formativo, permitió al aprendiz desarrollar habilidades técnicas en el uso de Excel como herramienta de apoyo para el análisis financiero empresarial. A través de la aplicación de funciones básicas, referencias en fórmulas y representación gráfica, se fortaleció la capacidad para calcular e interpretar indicadores clave como la razón corriente, el margen neto, el endeudamiento externo y la rotación de cartera.
    p(data-aos="fade-down") El enfoque práctico del componente, basado en datos reales de una empresa simulada, facilitó la comprensión de los conceptos financieros y su aplicación en contextos organizacionales. La integración entre teoría y práctica, permitió al aprendiz estructurar reportes automáticos, detectar fortalezas o debilidades financieras y sustentar decisiones con base en información cuantitativa confiable.
    p(data-aos="fade-down") Estas competencias son fundamentales para desenvolverse en entornos laborales, donde se exige análisis ágil, interpretación rigurosa y comunicación clara de resultados financieros. Excel se consolida, como un aliado estratégico en la gestión contable y financiera.
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
