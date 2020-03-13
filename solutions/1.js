/*
100 doors

There are 100 doors in a row that are all initially closed.
You make 100 passes by the doors.
The first time through, visit every door and 'toggle' the door (if the door is closed, open it; if it is open, close it).
The second time, only visit every 2nd door (i.e., door #2, #4, #6, ...) and toggle it.
The third time, visit every 3rd door (i.e., door #3, #6, #9, ...), etc., until you only visit the 100th door.
*/

function getFinalOpenedDoors() {

    let allDoors = [];
  
    // Creating Closed Doors
    for (let i = 0; i < 100; i++) {
      allDoors[i] = false;
    }
  
    //Iterating in specified Logic
    for (let i = 1; i <= 100; i++) {
      for (let j = i-1; j < 100; j+=i) {
        allDoors[j] = !allDoors[j];
      }
    }
    
    //Creating Open Door Array
    let openDoors = [];
  
    //Populating openDoors with Door No.
    for (let i = 0; i < 100; i++) {
      if (allDoors[i]) {
        openDoors.push(i+1);
      }
    }
  
    return openDoors;
  }

  getFinalOpenedDoors();