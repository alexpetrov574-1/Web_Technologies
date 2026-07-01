let isRed = true;

function changeColor() {
  let block = document.getElementById("colorBlock");
  let btn = document.getElementById("changeBtn");

  if (isRed) {
    block.style.backgroundColor = "lightblue";
    btn.value = "Изменить на красный";
    btn.innerHTML = "Изменить на красный";
  } else {
    block.style.backgroundColor = "red";
    btn.value = "Изменить на голубой";
    btn.innerHTML = "Изменить на голубой";
  }
  isRed = !isRed;
}
