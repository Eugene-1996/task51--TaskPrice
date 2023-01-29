
function mango(quantity, price){
    let cost = 0;
    cost = (Math.ceil(quantity /3)*2) *price

    return cost
  }

  console.log(mango(9, 2))