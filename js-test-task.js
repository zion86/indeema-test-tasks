// 1. Створити пустий об’єкт без прототипу;
const obj = Object.create(null);
console.log('obj: ', obj);


// 2. Створити пустий масив довжиною 100500 елементів;
const arr = new Array(100500);
console.log('arr.length: ', arr.length);
/*
  const arr = [];
  arr.length = 100500;
*/


// 3. Дано масив чисел, потрібно створити функцію, яка поверне новий масив, який буде містити всі елементи крім елемента з вказаним індексом. Для прикладу, масив [1,2,3,4,5] та індекс 1, тоді результатом буде [1,3,4,5];
const notIncludeElem = (arr, arrIndex) => {
  const subArray = arr.filter((elem, i) => (i === arrIndex) ? false : true);

  return subArray;
};

const filteredArray = notIncludeElem([1, 2, 3, 4, 5], 1);
console.log('filteredArray: ', filteredArray);


// 4. Створити функцію, яка приймає один масив у якості аргументу та повертає булеве значення в залежності чи в неї передали пустий масив чи ні;
const isEmptyArray = (arr = []) => (arr.length !== 0) ? false : true;

const isEmptyArrayResult = isEmptyArray();
console.log('isEmptyArray: ', isEmptyArray());
console.log('isEmptyArray: ', isEmptyArray([1, 2]));


// 5. Створити функцію, яка приймає один об’єкт у якості аргументу та повертає булеве значення в залежності чи в неї передали пустий об’єкт чи ні;
const isEmptyObject = (obj = {}) => {
  if (Object.keys(obj).length === 0 && obj.constructor === Object) {
    return true;
  } else {
    return false;
  }
};

const isEmptyObjectResult = isEmptyObject({ role: 'front-end' });
console.log('isEmptyObject: ', isEmptyObject());
console.log('isEmptyObject: ', isEmptyObject({ role: 'front-end' }));


// 6. Створити функцію, яка об’єднує два масиви в один та поверне його в якості результату;
const mergeArrays = (arr1, arr2) => {
  const mergedArray = [...arr1, ...arr2];

  return mergedArray;
};

const mergeArrayResult = mergeArrays([1, 2, 3], [4, 5, 6]);
console.log('mergeArrays: ', mergeArrays([1, 2, 3], [4, 5, 6]));


// 7. Створити функцію, яка приймає один масив чисел у якості аргументу та повертає новий масив, який складається з елементів попереднього в степені 3. Для прикладу, на вході: [1, 2, 3] ⇒ [1, 8, 27];
const pow = (arr, power = 3) => {
  const [firstElem, ...restElems] = arr;

  const poweredArray = restElems.map((elem) => elem ** power);
  const result = [firstElem, ...poweredArray];

  return result;
};

const powResult = pow([1, 2, 3]);
console.log('pow: ', pow([1, 2, 3]));
console.log('pow: ', pow([1, 2, 3], 2));


// 8. Створити функцію, яка приймає один масив чисел у якості аргументу та повертає новий масив, який складається з непарних елементів вхідного масиву;
const addArray = (arr) => {
  const addedArray = arr.filter((elem) => elem % 2 !== 0);

  return addedArray;
};

const addArrayResult = addArray([1, 2, 3, 4, 5, 6, 7]);
console.log('addArray: ', addArray([1, 2, 3, 4, 5, 6, 7]));


// 9. Створити функцію, яка приймає один масив чисел у якості аргументу та повертає новий масив, який складається тільки з цілих елементів вхідного масиву; Для прикладу: [5, 3.14, 4.1, 10, 11, 20.1] ⇒ [5, 10, 11];
const integerArray = (arr) => {
  const intArray = arr.filter((elem) => (Number.isInteger(elem)) ? true : false);

  return intArray;
};

const integerArrayResult = integerArray([5, 3.14, 4.1, 10, 11, 20.1]);
console.log('integerArray: ', integerArray([5, 3.14, 4.1, 10, 11, 20.1]));


// 10. Дано стрічку “А довге сидіння підвищує ризик розвитку серцево-судинних захворювань.” Потрібно створити функцію, яка поверне нову стрічку, в якій кожне нове слово починатиметься з великої літери. Результатом виклику функції має стати: “А Довге Сидіння Підвищує Ризик Розвитку Серцево-судинних Захворювань.”
const capitalLetter = (string) => {
  const words = string.split(' ');

  const result = words.map((elem) => {
    const [capitalLetter, ...restChars] = elem;

    return [capitalLetter.toUpperCase(), ...restChars].join('');
  });

  return result.join(' ');
};

const capitalLetterResult = capitalLetter('А довге сидіння підвищує ризик розвитку серцево-судинних захворювань.');
console.log('capitalLetter: ', capitalLetter('А довге сидіння підвищує ризик розвитку серцево-судинних захворювань.'));


// display test result on page
const finalResult = [
  JSON.stringify(obj),
  arr.length,
  filteredArray,
  isEmptyArrayResult,
  isEmptyObjectResult,
  mergeArrayResult,
  powResult,
  addArrayResult,
  integerArrayResult,
  capitalLetterResult,
];

const ol = document.querySelector('ol');

finalResult.map((elem) => ol.insertAdjacentHTML('beforeend', `<li>${elem}</li>`));