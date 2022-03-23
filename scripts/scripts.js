 var error_text;
 /**
 Функция определения корректности ввода
 */
function searchErrors(str)
{
    let mass = str.split(" ");
    if(a.length === 0 || b.length === 0)
    {
        error_text = "Массив не должен быть пустым";
        return false;
    }
    for(let i = 0; i < mass.length; i++)
    {
        if(!(mass[i][0] % 2 === 1 && (mass[i][1] >= 0 && mass[i][1] <= 9) && (mass[i][2] >= 'a' && mass[i][2] <= 'z') && mass[i].length === 3))
        {
            error_text = "Ошибка при вводе множества: " + mass[i] + ". Правильный формат ввода: jcb.";
            return false;
        }
    }
    return true;
}

/**
 *Основная функция для считования данных и расчета
 */
function main()
{
    a = document.getElementById("mass1").value;
    b = document.getElementById("mass2").value;

    //Проверка на ошибку
    if(searchErrors(a) && searchErrors(b))
    {
        // Получаем два множества из строк, сплитуем по пробелу
        let value_a = new Set(a.split(" "));
        let value_b = new Set(b.split(" "));
        //Объединяем два множества
        let unification = new Set([...value_a, ...value_b]);
        document.getElementById('unification').innerText = "Объединение: " + [...unification.values()] + "\n";
        //Пересечение двух множеств
        let intersection = new Set([...value_a].filter(x => value_b.has(x)));
        document.getElementById('intersection').innerText = "Пересечение: " + [...intersection.values()] + "\n";
        //Дополнение (Разница) A\B множест
        let difference = new Set([...value_a].filter(x => !value_b.has(x)));
        document.getElementById('difference').innerText = "Разница A/B: " + [...difference.values()] + "\n";
        //Дополнение (Разница) B\A множест
        let difference2 = new Set([...value_b].filter(x => !value_a.has(x)));
        document.getElementById('difference2').innerText = "Разница B/A: " + [...difference2.values()] + "\n";
        //Симметричная разница множест
        let union = new Set([...value_a, ...value_b]);
        let inters = new Set([...value_a].filter(x => value_b.has(x)));
        let symmetricDifference = new Set([...union].filter(x => !inters.has(x)));
        document.getElementById('symmetricDifference').innerText = "Симметричная разница: " + [...symmetricDifference.values()];
    }
    else
    {
        alert(error_text);
    }
}