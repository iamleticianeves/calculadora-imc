var idade = document.getElementById("idade");
var altura = document.getElementById("altura");
var peso = document.getElementById("peso");
var homem = document.getElementById("m");
var mulher = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];


function calculate(){
 
  if(idade.value=='' || altura.value=='' || peso.value=='' || (homem.checked==false && mulher.checked==false)){
    modal.style.display = "block";
    modalText.innerHTML = `Preencha todos os campos!`;

  }else{
    countIMC();
  }

}


function countIMC(){
  var p = [idade.value, altura.value, peso.value];
  if(homem.checked){
    p.push("homem");
  }else if(mulher.checked){
    p.push("mulher");
  }

  var imc = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
      
  var result = '';
  if(imc<18.5){
    result = 'abaixo do peso';
     }else if(18.5<=imc&&imc<=24.9){
    result = 'saudável';
     }else if(25<=imc&&imc<=29.9){
    result = 'acima do peso';
     }else if(30<=imc&&imc<=34.9){
    result = 'obeso(a)';
     }else if(35<=imc){
    result = 'extremamente obeso(a)';
     }



resultArea.style.display = "block";
document.querySelector(".comment").innerHTML = `Você está <span id="comment">${result}</span>`;
document.querySelector("#result").innerHTML = imc.toFixed(2);

}





// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}