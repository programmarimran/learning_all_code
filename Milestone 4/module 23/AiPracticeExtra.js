const employees = [
    { name: "Alice", baseBonus: 1000, performanceRating: 3, bonusMultiplier: 500 },
    { name: "Bob", baseBonus: 1500, performanceRating: 5, bonusMultiplier: 300 },
    { name: "Charlie", baseBonus: 2000, performanceRating: 2, bonusMultiplier: 400 },
    { name: "David", baseBonus: 1200, performanceRating: 4, bonusMultiplier: 600 },
];

function calculateTotalBonus(employees) {
    let totalBonus = 0;
    for(const employ of employees){
        let outofbonus = employ.performanceRating*employ.bonusMultiplier;
        totalBonus= totalBonus+outofbonus+employ.baseBonus;
    }
    return totalBonus;
}

console.log("Total Bonus:", calculateTotalBonus(employees));

// ****************************************************************************

const projects = [
    { name: "Project A", baseCost: 5000, hoursWorked: 100, hourlyRate: 50 },
    { name: "Project B", baseCost: 7000, hoursWorked: 150, hourlyRate: 60 },
    { name: "Project C", baseCost: 3000, hoursWorked: 80, hourlyRate: 40 },
    { name: "Project D", baseCost: 9000, hoursWorked: 200, hourlyRate: 70 },
];

function calculateTotalProjectCost(projects) {
    let totalCost = 0;
   for(const item of projects){
    totalCost+=(item.baseCost)+(item.hourlyRate*item.hoursWorked)
   }
    return totalCost;
}

console.log("Total Project Cost:", calculateTotalProjectCost(projects));

// **********************************************************************************

const utilities = [
    { name: "Electricity", baseCharge: 1000, usage: 200, rate: 5 },
    { name: "Water", baseCharge: 500, usage: 50, rate: 10 },
    { name: "Gas", baseCharge: 800, usage: 100, rate: 7 },
    { name: "Internet", baseCharge: 1200, usage: 300, rate: 3 },
];

function calculateTotalUtilityCost(utilities) {
    let totalCost = 0;
    for(const bill of utilities){
        totalCost+=(bill.baseCharge)+(bill.usage*bill.rate)
    }
    return totalCost;
}

console.log("Total Utility Cost:", calculateTotalUtilityCost(utilities));