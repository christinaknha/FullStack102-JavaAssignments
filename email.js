let appData = {
    // primitive
    name: "Gmail",
    // Array
    mailboxes: [
        "inbox",
        "starred",
        "snoozed",
        "important",
        "sent",
        "drafts",
        "categories",
        "social",
        "updates",
        "forums",
        "promotions",
        ["chats",
        "scheduled",
        "all mail",
        "spam",
        "trash",
        "manage labels",
        "create new label"]
    ],
    // An array of objects
    inbox:[
        {from: "L.Critt", status: "read", message: "Class is cancelled"},
        {from: "Sarah K", status: "read", message: "Please update availability"},
        {from: "USPS", status: "read", message: "You have mail and packages arriving today"},
        {from: "IPSY", status: "read", message: "Your bag is incoming"},
        {from: "Airbnb", status: "read", message: "Reservation confirmed"},
        {from: "animals@cmpd.org", status: "read", message: "Whiskers and Wags April 2023 Newsletter"},
    ],
    // An array of objects
    outbox: [
        {to: "Breanna", status: "sent", subject:"Cat - A1208195"},
        {to: "Monique" , status: "sent", subject: "Emmie A1208195"},
        {to: "Niels", status: "sent", subject: "Interested in meeting Emmie"},
        {to: "Amy", status: "sent", subject: "Current foster"}
    ],
    // 
    drafts: [
        {to: "Julie", status: "drafts", subject: "Emmie Update"},

    ]
}

// gets a list of mailbox names
console.log(appData.mailboxes)

// Gets a list of emails
console.log(appData.inbox)

// Gets the test of the second email
console.log(appData.inbox[1].message)

// Marks email as sent
appData.drafts[0].status = "sent";
console.log(appData.drafts[0])

//Removes email from drafts and moves to outbox
let justSent = appData.drafts.pop()
console.log(justSent)

appData.outbox.push(justSent)
console.log(appData.outbox)


// Adds draft email to drafts mailbox
appData.drafts[1]= {to: "Amy", status:"draft", subject: "New Foster Pickup"}
console.log(appData.drafts)