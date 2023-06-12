var JsonMeusAcontecimentos = [{
    idMeusAcontecimentos: 0,
    texto: '',
    img: ''
},
JsonMeusAcontecimentos = {
    idMeusAcontecimentos: 1,
    texto: '<p>Seu central machucou a mão em um bloqueio!</p>',
    img: '<img src="ASSETS/possibilidadeMaoMachucada.jpg_large">'
},
{
    idMeusAcontecimentos: 2,
    texto: '<p> Seu Libero salva uma bola que parecia impossivel!',
    img: '<img src="ASSETS/possibilidadeSaveNoya.jpg">'
},
{
    idMeusAcontecimentos: 3,
    texto: '',
    img: ''
},
{
    idMeusAcontecimentos: 4,
    texto: '<p>A dupla estrela da Karasuno, Hinata e Kageyama surpreendem mais uma vez com seu ataque rápido</p>',
    img: '<img src="ASSETS/possibilidadeAtaqueSuperRapido.webp">'
},
{
    idMeusAcontecimentos: 5,
    texto: '',
    img: ''
},
{
    idMeusAcontecimentos: 6,
    texto: '',
    img: ''
},
{
    idMeusAcontecimentos: 7,
    texto: '<p>Seu Ponta marca um ACE!</p>',
    img: '<img src="ASSETS/possibilidadeAce.jpg">'
},
{
    idMeusAcontecimentos: 8,
    texto: '',
    img: ''
},
{

}
]
function suaCampanhaTeste() {
    for (placar = 0; placar <= 25; placar++) {
        placarAdversario = ((Math.random() * 25) + 1).toFixed()
        sorteador = ((Math.random() * 9)).toFixed()
        if (placar == 25 || placarAdversario == 25) {
            if (pontosKarasuno == 0 && pontosInarizaki == 0) {
                placarPrimeiroSet.innerHTML += `<h1>KARASUNO ${placar} x ${placarAdversario} INARIZAKI<h1>`
            } else if (pontosKarasuno == 1 && pontosInarizaki == 0) {
                placarSegundoSet.innerHTML += `<h1>KARASUNO ${placar} x ${placarAdversario} INARIZAKI<h1>`
            } else if (pontosKarasuno == 0 && pontosInarizaki == 1) {
                placarSegundoSet.innerHTML += `<h1>KARASUNO ${placar} x ${placarAdversario} INARIZAKI<h1>`
            }
            if (placar == 25) {
                pontosKarasuno++
            }
            if (placarAdversario == 25) {
                pontosInarizaki++
            }
            break;
        }
        if (JsonMeusAcontecimentos[sorteador].idMeusAcontecimentos == 7) {
            placar++
        }
        if (JsonMeusAcontecimentos[sorteador].idMeusAcontecimentos == 1) {
            placarAdversario += 5
        }
        if (pontosKarasuno == 0 && pontosInarizaki == 0) {
            destaquesPrimeiroSet.innerHTML += JsonMeusAcontecimentos[sorteador].texto
            destaquesPrimeiroSet.innerHTML += JsonMeusAcontecimentos[sorteador].img
        } else if (pontosKarasuno == 1 && pontosInarizaki == 0) {
            destaquesSegundoSet.innerHTML += JsonMeusAcontecimentos[sorteador].texto
            destaquesSegundoSet.innerHTML += JsonMeusAcontecimentos[sorteador].img
        } else if (pontosKarasuno == 0 && pontosInarizaki == 1) {
            destaquesSegundoSet.innerHTML += JsonMeusAcontecimentos[sorteador].texto
            destaquesSegundoSet.innerHTML += JsonMeusAcontecimentos[sorteador].img
        }
        // destaquesTerceiroSet.innerHTML += JsonMeusAcontecimentos[sorteador].texto
        // destaquesTerceiroSet.innerHTML += JsonMeusAcontecimentos[sorteador].img
    }
}