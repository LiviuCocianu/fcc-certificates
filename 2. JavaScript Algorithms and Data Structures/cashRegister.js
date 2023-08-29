const currencyMap = {
  "ONE HUNDRED": 100,
  "TWENTY": 20,
  "TEN": 10,
  "FIVE": 5,
  "ONE": 1,
  "QUARTER": 0.25,
  "DIME": 0.1,
  "NICKEL": 0.05,
  "PENNY": 0.01
}

const vals = Object.values(currencyMap)

function checkCashRegister(price, cash, cid) {
  let diff = cash - price

  const cidMap = {}
  const changeMap = {}
  const available = (map) => {
    return Object.values(map).reduce((acc, cr) => acc + cr)
  }

  // Transform CID array into object
  for(let pair of cid.toReversed()) {
    const [unit, amount] = pair

    if(!cidMap[unit]) cidMap[unit] = amount
    else cidMap[unit] += amount
  }

  // The cash in CID was just enough to give, so we ran out
  if(diff == available(cidMap)) return {status: "CLOSED", change: cid}

  // Populate changeMap with available cash from CID
  for(let [unit, amount] of Object.entries(cidMap)) {
    while(currencyMap[unit] <= diff && currencyMap[unit] <= amount) {
      if(!changeMap[unit]) changeMap[unit] = currencyMap[unit]
      else changeMap[unit] += currencyMap[unit]
      // We round to 2 digits so no precision is lost
      diff = Math.round((diff - currencyMap[unit]) * 100) / 100
      amount = Math.round((amount - currencyMap[unit]) * 100) / 100
    }
  }

  diff = cash - price

  // Do we have enough change to give?
  if(diff > available(changeMap)) {
    // .. we don't
    return { status: "INSUFFICIENT_FUNDS", change: []}
  }

  // .. we do!
  return { status: "OPEN", change: Object.entries(changeMap)}
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])