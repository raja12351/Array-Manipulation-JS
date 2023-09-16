const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    for(let i in data){
        if(data[i].profession == "developer"){
            console.log(data[i]);
        }
    }
  }
  
  // 2. Add Data
  function addData() {
    const name = prompt("Enter the name");
    const age = parseInt(prompt("Enter the age"));
    const profession = prompt("Enter the profession");

    if(name && !isNaN(age) && profession){
      const newData = {name, age, profession};
      data.push(newData);

      console.log(data);
    }
    else{
      console.log("Invalid data");
    }
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    let removeAdmin = data.filter(data => data.profession !== "admin");
    console.log(removeAdmin);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const additionalArr = [
        {id: 5, name:"rajat", age:25, profession:"developer" },
        {id: 6, name:"sandeep", age:24, profession:"developer" },
    ];
    let arr = data.concat(additionalArr);
    console.log(arr);
  }
  
  // 5. Average Age
  function averageAge() {
    let sum = 0;
    for(let i in data){
        sum += data[i].age;
    }
    console.log(sum / data.length);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    let ct = 0;
    for(let i in data){
        if(data[i].age > 25){
            ct++;
        }
    }
    if(ct > 0){
        console.log("Present");
    }else{
        console.log("Not Present");
    }
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    const professions = new Set();

    for (let i = 0; i < data.length; i++) {
      professions.add(data[i].profession);
    }
  
    professions.forEach((profession) => {
      console.log(profession);
    });
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a,b) => {
        return a.age - b.age;
    })
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    for(let i in data){
        if(data[i].name == "john"){
            data[i].profession = "manager";
        }
    }
    console.log(data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let ctDev = 0;
    for(let i in data){
        if(data[i].profession == "developer"){
            ctDev++;
        }
    }
    console.log("No of Developers are: " + ctDev);

    let ctAdm = 0;
    for(let i in data){
        if(data[i].profession == "admin"){
            ctAdm++;
        }
    }
    console.log("No of Admins are: " + ctAdm);

    console.log("Total no of admin and developers are: " + (ctAdm + ctDev));
  }