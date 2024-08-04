// random messages to fill up the page
const prefilledWishes = [
    {
        name: "John Tan",
        relationship: "Alumni",
        message: "SP has been an integral part of my journey. The friendships and knowledge gained here have shaped my career. Happy 70th anniversary!",
        imageUrl: "images/staffday4.jpg"
    },
    {
        name: "Sarah Lim",
        relationship: "Student",
        message: "Proud to be part of SP's 70-year legacy. Here's to many more years of innovation and excellence!"
    },
    {
        name: "Dr. Ng Wei Ling",
        relationship: "Staff",
        message: "As we celebrate 70 years, I'm excited for the future of SP. May we continue to inspire and nurture the next generation of leaders and innovators.",
        imageUrl: "images/sp-charity-golf-thumbnail.jpg"
    }
];

// Add random messages to the page
const submittedMessages = document.getElementById('submittedMessages');
prefilledWishes.forEach(wish => {
    submittedMessages.appendChild(createMessageCard(wish.name, wish.relationship, wish.message, wish.imageUrl));
});

// Function to create a message card
function createMessageCard(name, relationship, message, imageUrl = null) {
    const messageElement = document.createElement('div');
    messageElement.className = 'card mb-3';
    // what the card contain
    let cardContent = `
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${relationship}</h6>
            <p class="card-text">${message}</p>
        </div>
    `;
    // if user input img it will add to card
    if (imageUrl) {
        cardContent = `<img src="${imageUrl}" class="card-img-top img-fluid object-fit-contain my-3" alt="Submitted photo" style="height: 200px;">` + cardContent;
    }
    messageElement.innerHTML = cardContent;
    return messageElement;
}

// Form submission handler
document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault(); // apparently helps prevent default form submission
    // get value from form
    const name = document.getElementById('validationCustom01').value;
    const relationship = document.getElementById('relationship').value;
    const message = document.getElementById('exampleFormControlTextarea1').value;
    const photo = document.getElementById('photo').files[0];
    
    if (name === '' || relationship === '' || message === '') {// Check empty validation
        return; // stop the function if is empty
    }else{
        //one is if got photo other is if have not then got no img
        if (photo) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const messageElement = createMessageCard(name, relationship, message, e.target.result);
                submittedMessages.insertBefore(messageElement, submittedMessages.firstChild);
            }
            reader.readAsDataURL(photo);
        } else {
            const messageElement = createMessageCard(name, relationship, message);
            submittedMessages.insertBefore(messageElement, submittedMessages.firstChild);
        }
    }
});