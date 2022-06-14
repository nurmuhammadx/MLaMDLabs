<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Лабораторная работа 2</title>
    <link rel="stylesheet" href="/styles/mainStyle.css">
    <link rel="stylesheet" href="/styles/lab2.css">
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Rubik+Wet+Paint&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Pacific&family=Rubik+Wet+Paint&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
</head>
<body>
<div class="content">
    <h1 class="lab">Лабораторная работа №2</h1>
    <form method="" action="" class="form" onsubmit="return false;">
        <textarea class="enter" placeholder="Введите матрицу 4х4" form="form" name="enter"></textarea>
        <input type="submit" class="button" value="Рассчитать">
    </form>
    <h2 class="by">Результаты:</h2>
    <div class="results">
        <span id="reflexivity"></span>
        <span id="symmetry"></span>
        <span id="transitivity"></span>
        <span id="antisymmetry"></span>
    </div>
</body>
<script type="text/javascript" src="/scripts/lab2.js"></script>
</html>


