var app = new Vue({
    el: "#app",
    data() {
        return {
            titulo:"¿Quieres ser mi valentín?",
            nombre:"Leidy",
            estilos:{
                top:'auto',
                left:'auto'
            },
            imagen:{
                novio:'img/novio.png',
                modal:'img/amor.jpg'
            }
        }
    },
    created() {
        // Obtener el nombre de la URL
        const params = new URLSearchParams(window.location.search);
        const nombreUrl = params.get('nombre');
        
        // Si hay un nombre en la URL, actualizar el título
        if (nombreUrl) {
            this.nombre = nombreUrl;
            this.titulo = `¿Quieres ser mi valentín, ${nombreUrl}?`;
        }
    },
    methods: {
        abrirmodal(){
            $("#exampleModal").modal("show");
        },
        moverboton(){
            this.estilos.top = `${Math.random() * 500}px`;
            this.estilos.left = `${Math.random() * 300}px`;
        }
    },
})