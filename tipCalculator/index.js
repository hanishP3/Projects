const billamount = document.querySelector("#billamount");
const tipamount = document.querySelector("#tipamount");
const calbtn = document.querySelector("#calbtn");
const tip = document.querySelector("#tip");
const total = document.querySelector('#total')
calbtn.addEventListener("click", () => {
  let varbillamount = Number(billamount.value);
  let vartipamount = Number(tipamount.value);

  if (varbillamount > 0 && vartipamount >= 0) {
    let tipamount = varbillamount * (vartipamount / 100);
    tip.innerHTML = tipamount.toFixed(2);
    total.innerHTML = (varbillamount + tipamount).toFixed(2);
    console.log(total.innerHTML);
  }

  else{
    total.innerHTML = 'Invalid Input'
  }

});
