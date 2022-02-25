// ejercicio 1
const devolverMaxMin = (numbers) => {
  let maxAndMin = [];
  maxAndMin.push(Math.max(...numbers));
  maxAndMin.push(Math.min(...numbers));
  return maxAndMin;
};

// ejercicio 2

const devolverCantCar = (string, car) => {
  let strToArr = string.split("");
  let contador = 0;
  for (let i = 0; i < strToArr.length; i++) {
    if (strToArr[i] === car) {
      contador++;
    }
  }
  return contador;
};

// ejercico numero 3
const cleanArray = (data) => {
  let stringsInsideArr = [];
  for (let i = 0; i < data.length; i++)
    if (typeof data[i] === "string") {
      stringsInsideArr.push(data[i]);
    }
  return stringsInsideArr;
};

// ejercicio numero 4

function countVowel(str) {
  const count = str.match(/[aeiou]/gi).length;

  return count;
}

// ejercicio numero 5

const contarVocales = (word) => {
  let vocals = word.replace(/[aeiou]/g, "");
  return vocals;
};

// ejercicio numero 6
const deleteDuplicated = (arrayOri) => {
  let arrayRes = [];
  arrayOri.forEach((o) => {
    let exist = false;

    arrayRes.forEach((r) => {
      if (o === r) {
        exist = true;
      }
    });

    if (exist === false) arrayRes.push(o);
  });

  return arrayRes;
};
console.log(deleteDuplicated([1, 2, 3, 4, 3]));
