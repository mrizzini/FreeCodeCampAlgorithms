function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var newArr = [];

  for (var i in arr) {
      
        var test = Math.round((2 * Math.PI) * Math.sqrt(Math.pow(arr[i].avgAlt + earthRadius, 3) / GM));
        delete arr[0].avgAlt;
        newArr.push({
          name: arr[i].name,
          orbitalPeriod: test
        });
    
      
  }
    


return newArr;

}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);