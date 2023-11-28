function fullName(firstName,lastName){
    return firstName+lastName;
   }
   let result=fullName(Arya,Stark);
   let expected=AryaStark;
   if(result!==expected){
       throw new error(`${result} is not equal to ${expected}`);
   }

   function totalAmount(amount,taxRate){
    return amount+(amount*taxRate);
   }
   result=totalAmount(200,5);
    expected=1200;
   if(result!==expected){
       throw new error(`${result} is not equal to ${expected}`);
   }