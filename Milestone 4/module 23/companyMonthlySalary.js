// ### Task -5: (Hard)
// For each employee their current salary is calculated
//  by multiplying yearly increment with experience then
//  adding the result to the starting salary. 
// Now calculate is the total salary has to be provided 
// by the company in a month.
// ```
 const employees = [
        { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
        { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
        { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
        { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
     ];
     
function companyMonthlySalary (employes){
   let totalSalary = 0;
   for(const item of employes){
      totalSalary = totalSalary+item.starting+item.increment*item.experience;
   }
   return totalSalary;
}
const argumant = companyMonthlySalary(employees)
console.log('Company total Salary:',argumant)


     let manual =5*5000
     let manual1 =3*7000
     let manual2 =9*1000
     let manual3 =0*4000
     let manual4 =20000+15000+30000+29000
   
     const result = manual+manual1+manual2+manual3+manual4;
     console.log(result)