function checkCashRegister(price, cash, cid) {

let currency = [
    ["ONE HUNDRED", 100], 
    ["TWENTY", 20], 
    ["TEN", 10], 
    ["FIVE", 5], 
    ["ONE", 1], 
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01]
    ];

  let differ = cash - price;
  const fixedDiffer = differ;
  let returnObj = {
    status: "",
    change: []
  }


  const cidReverse = [...cid].reverse();

  var totalCash = 0;
  for(let i = 0; i < cidReverse.length; i++) {
    totalCash += cidReverse[i][1];
  }
  let currentC = [...currency];

  for(let i = 0; i < currency.length; i++) {
    let returnChange = 0; 
    let nc = cidReverse[i][1] / currency[i][1];

      while(differ.toFixed(2) >= currency[i][1] && nc >= 1) {
        differ -= currency[i][1];
        returnChange += currency[i][1];
        nc--;

      }
        if(returnChange > 0) { 
          if(returnChange - Math.floor(returnChange) !== 0) 
          {currentC[i][1] = returnChange.toFixed(2)
          currentC[i][1] = parseFloat(currentC[i][1])} else {
            currentC[i][1]= returnChange;
          }

        } else {
          currentC[i][1] = returnChange;
        }
  }
  let sumCC = 0;
  for(let i = 0; i < currentC.length; i++) {
    sumCC += currentC[i][1];
  }
  
  if(totalCash < fixedDiffer || sumCC < fixedDiffer){
    returnObj.status = 'INSUFFICIENT_FUNDS';
    } else if (totalCash == fixedDiffer) {
      returnObj.status = 'CLOSED';
      returnObj.change = cid;
    } else {
      let resultFiltered =[];
      for(let a = 0; a < currentC.length; a++) {
        if(currentC[a][1] !== 0){
          resultFiltered.push(currentC[a]);  
        } 
        }
     returnObj.status = 'OPEN';
     returnObj.change = resultFiltered;
    }
     return returnObj;
 }
