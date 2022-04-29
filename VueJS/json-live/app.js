const app = new Vue({
    // Riferimento all'container con id App
    el: '#app',
    // dati contenuti
    data: {
        number: '',
        data: null,
        pc_number: null,
        user_number: null
    },
    // Metodi Contenuti
    methods: {},
    mounted() {

        // per prendere il this da dentro una funzione
        // anonima (non arrow function) --> aggiriamo l'impossibilità del mounted di risalire al this
        const self = this

        // Prima chiamata Axios --> Salvare parametri grazie alla arrow function
        axios.get('https://flynn.boolean.careers/exercises/api/random/int')
            .then(response => {
                // Verifico il console Log
                console.log(`Questo è il console log di this : ${this}`);
                // Verifico il response Data e soprattutto cosa mi rilascia
                this.data = response.data
                console.log("Questo invece è il console log di this.data");
                console.log("_________");
                console.log(this.data);
                // Console log di UserNumber, lo salvo
                this.user_number = response.data.response
                console.log("Questo è il console log user_number");
                console.log(this.user_number);
                console.log("_________");
            })

        // Seconda chiamata Axios
        axios.get('https://flynn.boolean.careers/exercises/api/random/int')
            .then(function (response) {
                // verifico la costante
                console.log("Questo invece è il console log di Self, con function anonima");
                console.log(self);
                console.log("_________");
                console.log("Questo invece è il console log di Response");
                console.log(response);
                console.log("_________");
                // Console log di UserNumber, lo salvo grazie a Self (che era la costante dichiarata prima)
                self.pc_number = response.data.response
                console.log("Questo è il console log self. PC Number");
                console.log(self.pc_number);
                console.log("_________");
            })
    },
})