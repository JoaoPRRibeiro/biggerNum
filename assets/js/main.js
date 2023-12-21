function biggerNum() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const text = document.getElementById("text");

  if (num1 > num2) {
    text.innerText = `${num1} bigger than ${num2}`;
  } else if (num2 > num1) {
    text.innerText = `${num2} bigger than ${num1}`;
  } else {
    text.innerText = `The numbers are equal`;
  }

  document.getElementById("num1").value = ``;
  document.getElementById("num2").value = ``;
}
