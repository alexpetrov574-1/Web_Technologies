function showImage(animalId, imgSrc) {
  let imgCell = document.getElementById("img" + animalId);
  if (imgSrc) {
    imgCell.innerHTML = '<img src="' + imgSrc + '" alt="' + animalId + '">';
  } else {
    imgCell.innerHTML = "";
  }
}
