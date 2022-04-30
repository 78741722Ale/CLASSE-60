// Qua semplice richiamo, fuori dalla radice








// Questo è recupero Dati dalla radice
const app = new Vue({
    // Riferimento all'container con id App
    el: '#app',
    // dati contenuti
    data: {
        // Stringa primo elemento
        first: 'person.name',
        // Stringa Secondo Elemento
        second: 'person.ciboPrefe[0]',
        // 1 Esempio
        person: {
            name: 'Alessandro',
            eta: 26,
            gender: 'M',
            ciboPrefe: [
                'Pizza',
                'Sushi',
                'Pasta'
            ]
        },
    },
    // Metodi Contenuti
    methods: {

    },
})