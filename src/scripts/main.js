document.addEventListener('DOMContentLoaded', function() {
    this.getElementById('form-sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault()

        let numeroMaximo = document.getElementById('max-number').value
        numeroMaximo = parseInt(numeroMaximo)

        let numeroAleatorio = Math.random() * numeroMaximo
        numeroAleatorio = Math.floor(numeroAleatorio + 1)

        document.getElementById('resultado-valor').innerText = numeroAleatorio
        document.querySelector('.resultado').style.display = 'block'
    })
})