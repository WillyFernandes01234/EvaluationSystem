function corrigir() {
  document.querySelector(".hide").style.display = "block";
  let camText = document.getElementById("texto").value;
  document.getElementById("nome").innerHTML = "Nome: " + camText;
  let camSel = document.getElementById("selecao").value;
  document.getElementById("turma").innerHTML = "Turma: " + camSel;
  let camTextArea = document.getElementById("texto2").value;
  document.getElementById("questao01").innerHTML = "Questão 01: " + camTextArea;
  let camCheckOct = document.getElementById("check1");
  let camCheckBin = document.getElementById("check2");
  let camCheckDec = document.getElementById("check3");
  let camCheckHex = document.getElementById("check4");
  if (camCheckOct.checked) {
    document.getElementById("questao02.1").innerHTML = "Questão 02: Sistema Octal";
  }
  if (camCheckBin.checked) {
    document.getElementById("questao02.2").innerHTML = "Questão 02: Sistema Binário";
  }
  if (camCheckDec.checked) {
    document.getElementById("questao02.3").innerHTML = "Questão 02: Sistema Decimal";
  }
  if (camCheckHex.checked) {
    document.getElementById("questao02.4").innerHTML = "Questão 02: Algarismos Hexadecimal";
  }
  if (document.getElementById("isopropilico").checked) {
    document.getElementById("questao03").innerHTML = "Questão 03: Álcool Isopropílico";
  } else if (document.getElementById("contato").checked) {
    document.getElementById("questao03").innerHTML = "Questão 03: Limpa Contato";
  } else if (document.getElementById("alcool").checked) {
    document.getElementById("questao03").innerHTML = "Questão 03: Álcool 70%";
  } else if (document.getElementById("agua").checked) {
    document.getElementById("questao03").innerHTML = "Questão 03: Água";
  }
  if (document.getElementById("true").checked) {
    document.getElementById("questao04").innerHTML = "Questão 04: Verdadeira";
  } else if (document.getElementById("false").checked) {
    document.getElementById("questao04").innerHTML = "Questão 04: Falsa";
  }
}

