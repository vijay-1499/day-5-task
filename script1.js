function Resume() {
    var myresume = {
      "name": "vijay",
      "contact": {
        "email": "mahiviji99@gmail.com",
        "phone": "9677892996",
        "address": "112 kandha nagar, paramathivelur, namakkal"
      },
      "education": {
        "degree": "Diploma In Mechanical Engineering",
        "collage": "Surabi polytechnic collage",
        "graduation_year": 2015
      },
      "experience": {
        "career objective": "A challenging career which offers an opportunity to apply my skills knowledge with continuous learning and growth"
      },
      "skills": {
        "programming_languages": ["JavaScript", "Python", "Java", "C++"],
        "web_technologies": ["HTML5", "CSS3", "React", "Node.js"],
        "tools": ["Git", "Visual Studio Code", "mangodb", "SQL"]
      },
      "languages": ["English (Fluent)"]
    };
  

    var jsonString = JSON.stringify(myresume); 
  
    return jsonString;
  }
  
 
  console.log(Resume());
  