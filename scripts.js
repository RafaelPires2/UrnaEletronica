const candidate = {
    Lula: {name:  'Luladrão', img: 'https://www.midianews.com.br//storage/webdisco/2016/01/30/438x291/310ba3d678232bf89ebae7f732cdbf98.jpg', id: 157},
    Bolso: {name:  'Bolsogado', img: 'https://www.parlamentopiaui.com.br/uploads/imagens/bolsonaro-rindo%7C1605022277.jpg', id: 171},
    Branco: {name:  'Branco', img: 'https://tmssl.akamaized.net/images/foto/galerie/branco-brazil-1990-1628520340-68576.jpg?lm=1628520354', id: 'OOO'},
    NA: {name:  'Ladrão não encontrado', img: 'https://static.todamateria.com.br/upload/ba/nd/bandeira-do-brasil-og.jpg', id: null},
    Fim: {name: '', img:'https://imagens.brasil.elpais.com/resizer/udDC9xw8G4MLxEO4lbjcrTkpZIM=/980x980/cloudfront-eu-central-1.images.arcpublishing.com/prisa/7XAYMNZ56VHQ3EP3L6LVO6CL7M.jpg'},
    CandidatoValido: {name: 'Digite um candidato válido', img:''}
  }


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


// salvar cookies 
// lista de candidatos
// resultados - quantidade de votos e %
// firebase - guardar dados 