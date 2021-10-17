const ages = [12, 14, 11, 18, 19];
const ages2 = [21, 22, 25, 29];
const ages3 = [98, 24,27,41]; 
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3]; 
//console.log(allAges2);


const business = 560; 
const minister  = 1460; 
const sochib = 899; 

// const maximum = Math.max(business, minister, sochib); 
const maximum = Math.max(...allAges2); 
console.log(maximum); 