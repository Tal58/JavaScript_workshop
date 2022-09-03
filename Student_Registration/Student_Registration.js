let studentsInfo = ['C1234 - John Doe, London, Full-Stack',
'C2345 - Jane Doe, London, Data-Science',
'C2346 - Mary Ann, Paris, AWS-Devops',
'C2347 - Adam Smith, Texas, AWS-Devops',
'C2444 - Michael Great, Arizona, Full-Stack',
'C2555 - William Cash, Manchester, Data-Science',
'C2455 - Patrick Jane, Madrid, Full-Stack'];
let info = ["Student Nr","First Name","Last Name", "Location", "Program"];


const student = (a) => {
    a.map((str) => {
      let result = str.split(" ");
      console.log(`Student Nr: ${result[0]}\n
  First Name: ${result[2]}\n
  Last Name: ${result[3].slice(0, -1)}\n
  Location: ${result[4].replace(/,/, "")}\n
  Program: ${result[5]}\n
  ==========================`);
    });
  };
student(studentsInfo);