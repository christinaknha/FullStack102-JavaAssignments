const users = [
    {id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false},
    {id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true},
    {id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false},
    {id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true},
    {id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false},
    {id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true},
    {id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false},
    {id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false}
]

// Find a user named Jose
let userNamedJose = users.find(user => user.firstName == "Jose");
console.log(userNamedJose);

// Get an array of all the premium members
let premiumMembers = users.filter(user => user.isPremiumMember);
console.log(premiumMembers);

// Get an array of all the user last names
let usersLastName = users.map(user => user.lastName)
console.log(usersLastName)

// Get an array of full names of those who have logged in more than 10 times
let overTenLogins = users.filter (user => user.logins > 10);
let namesOverTenLogins = overTenLogins.map(user => user.firstName +" " + user.lastName )
// console.log(overTenLogins)
console.log(namesOverTenLogins)

// Get the total number of logins for the list of users
let usersLogins = users.map(user => user.logins);
    // console.log(usersLogins)

let totalLogins = usersLogins.reduce(function(userLogin,total) {
    return total +userLogin;
}) 
console.log(totalLogins)