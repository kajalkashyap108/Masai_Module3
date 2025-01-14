
const user = {
    name: "kajol",
    age: 22,
    location: "Delhi",
  };
  

  const printUpdatedUser = (user, updates) => {
    const updatedUser = { ...user, ...updates };
    console.log(updatedUser);
  };
  
  
  printUpdatedUser(user, { age: 26, location: "Bhopal" });
  
  
  