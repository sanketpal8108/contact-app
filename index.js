const User = require("./User");

let a1 = User.newAdmin('XYZ',30,'M')
// let a1 = User.newAdmin('XYZ' , 30 ,'M')
a1.newUser('ABC' ,12,'M')
let u =a1.newUser('DEF' , 20 , 'F')
// console.log(u);
//console.log(u.getAllUser());


// console.log(a1.getAllUser());
// console.log(a1.updateUser(5,'name','Sanket'));
// console.log(a1.getAllUser());

// console.log(a1.deleteUser(2));
// console.log(a1.getAllUser());


let z =u.createContact('Sanket')
console.log(z);
u.updateContact(0,'name',12)
console.log(u.getAllContacts());
console.log('--------------------');
let info1 = u.createContactInfo('mobile','7890',0)
let info2= u.createContactInfo('home','7890',0)
// console.log(info1 , info2);
console.log(u.getContactInfo(0));
u.updateContactInfo(0,'value','1234',1)
console.log(u.getContactInfo(0));

