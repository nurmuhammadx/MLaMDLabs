let errorMessage = "";
let submit = document.querySelector(".button");
function multiplyMatrixBin(A, B) // Перемножение бинарных матриц
{
    let C = [];
    for (let i = 0; i < 4; i++) {
        C[i] = [];
    }
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let t = 0;
            for (let k = 0; k < 4; k++) {
                t += A[j][k] * B[k][i];
            }
            C[j][i] = t % 2;
        }
    }
    return C;
}
// Функция проверки валидости
function isValidate(arr) {
    errorMessage = "";
    if (arr.length != 4) {
        errorMessage = "Матрица должна содержать 4 строки!";
    }
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length != 4) {
            errorMessage = "Матрица должна содержать 4 столбца!";
        }
        for(let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] != '1' && arr[i][j] != '0') {
                errorMessage = "Введенная матрица должна состоять из 0 и 1!";
            }
        }
    }
    if (arr[0][0] == "") {
        errorMessage = "Массив не должен быть пустым!";
    }
    if (errorMessage) {
        return false;
    }else {
        return true;
    }
}
// Основная функция проверки свойств отношений
submit.onclick = function() {
    let reflexivity = true;
    let symmetry = true;
    let antisymmetry = true;
    let transitivity = true;
    let matrixArrayValue = document.querySelector(".enter").value.split("\n");
    for(let i = 0; i < matrixArrayValue.length; i++) {                     // Считываем двумерный массив, удаляя лишние пробелы
        matrixArrayValue[i] = matrixArrayValue[i].replace(/ +/g, ' ').trim();
        matrixArrayValue[i] = matrixArrayValue[i].split(" ");
    }
    if (isValidate(matrixArrayValue)) {
        let tempMatrix = multiplyMatrixBin(matrixArrayValue, matrixArrayValue);
        for(let i = 0; i < 4; i++) {
            for(let j = 0; j < 4; j++) {
                if (!(!((matrixArrayValue[i][j] == 1) && (i != j)) || matrixArrayValue[j][i] == 0)) {
                    antisymmetry = false;
                }
                if (i == j) {
                    if (matrixArrayValue[i][j] == 0) {
                        reflexivity = false;
                    }
                }else {
                    if(matrixArrayValue[i][j] != matrixArrayValue[j][i]) {
                        symmetry = false;
                    }
                }
                if (matrixArrayValue[i][j] == 0 && tempMatrix[i][j] == 1) {
                    transitivity = false;
                }
            }
        }
        if(reflexivity) {
            document.querySelector("#reflexivity").innerHTML = "Данная матрица рефлексивна";
        }else {
            document.querySelector("#reflexivity").innerHTML = "Данная матрица не рефлексивна";
        }
        if (antisymmetry) {
            document.querySelector("#antisymmetry").innerHTML = "Данная матрица кососимметрична";
        }else {
            document.querySelector("#antisymmetry").innerHTML = "Данная матрица не кососимметрична";
        }
        if(symmetry) {
            document.querySelector("#symmetry").innerHTML = "Данная матрица симметрична";
        }else {
            document.querySelector("#symmetry").innerHTML = "Данная матрица не симметрична";
        }
        if(transitivity) {
            document.querySelector("#transitivity").innerHTML = "Данная матрица транзитивна";
        }else {
            document.querySelector("#transitivity").innerHTML = "Данная матрица не транзитивна";
        }
    }else {
        alert(errorMessage);
    }
}
