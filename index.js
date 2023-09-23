var SetaDireita = window.document.getElementById('seta-direita')
var SetaEsquerda = window.document.getElementById('seta-esquerda')

var Leonardo = window.document.getElementById('Leonardo')
var Samantha = window.document.getElementById('Samantha')
var Bruna = window.document.getElementById('Bruna')

function RolarParaDireita() {
  Leonardo.style = 'display: none'
  Bruna.style = 'display:flex'
  SetaEsquerda.style = 'display:flex; margin-top: 55px'
  SetaDireita.style = 'display:none'
}

function RolarParaEsquerda() {
  Leonardo.style = 'display:flex'
  Bruna.style = 'display:none'

  SetaDireita.style = 'display:flex; margin-top: 55px'
  SetaEsquerda.style = 'display: none'
}
