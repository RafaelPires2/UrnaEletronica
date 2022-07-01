const candidate = {
    Lula: {name:  'LULADRÃO', img: './image/lula1000x600.png', id: 157},
    Bolso: {name:  'BOLSOGADO', img: './image/bolso1000x600.png', id: 171},
    Branco: {name:  'BRANCO', img: 'https://tmssl.akamaized.net/images/foto/galerie/branco-brazil-1990-1628520340-68576.jpg?lm=1628520354', id: 'OOO'},
    NA: {name:  'Ladrão não encontrado', img: './image/na1000x600.png', id: null},
    Fim: {name: '', img:'./image/fim1000x600.png'},
    CandidatoValido: {name: 'Digite um candidato válido', img:'./image/1000x600.png'}
  }
TotalVotos()

function displaynum(n1) {
  const value = urna.text1.value + n1

    validate(value) 
    console.log('displaynum', value)
}
 function changeCandidate(candidate){
    const candidateElement = document.querySelector('.nomeCandidato');
    const candidateImageElement = document.querySelector('.imagem');
    candidateImageElement.setAttribute('src', candidate.img);
    candidateElement.innerText = candidate.name;
 }

 function validate(value){

    if (value.length <= 3) { //cria uma validação enquanto menor ou igual a 3 permite entrada de valor
        urna.text1.value = value;
      }
      if(value.length == 3){
      
        if (document.urna.text1.value == candidate.Lula.id) {
          changeCandidate(candidate.Lula);
    
        } else if (document.urna.text1.value == candidate.Bolso.id) {
          changeCandidate(candidate.Bolso);
        } else if (document.urna.text1.value == candidate.Branco.id) {
            changeCandidate(candidate.Branco);
        } else {
          changeCandidate(candidate.NA);
        }
      }

 }

 function confirmaCandidate(){	
    console.log('confirma', document.urna.text1.value)
    if (document.urna.text1.value == candidate.Lula.id || 
        document.urna.text1.value == candidate.Bolso.id || 
        document.urna.text1.value == candidate.Branco.id)
         {

        changeCandidate(candidate.Fim)
        document.urna.text1.value = ""

    } else {
        changeCandidate(candidate.CandidatoValido)
    }   
    
 }


  function TotalVotos() {
    let votosLula = document.querySelector('.TVNumLula').innerText;
    let votosBolso = document.querySelector('.TVNumBolso').innerText;
    let resultado = parseInt(votosLula) + parseInt(votosBolso);
    document.querySelector('.totalVotosNum').innerHTML = resultado;

    // let PorcentLula = document.querySelector('.PorcentLula').innerText;
    // let PorcentBolso = document.querySelector('.PorcentBolso').innerText;
    let resultLula = votosLula / resultado;
    document.querySelector('.PorcentLula').innerHTML = resultLula.toFixed(2)*100 + "%"

    let resultBolso = votosBolso / resultado;
    document.querySelector('.PorcentBolso').innerHTML = resultBolso.toFixed(2)*100 + "%";
    
  
  }
  


// salvar cookies 
// lista de candidatos
// resultados - quantidade de votos e %
// firebase - guardar dados 