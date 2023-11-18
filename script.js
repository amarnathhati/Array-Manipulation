const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    const developers = data.filter(person => person.profession === "developer");
    console.log("Developers:", developers);
  }
  
  // 2. Add Data
  function addData() {
    const name = prompt("Enter name:");
    const age = prompt("Enter age:");
    const profession = prompt("Enter profession:");
    
    const newData = { name, age: parseInt(age), profession };
    data.push(newData);
    console.log("Data added:", newData);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    const admins = data.filter(person => person.profession === "admin");
    data = data.filter(person => person.profession !== "admin");
    console.log("Removed Admins:", admins);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const newArray = [
      { name: "mary", age: 30, profession: "developer" },
      { name: "bob", age: 28, profession: "admin" },
    ];
  
    const result = data.concat(newArray);
    console.log("Concatenated Array:", result);
  }
  
  // 5. Average Age
  function averageAge() {
    const totalAge = data.reduce((sum, person) => sum + person.age, 0);
    const avgAge = totalAge / data.length;
    console.log("Average Age:", avgAge.toFixed(2));
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    const above25 = data.some(person => person.age > 25);
    console.log("Age above 25 check:", above25);
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    const professions = [...new Set(data.map(person => person.profession))];
    console.log("Unique Professions:", professions);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a, b) => a.age - b.age);
    console.log("Sorted by Age:", data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    const john = data.find(person => person.name === "john");
    if (john) {
      john.profession = "manager";
      console.log("John's profession updated:", john);
    }
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    const developerCount = data.filter(person => person.profession === "developer").length;
    const adminCount = data.filter(person => person.profession === "admin").length;
    console.log("Developer Count:", developerCount, "Admin Count:", adminCount);
  }
  