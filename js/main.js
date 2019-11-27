const app = new Vue({
    el: 'main',
    data: {
        mostrar : false,
        hola: 'Hola mundo con VueJS 2',
        imagen : "iconos/vue.png",
        cursos : [
            { name: "Fundamentos de React", url: 'http://cursos.carlosazaustre.es/p/react-js' },
            { name: "Redux con React", url: 'http://cursos.carlosazaustre.es/p/curso-profesional-de-redux-y-react' },
            { name: "React Native", url: 'http://cursos.carlosazaustre.es/p/react-native' },
        ]
    },
    methods: {
        toggleMostrar: function(){
            this.mostrar = !this.mostrar
        }
    },
});