

//nameFunction --------------------------------------------------------------------------------------
console.log("Name Function -----------------------------")
const orders = 10
const cash = 500

function jam_Computation (orders,cash) {
    const price = [40,100]
    const amoutSold = (price[0] * (orders % 3)) + (price[1] * Math.trunc(orders / 3))
    const change = cash - amoutSold
    
    let vprompt = (cash < amoutSold) ? "Insufficient Funds" : "Change: " + change
    return vprompt
} 
console.log(jam_Computation(orders,cash))
console.log(" ")

//arrowFunction--------------------------------------------------------------------------------------
console.log("Arrow Function ----------------------------")
const orders1 = 8
const cash1 = 500

const jam_computation_af = (orders,cash) =>{
    const price = [40,100]
    const vamtsld = (price[0] * (orders % 3)) + (price[1] * Math.trunc(orders / 3))
    const change = cash - vamtsld
    
    let vprompt = (cash < vamtsld) ? "Insufficient Funds" : "Change: " + change
    return vprompt
}
console.log(jam_computation_af(orders1,cash1))
console.log(" ")

//recursiveFunction----------------------------------------------------------------------------------
console.log("Recursive Function ----------------------------")
function meltdown(num) {
    if (num === 0) {
      console.log("commence Meltdown!");
    } else {
      console.log(num);
      meltdown(num - 1);
    }
  }
  meltdown(5);