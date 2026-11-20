async function login() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log("User authenticated successfully");
            resolve();
        }, 1000);
    });
}
async function profile() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log("User profile retrieved successfully");
            resolve();
        }, 1000);
    });
}
async function orders() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log("User orders retrieved successfully");
            resolve();
        }, 1000);
    });
}
async function main() {
    await login();
    await profile();
    await orders();
}
main();