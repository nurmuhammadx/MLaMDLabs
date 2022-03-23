<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Лабораторная работа 1</title>
    <link rel="stylesheet" href="/styles/style.css">
    <script type="text/javascript" src="/scripts/scripts.js"></script>
</head>
<body>
<h1>Лабораторная работа №1</h1>

<form method="" action="">
    <table>
        <tr>
            <td>Первое множество</td>
            <td><input type="text" id="mass1" value="" /></td>
        </tr>
        <tr>
            <td>Второе множество</td>
            <td><input type="text" id="mass2" value="" /></td>
        </tr>
        <tr>
            <td><input type="button"  value="Сделать расчет" onclick="main();"/></td>
        </tr>
    </table>
</form>

<h3>Результат выполнение операции:</h3>

<div>
    <span id="unification"></span>
    <span id="intersection"></span>
    <span id="difference"></span>
    <span id="difference2"></span>
    <span id="symmetricDifference"></span>
</div>

</body>
</html>

