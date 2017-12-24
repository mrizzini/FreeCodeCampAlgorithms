
function bouncer(arr) {
  
    function bounce (value) {
      return value; // this returns any true values
    }
    
    return arr.filter(bounce); // this filters out any value that is returned as true
 }

 bouncer([7, "ate", "", false, 9]);
