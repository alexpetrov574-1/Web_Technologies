<?php
function CreateHTMLCodeOfSheet($str1, $str2, $str3, $str4)
{
    echo "&lt;td&gt;$str1&lt;/td&gt;<br/>";
    echo "&lt;/tr&gt;<br/>";
    echo "&lt;tr&gt;<br/>";
    echo "&lt;td&gt;$str2&lt;/td&gt;<br/>";
    echo "&lt;/tr&gt;<br/>";
    echo "&lt;tr&gt;<br/>";
    echo "&lt;td&gt;$str3&lt;/td&gt;<br/>";
    echo "&lt;/tr&gt;<br/>";
    echo "&lt;tr&gt;";
    echo "&lt;td&gt;$str4&lt;/td&gt;<br/>";
    echo "&lt;/tr&gt;<br/>";
}
$string1 = "";
$string2 = "";
$string3 = "";
$string4 = "";
if(isset($_POST["string1"]))
{
    $string1 = $_POST["string1"];
}
if(isset($_POST["string2"]))
{
    $string2 = $_POST["string2"];
}
if(isset($_POST["string3"]))
{
    $string3 = $_POST["string3"];
}
if(isset($_POST["string4"]))
{
    $string4 = $_POST["string4"];
}
echo "Входные данные:<br/>";
echo "string1 = $string1<br/>";
echo "string2 = $string2<br/>";
echo "string3 = $string3<br/>";
echo "string4 = $string4<br/>";
echo "<br/>";
echo "Выход:<br/>";
CreateHTMLCodeOfSheet($string1, $string2, $string3, $string4);
?>