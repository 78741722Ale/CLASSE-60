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
        // Stringa Terzo Elemento
        third: 'person.ciboPrefe2[1].name',
        // Stringa 4 elemento
        fourth: 'person.ciboPrefe2[person.ciboPrefe2.length -1].name',
        // 1 Esempio
        person: {
            name: 'Alessandro',
            eta: 26,
            gender: 'M',
            ciboPrefe: [
                'Pizza',
                'Sushi',
                'Pasta'
            ],
            ciboPrefe2: [
                {
                    name: 'Pizza',
                    isGood: 'yes'
                },
                {
                    name: 'Sushi',
                    isGood: 'yes'
                }
            ],
        },
    },
    // Metodi Contenuti
    methods: {

    },
})