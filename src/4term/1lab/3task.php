<?php
echo "Таблица умножения:<br/>";
echo "<table>";
echo "<tr>";
echo "<th>x</th>";
for ($i = 1; $i <= 10; $i++)
{
    echo "<th>$i</th>";
}
echo "</tr>";
for ($i = 1; $i <= 10; $i++)
{
    echo "<tr>";
    echo "<th>$i</th>";
    for ($j = 1; $j <= 10; $j++)
    {
        $result = $i * $j;
        echo "<td>$result</td>";
    }
    echo "</tr>";
}
echo "</table>";
echo "</div>";
?>