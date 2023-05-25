module.exports = {
    // server database
    MONGODB_USERNAME: "YOUR_USERNAME",
    MONGODB_PASSWORD: "YOUR_PASSWORD",
    MONGODB_DB_NAME: "YOUR_DB_NAME",

    port : process.env.PORT || 5000,
  
    //secret key for API
    SECRET_KEY: "YOUR_KEY",

    baseURL : "http://localhost:5000/"
  
}
