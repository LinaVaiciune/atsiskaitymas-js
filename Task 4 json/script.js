/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

async function fetchData() {
  const response = await fetch("./cars.json");
  const data = await response.json();
  console.log(data);
}

fetchData();

const carCard = (data) => {
  const brand = document.createElement("h3");
  intro.innerText = `${data.brand}`;

  const models = document.createElement("h4");
  contacts.innerText = data.models;

  const carCard = document.querySelector("output");
  carCard.append(img, intro, contacts);
  document.body.append(carCard);
};
