const firstPriceNode = document.querySelector(".first-price");
const finalPriceNode = document.querySelector(".final-price");
const finalPriceNodeAzn = document.querySelector(".final-price-azn");
const selectShopNode = document.querySelector(".shop");
const resultButtonEbay = document.querySelector(".result-eBay");
const resultButtonCompUniverse = document.querySelector(".result-CompUniverse");
const resultButtonConvertAzn = document.querySelector(".result-AZN");
const resultButtonAmazon = document.querySelector(".result-Amazon")


document.querySelector(".dark-mode").onclick = function () {
  document.querySelector("body").classList.toggle("body-dark");
  document.querySelector(".container").classList.toggle("container2");
};

function PriceAfterShippingEbay() {
  if (firstPriceNode.value > 300) {
    let Tax = (parseInt(firstPriceNode.value) - 292) * 1.36 + 300;
    finalPriceNode.value = Tax  + ' USD';
    console.log(Tax);
  } else {
    let Tax2 = parseInt(firstPriceNode.value) + 8;
    finalPriceNode.value = Tax2  + ' USD';
  }
}

function PriceAfterShippingCompUniverse() {
  if (firstPriceNode.value > 300) {
    let Tax = (parseInt(firstPriceNode.value) - 250) * 1.36 + 300;
    finalPriceNode.value = Tax  + ' USD';
    console.log(Tax);
  } else {
    let Tax2 = parseInt(firstPriceNode.value) + 50;
    finalPriceNode.value = Tax2  + ' USD';
  }
}

function PriceAfterShippingAmazon() {
    if (firstPriceNode.value > 300) {
      let Tax = (parseInt(firstPriceNode.value) - 292) * 1.36 + 300;
      finalPriceNode.value = Tax  + ' USD';
      console.log(Tax);
    } else {
      let Tax2 = parseInt(firstPriceNode.value) + 8;
      finalPriceNode.value = Tax2  + ' USD';
    }
  }
  

function ConvertToAzn() {
  let ConvertAzn = parseInt(finalPriceNode.value) * 1.7;
  finalPriceNode.value = ConvertAzn  + ' AZN';
}

//==========================================================================

resultButtonEbay.addEventListener("click", () => {
  return PriceAfterShippingEbay();
});

resultButtonCompUniverse.addEventListener("click", () => {
  return PriceAfterShippingCompUniverse();
});

resultButtonConvertAzn.addEventListener("click", () => {
  return ConvertToAzn();
});

resultButtonAmazon.addEventListener("click", () => {
    return PriceAfterShippingAmazon();
  });
