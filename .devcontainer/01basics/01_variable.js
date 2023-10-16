const accountId = 1445533 //        const is assigned for memory id can't changed we cant change the const 
let accountEmail = "tarun@google.com"//     memory reserve and change also
var accountPassword = "12345"//     memory change also

 accountCity = "Haldwani"//     scope(for,if else etc ) n pta tha js main toh
let accountState; // undefined value 
 //accountId = 2   // not allowed  this id because we cange the value    
 // comments = /*    */
 /*
prefer not to use var 
because of issue in block scope and functional scope 
 */

accountEmail ="hj@google.com"
accountPassword ="1222"
accountCity ="jaipur"

 console.log(accountId);

 //we use a table method jisse console na likhna pdde baar baar

 console.table([accountEmail, accountPassword, accountCity , accountState])