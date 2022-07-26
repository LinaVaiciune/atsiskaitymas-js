/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: "audi",
  model: "A6",
  year: 2005,
  color: "white",
};

const showObjectKeys = Object.keys(audi);

console.log(showObjectKeys);

// papildomai:

const showObjectKeysValues = Object.values(audi);

console.log(showObjectKeysValues);

const showObjectKeysEntries = Object.entries(audi);

console.log(showObjectKeysEntries);
