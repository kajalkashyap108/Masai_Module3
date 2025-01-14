
function updateUser(user, updates) {
    
    return { ...user, ...updates };
  }
  
  // Example:
  const user = {
    name: "Akash",
    age: 25,
    location: "Delhi",
  };
  
  const updates = {
    age: 26,
    location: "Mumbai",
  };
  
  const updatedUser = updateUser(user, updates);
  
  console.log(updatedUser);
  
  