let accountId = "23469763"
var accountName = "MD NADEEM NOORI"
const accountCity = "Hyderabad"
AccountType = "Active"
let accountActivity;
 /* use only let, const to declare the variable because the 
  var don't understand the scope of the object. */
  console.log(accountId);
 /* if the declaration of variable is in const, no modification can be done, once it defined. */
 accountId ="123357859"
 // accountCity = 'Bihar'--------> cant not be modified as it is const defined.
 accountName = "N_Square"
 console.table([accountId, accountName, accountCity, AccountType, accountActivity]); 