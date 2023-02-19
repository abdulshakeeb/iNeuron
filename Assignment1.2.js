// Write a JavaScript program to convert temperatures to and from Celsius,
// Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in
// Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C

function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5/9;
    return celsius;
  }
  
  console.log("60°C is " + celsiusToFahrenheit(60) + "°F");
  console.log("45°F is " + fahrenheitToCelsius(45) + "°C");

  
  