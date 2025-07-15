<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        p En la actualidad, el análisis financiero requiere no solo del dominio conceptual de los indicadores, sino también del uso eficiente de herramientas tecnológicas que permitan procesar y representar la información contable de forma ágil, precisa y comprensible. Este componente formativo tiene como propósito fortalecer las competencias del aprendiz en el uso de Microsoft Excel para el cálculo e interpretación de indicadores financieros clave.
        p A través de funciones básicas, fórmulas aritméticas y representación gráfica, se busca facilitar el análisis de la información financiera en contextos reales. Se trabajará con ejercicios prácticos que permiten aplicar conceptos como la razón corriente, el margen neto, la rotación de cartera y el nivel de endeudamiento. De esta manera, el aprendiz podrá desarrollar habilidades operativas y analíticas que lo preparan para tomar decisiones fundamentadas, utilizando Excel como una herramienta estratégica en la gestión financiera empresarial.
        p Partiendo de lo anterior, se invita a que acceda al siguiente video, el cual relaciona la temática a tratar durante este componente formativo:
        
      .col-lg-5.col-8.mb-lg-0.mb-4.order-lg-2.order-1(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/intro/img01.png', alt='Texto que describa la imagen')
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/6oE7Mgggm_g?si=j-kGuuDALlViy7Eo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
