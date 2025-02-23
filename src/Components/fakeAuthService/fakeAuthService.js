// fakeAuthService.js (Separate File)

export const registerUser = (userData) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    console.log("Before Registering:", users); // Debugging

    // Ensure users is always an array
    if (!Array.isArray(users)) {
        users = [];
    }

    // Convert phone to string for proper comparison
    userData.phone = String(userData.phone);
    
    // Check if the phone number already exists
    const userExists = users.some(user => String(user.phone) === userData.phone);
    if (userExists) {
        console.error("Duplicate Phone Detected:", userData.phone);
        return { success: false, message: "Phone already registered!" };
    }

    // Save new user
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));

    console.log("After Registering:", users); // Debugging

    return { success: true, message: "User registered successfully!" };
};




export const loginUser = (phone) => {
    if (!phone) {
        console.error("Error: No phone number provided!");
        return { success: false, message: "Phone number is required!" };
    }

    // Get stored users or empty array if none
    const users = JSON.parse(localStorage.getItem("users")) || [];
    console.log("Users in localStorage:", users); // Debugging

    // Check if users exist
    if (users.length === 0) {
        return { success: false, message: "No users are registered in the system!" };
    }

    console.log("Attempting login with phone:", phone); // Debugging

    // Find the user by phone number
    const user = users.find(u => u.phone === phone);
    console.log("Found user:", user); // Debugging

    if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        return { success: true, message: "Login successful!", user };
    } else {
        return { success: false, message: "The phone number is not registered!" };
    }
};
