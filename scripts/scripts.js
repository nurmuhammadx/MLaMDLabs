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

    if(searchErrors(a) && searchErrors(b))
    {
        // Получаем два множества из строк, сплитуем по пробелу
        const first_set = new Set(a.split(" "));
        const second_set = new Set(b.split(" "));
        //Объединяем два множества
        const unification = new Set([...first_set, ...second_set]);
        document.getElementById('unification').innerHTML = "Объединение: " + [...unification.values()];
        //
        let intersection = new Set([...first_set].filter(x => second_set.has(x)));
        document.getElementById('intersection').innerHTML = "Пересечение: " + [...intersection.values()];
    }
    else
    {
        alert(error_text);
    }




















}