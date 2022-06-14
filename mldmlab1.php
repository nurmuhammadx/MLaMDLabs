<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Лабораторная работа 1</title>
    <link rel="stylesheet" href="/styles/mainStyle.css">
    <link rel="stylesheet" href="/styles/lab1.css">
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Rubik+Wet+Paint&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Pacific&family=Rubik+Wet+Paint&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
    <script type="text/javascript" src="/scripts/lab1.js"></script>
</head>
<body>
<div class="container-lab">
    <h1>Лабораторная работа №1</h1>
    <form>
        <table>
            <tr>
                <td><input type="text" id="mass1" class="decor" placeholder="Введите первое множество..."/></td>
            </tr>
            <tr>
                <td><input type="text" id="mass2" class="decor" placeholder="Введите второе множество..."/></td>
            </tr>
        </table>
    </form>
    <input type="button"  value="Сделать расчет" class="btn" onclick="main();"/>
    <h3 class="text-h3">↓Результат выполнение операции↓</h3>
    <div class="block-result">
        <span id="unification"></span>
        <span id="intersection"></span>
        <span id="difference"></span>
        <span id="difference2"></span>
        <span id="symmetricDifference"></span>
    </div>
</div>
</body>
</html>

