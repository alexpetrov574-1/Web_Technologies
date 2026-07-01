function toggleImage(imgNum) {
  let img = document.getElementById("img" + imgNum);
  let btn = document.getElementById("btn" + imgNum);

  if (img.style.display === "none") {
    img.style.display = "block";
    btn.innerHTML = "Спрячь меня";
    btn.value = "Спрячь меня";
  } else {
    img.style.display = "none";
    btn.innerHTML = "Покажи меня";
    btn.value = "Покажи меня";
  }
}
