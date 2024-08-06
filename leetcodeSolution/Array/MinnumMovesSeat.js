/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */


var minMovesToSeat = function(seats, students) {
    let sum = 0;
    students.sort((a, b) => a -b);
    seats.sort((a, b) => a - b);
 
  for(let i = 0; i < students.length; i++){
      sum += Math.abs(students[i] - seats[i]);         
   }
      
    return sum;
    };
 
