// Code your solution in this file!
// function returnFirstTwoDrivers(){
//     const returnFirstTwoDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
//     function X()
//     return
// }
// console.log (returnFirstTwoDrivers([0],[1]));


const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    };
  };
  
  const fareDoubler = createFareMultiplier(2);
  
  const fareTripler = createFareMultiplier(3);
  
  const selectDifferentDrivers = function(drivers, returnDriversFunction) {
    return returnDriversFunction(drivers);
  };
