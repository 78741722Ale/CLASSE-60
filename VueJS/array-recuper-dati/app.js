
// Questo è recupero Dati dalla radice con ID APP
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
        // Stringa Quinto Elemento
        fifth: 'person.ciboPrefe2[person.ciboPrefe2.length -1].name.slice(2,4)',
        // Stringa Sesto Elemento
        sixth: 'grandGrandFather.GrandFather[0].Father[0].Child.age',
        // Stringa Settimo Elemento
        seventh: 'grandGrandFather.GrandFather[grandGrandFather.GrandFather.length - 1].Father[grandGrandFather.GrandFather[grandGrandFather.GrandFather.length - 1].Father.length - 1].Child.age',
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
                },
                {
                    name: 'Acqua',
                    isGood: 'yes'
                },
            ],
        },
        // 6 Esempio
        grandGrandFather: {
            GrandFather: [
                {
                    Father: [
                        {
                            Child: {
                                name: 'Alessandro',
                                surname: 'Pecorilla',
                                age: 26,
                                gender: 'Adoro la Pucchiacca'
                            }
                        }
                    ]
                }
            ]
        }
    },
    // Metodi Contenuti
    methods: {

    },
})

// Questo è recupero Dati dalla radice con v-for_app

const v_for_app = new Vue({
    // Riferimento all'container con id App
    el: '#v-for_app',
    // dati contenuti
    data: {
        // Esercizio 1
        person: ['Andrea', 'Mattia', 'Nicola', 'Alessandro', 'Cristina'],
        // Esercizio 2
        v_for_string: 'L\'indice è il numero:', // Semplice Stringa
        // Array di oggetti senza nome
        items: [
            // Primo Object
            {
                message: 'Io sono il primo',
            },
            // Secondo Object
            {
                message: 'Io sono il secondo'
            },
            // Terzo Object
            {
                message: 'Io sono il Terzo'
            },
        ]
    },

}) 