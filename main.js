const input = document.querySelector(".message_input")
const submitBtn = document.querySelector(".message_button")
const dismissBtn = document.querySelector(".success_button")

// Take container variables for display,
const newsLetter = document.querySelector(".newsletter_container")
const success = document.querySelector(".success_container")

// Target email to change the new one,
const targetEmail = document.querySelector(".target_email")

// Add event listener for submit,
const emailSubmit = () => {
    //regular expression for email validation
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.value.match(validRegex)) {
        const newEmail = input.value
        newsLetter.classList.add("hidden")
        targetEmail.textContent = newEmail
        success.classList.remove("hidden")
    }
    else {
        alert("invalid email!")
        input.focus()
    }
}

submitBtn.addEventListener("click", emailSubmit)

// Dismiss the success page,
const dismissPage = () => {
    success.classList.add("hidden")
    newsLetter.classList.remove("hidden")
    input.focus()
}

dismissBtn.addEventListener("click", dismissPage)