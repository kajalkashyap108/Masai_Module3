
const fetchUsers = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const users = [
          { name: "sonal", age: 25 },
          { name: "soni", age: 22 },
          { name: "sweta", age: 30 },
        ];
        resolve(users); 
      }, 2000); 
    });
  };
  

  const getUsers = async () => {
    console.log("Fetching users...");
    const users = await fetchUsers();
    console.log("Users fetched:", users);
  };
  
 
  getUsers();
  