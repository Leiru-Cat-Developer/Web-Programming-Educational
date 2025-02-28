//MODULE OS
const osModule = require('os');

console.log(osModule.userInfo());
console.log(osModule.uptime());
console.log(osModule.platform());
console.log(osModule.totalmem());
console.log(osModule.freemem());

//ANOTHER WAY TO SHOW THE VALUES
console.table({
    os: osModule.platform(),
    version: osModule.release(),
    totalMemory: osModule.totalmem()
});