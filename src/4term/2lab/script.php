<?php
function UploadImage($file)
{
    $max_image_width = 380;
    $max_image_height = 600;
    $max_image_size = 64 * 1024;
    $valid_types = array("gif", "jpg", "png", "jpeg");

    if (isset($file))
    {
        if (is_uploaded_file($file["tmp_name"]))
        {
            $filename = $file["tmp_name"];
            $ext = substr($file["name"], 1 + 
            strrpos($file["name"], "."));
            if (filesize($filename) > $max_image_size)
            {
                echo "Ошибка: размер файла > 64 K";
            }
            elseif (!in_array($ext, $valid_types))
            {
                echo "Ошибка: Некорректный тип файла";
            }
            else
            {
                $size = GetImageSize($filename);
                if (($size) && 
                ($size[0] < $max_image_width) && 
                ($size[1] < $max_image_height))
                {
                    $upload_dir = __DIR__ . "/upload/";

                    if (!file_exists($upload_dir)) {
                        mkdir($upload_dir, 0777, true);
                    }

                    $safe_name = time() . "_" . preg_replace("/[^a-zA-Z0-9.-]/", "", $file['name']);
                    $destination_path = $upload_dir . $safe_name;
                    if (@move_uploaded_file($filename, $destination_path))
                    {
                        echo "Файл успешно загружен";
                    }
                    else
                    {
                        echo "Ошибка: не удалось переместить файл. Путь: " . $destination_path . "<br/>";
                    }
                }
                else
                {
                    echo "Ошибка: неверные свойства изображений.";
                }
            }
        }
        else
        {
            echo "Ошибка: пустой файл.";
        }
    }
    else
    {
        echo '
            <form enctype="multipart/form-data" method="post">
            <input type="hidden" name="MAX_FILE_SIZE" value="64000">
            Send this file: <input name="userfile" type="file">
            <input type="submit" value="Send File">
            </form>';
    }
}

$login="";
$password="";
$fullName="";
$age="";
$address="";

if(isset($_POST["login"]) && isset($_POST["password"]) && isset($_POST["full_name"])
    && isset($_POST["age"]) && isset($_POST["home_address"]))
{
    $login = $_POST["login"];
    $password = $_POST["password"];
    $fullName = $_POST["full_name"];
    $age = $_POST["age"];
    $address = $_POST["home_address"];
}

echo "Введены данные:<br/>";
echo "<br/>";
echo "Логин(почта): $login<br/>";
echo "Пароль: $password<br/>";
echo "ФИО: $fullName<br/>";
echo "Возраст: $age лет<br/>";
echo "Адрес: $address<br/>";
echo "Сохранены в файл $login.txt<br/>";

echo "<br/>";
echo "Загрузка изображения<br/>";
UploadImage($_FILES["photo"]);

$fp = fopen("$login.txt", "w") or die("Не удалось открыть файл!");
fputs($fp, "Логин(почта): $login
Пароль: $password
ФИО: $fullName
Возраст: $age лет
Адрес: $address");
fclose($fp);
?>