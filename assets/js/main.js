function biggerNum() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const text = document.getElementById("text");

  if (num1 > num2) {
    text.innerText = `${num1} maior que ${num2}`;
  } else if (num2 > num1) {
    text.innerText = `${num2} maior que ${num1}`;
  } else {
    text.innerText = `Os numeros sao iguais`;
  }
}
