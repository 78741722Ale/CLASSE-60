<!-- Markup del Componente -->
<template class="rel">
    <div> 
        <img src="https://media.vanityfair.com/photos/5f5156490ca7fe28f9ec3f55/master/pass/feels-good-man-film.jpg" alt="">
        <!-- Prova di una lista non ordinata -->
        <ul class="abs">
            <li>vue-hello</li>
            <li>human-code</li>
            <li>html-london-trip</li>    
        </ul>
    </div>
    
</template>

<!-- Script del Componente -->
<script>
export default {
  name: 'HeroImage',
}
</script>

<!-- Style del componente -->
<style scoped>
/* Dimensione Immagini */
img {
    width: 800px;
    height: 500px;
}
/* Position Relative */
.rel {
    position: relative;
}
/* Position Absolute */
.abs {
    position: absolute;
    top: 22%;
    left: 22%;
}

/* Lista non ordinata */
ul > li {
    list-style: none;
    padding: 0.5rem;
    line-height: 1.6rem;
    font-size: 2rem;
}


</style>