//1.task 
//For the given json iterate over all for loops (for,for in ,for of,for each)

// For Loop :
var jsonObject = {
    "name": "vijay",
    "age": 28,
    "city": "india",
    "skills": ["JavaScript", "HTML", "CSS"]
  };
  
  var keys = Object.keys(jsonObject);
  
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = jsonObject[key];
    console.log(key + ": " + value);
  }
  
  //For in :
  var jsonObject = {
    "name": "vijay",
    "age": 28,
    "city": "india",
    "skills": ["JavaScript", "HTML", "CSS"]
  };
  
  for (var a in jsonObject) {
    console.log(a + ": " + jsonObject[key]);
  }
  
  // For of :
  var jsonObject = {
    "name": "vijay",
    "age": 28,
    "city": "india",
    "skills": ["JavaScript", "HTML", "CSS"]
  };
  
  //  Only works for iterable objects like arrays :
  for (var value of jsonObject.skills) {
    console.log(value);
  }
  
  // For each :

  var jsonObject = {
    "name": "vijay",
    "age": 28,
    "city": "india",
    "skills": ["JavaScript", "HTML", "CSS"]
  };
  
 // only works an array :
  jsonObject.skills.forEach(function (value) {
    console.log(value);
  });
  
