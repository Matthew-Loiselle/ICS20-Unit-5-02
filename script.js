document.getElementById('firstbutton').addEventListener('click', DisplayMessage)

function DisplayMessage () {
  alert('What did I just tell you?')
}

document.getElementById('button2').addEventListener('click', changetext)

function changetext () {
  document.getElementById('text').style.fontSize = '300%'
  document.getElementById('text').style.fontFamily = 'Arial, Helvetica, sans-serif'
  document.getElementById('text').style.backgroundColor = 'red'
}