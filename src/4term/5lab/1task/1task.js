const pathSource = "source/";

const artistsData = {
  aivazovcky: {
    name: "Айвазовский Иван Констатинович",
    portraits: [
      { src: pathSource + "Айвазовский.jpg", caption: "Автопортрет 1874г." },
      {
        src: pathSource + "Зимний_обоз_в_пути.jpg",
        caption: "Зимний обвоз в пути",
      },
      { src: pathSource + "9-вал.jpg", caption: "Девятый вал" },
    ],
  },
  davinci: {
    name: "Леонардо да Винчи",
    portraits: [
      {
        src: pathSource + "Леонардо да Винчи.jpg",
        caption: "Автопортрет 1512г.",
      },
      { src: pathSource + "Мона Лиза.png", caption: "Мона Лиза" },
      { src: pathSource + "Тайная вечеря.jpg", caption: "Тайная вечеря" },
    ],
  },
  shishkin: {
    name: "Шишкин Иван Иванович",
    portraits: [
      { src: pathSource + "Шишкин.jpg", caption: "Автопортрет 1873г." },
      {
        src: pathSource + "Утро в сосновом лесу.jpg",
        caption: "Утро в сосновом лесу",
      },
      { src: pathSource + "Корабельная_роща.jpg", caption: "Корабельная роща" },
    ],
  },
};

function showPage() {
  // Получаем данные из формы
  const artist = document.getElementById("artist").value;
  const caption = document.getElementById("caption").value;
  const background = document.querySelector('input[name="background"]:checked');
  const italic = document.getElementById("italic").checked;
  const underline = document.getElementById("underline").checked;
  const bold = document.getElementById("bold").checked;

  const bgFile = background ? background.value : "bg/bg16.jpg";

  // Получаем данные о выбранном художнике
  const artistData = artistsData[artist];

  // Формируем стили для текста
  let textStyle = [];
  if (italic) textStyle.push("italic");
  else textStyle.push("normal");

  if (bold) textStyle.push("bold");
  else textStyle.push("normal");

  const textDecoration = underline ? "underline" : "none";

  // Создаем новое окно
  const newWindow = window.open("", "", "width=700,height=600,scrollbars=yes");

  // Формируем HTML для нового окна
  let portraitsHTML = "";
  artistData.portraits.forEach((portrait) => {
    portraitsHTML += `
                    <div class="portrait-block">
                        <img src="${portrait.src}" alt="${portrait.caption}" class="portrait">
                        <p class="caption">${portrait.caption}</p>
                    </div>
                `;
  });

  const htmlContent = `
                <!DOCTYPE html>
                <html lang="ru">
                <head>
                    <meta charset="UTF-8">
                    <title>${artistData.name}</title>
                    <style>
                        body {
                            background-image: url('${bgFile}');
                            background-size: cover;
                            background-attachment: fixed;
                            font-family: Georgia, serif;
                            padding: 20px;
                            margin: 0;
                        }
                        .container {
                            background-color: rgba(255, 255, 255, 0.9);
                            padding: 30px;
                            border-radius: 10px;
                            max-width: 650px;
                            margin: 0 auto;
                        }
                        h1 {
                            color: #8B0000;
                            text-align: center;
                            margin-bottom: 10px;
                        }
                        .main-caption {
                            text-align: center;
                            font-size: 16px;
                            margin-bottom: 30px;
                            padding: 15px;
                            background-color: #f0f0f0;
                            border-radius: 5px;
                            font-style: ${textStyle[0]};
                            font-weight: ${textStyle[1]};
                            text-decoration: ${textDecoration};
                        }
                        .portrait-block {
                            margin-bottom: 25px;
                            text-align: center;
                            padding: 15px;
                            background-color: #fff;
                            border-radius: 8px;
                            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                        }
                        .portrait {
                            max-width: 300px;
                            height: auto;
                            border: 3px solid #8B0000;
                            border-radius: 5px;
                        }
                        .caption {
                            margin-top: 10px;
                            font-style: italic;
                            color: #555;
                            font-size: 14px;
                        }
                        hr {
                            border: none;
                            border-top: 2px solid #8B0000;
                            margin: 20px 0;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <h1>${artistData.name}</h1>
                        <hr>
                        <div class="main-caption">${caption}</div>
                        <hr>
                        <h2 style="text-align: center; color: #333;">Портреты и работы</h2>
                        ${portraitsHTML}
                    </div>
                </body>
                </html>
            `;

  // Открываем документ для записи, записываем контент и закрываем
  newWindow.document.open();
  newWindow.document.write(htmlContent);
  newWindow.document.close();
}
