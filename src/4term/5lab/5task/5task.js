let x = 0;
let y = 0;
let stepY = 5;
let stepX = 0;
let direction = "down";
let bgImg, moveImg;
let bgWidth, bgHeight, moveWidth, moveHeight;

function move() {
  // Движение по вертикали
  if (direction === "down") {
    y += stepY;
    // Если достигли нижней границы
    if (y >= bgHeight - moveHeight) {
      direction = "right";
      x += stepX;
    }
  } else if (direction === "up") {
    y -= stepY;
    // Если достигли верхней границы
    if (y <= 0) {
      direction = "right";
      x += stepX;
    }
  } else if (direction === "right") {
    // Движение вправо на ширину рисунка
    x += moveWidth;
    stepX = 0;
    // Проверяем, не вышли ли за правую границу
    if (x >= bgWidth - moveWidth) {
      // Достигли правой границы фона
      x = bgWidth - moveWidth;
      document.getElementById("moving").style.left = x + "px";
      return;
    }
    direction = "down";
    stepX = 0;
  }

  // Устанавливаем новые координаты
  let movingImg = document.getElementById("moving");
  movingImg.style.left = x + "px";
  movingImg.style.top = y + "px";

  // Меняем направление на противоположное по вертикали при достижении границ
  if (direction === "down" && y >= bgHeight - moveHeight) {
    direction = "up";
  } else if (direction === "up" && y <= 0) {
    direction = "down";
  }

  // Продолжаем движение
  setTimeout("move()", 50);
}

// Инициализация
window.onload = function () {
  bgImg = document.getElementById("background");
  moveImg = document.getElementById("moving");
  bgWidth = bgImg.width;
  bgHeight = bgImg.height;
  moveWidth = moveImg.width;
  moveHeight = moveImg.height;

  // Запускаем движение
  move();
};
