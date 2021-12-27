/*************************************
 * Challenge 1: engineer(array)
 *
 * - Accepts an array
 * - Logs every element of the array with "eng" next to it
 * eg: engineer(["zainab","omar","zahraa"]) => eng.zainab, eng.omar, eng.zahraa
 ************************************/
 const engineer = (array) =>{
  array.forEach(element => {
      console.log(`eng.${element}`)
  });
};
engineer(["Ahmad"]);

/*************************************
 * Challenge 2: toKWD(wallets)
 *
 * - Write a function named toKWD
 * - Accepts an array of wallets
 *   in USD
 * - Returns an array of wallets
 *   in KWD
 *
 * The conversion is:
 *   kwd = usd * 0.30
 ************************************/
const toKWD = function (wallet){
  let inUSD = wallet.map(element => (element * 0.30));

};
toKWD([99,124,50]);
console.log(toKWD[99,124,50]);

/**************************************
 * Challenge 3: richestWallet(wallets,maxAmount)
 *
 * - Write a function named richestWallet
 * - Accepts an array of wallets
 * - Accepts a max amount
 * - Returns an array of wallets
 *   that exceed the maxAmount
 ***************************************/
 const richestWallets= function (wallets, maxAmount) {
  let walletMaxAmount =wallets.filter(element => element > maxAmount);
  return walletMaxAmount;
  };
  console.log(richestWallets ([90,6,1223,5,7887,666,]));
/******************************************
 * Challenge 4: makeLiteralGrades(grades)
 *
 * - Write a function named makeLiteralGrades
 * - Accepts an array of grades as numbers
 * - Converts evrey grade to its currosponding
 * literal grade in the following scale
 * 90-100 : A
 * 80-90  : B
 * 70-80  : C
 * 60-70  : D
 * < 60   : F
 * Example: makeLiteralGrades([90, 70, 40]) should return ["A", "C", "F"]
 *******************************************/
const makeLiteralGrades =  function (grades){
   grades.map(e=>{if (e>= 90){
    console.log ("A");
  }
  else if(e>=80 && e<=90){
console.log("B")
  }
  else if(e>=70 && e<=80){
    console.log("C")
  }
  else if(e>=60 && e<=70){
    console.log("D")
  }
  else console.log ("F");
  
  })

  

  
}
console.log(makeLiteralGrades([90,70,40]));
