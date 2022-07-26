/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

let btn = document.querySelector(".btn");

let count = 0;

btn.addEventListener("click", function () {
  count += 1;
  document.querySelector(".btn__state").textContent = count;
});
