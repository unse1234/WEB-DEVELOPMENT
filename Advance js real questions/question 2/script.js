// ❓ Q1: Dependent API Calls

// Tumhare paas 2 APIs hain:

// getUser(id)
// getPosts(userId)

// 👉 Task:
// User ke posts tab hi fetch hone chahiye jab user successfully mil jaye.

// 💡 Kya samajhna hai:
// Async flow ka control
// Agar pehli API fail ho jaye toh doosri call nahi honi chahiye
// Clean error handling bhi zaroori hai

// 👉 Real-world:
// Login → user fetch → dashboard data load

// Example implementation:

async function getUserPosts(id){
    
    try{  let userId= await getUser(id);
      let userPosts= await getPosts();
      return posts;
    }
    catch(err){
        console.error("Error fetching user or posts:", err);
    }
}