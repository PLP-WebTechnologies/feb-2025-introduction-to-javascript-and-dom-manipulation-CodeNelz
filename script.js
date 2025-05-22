// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Text Manipulation
    const dynamicText = document.getElementById('dynamic-text');
    const changeTextBtn = document.getElementById('change-text-btn');
    
    changeTextBtn.addEventListener('click', function() {
        // Change the text content when button is clicked
        if (dynamicText.textContent === 'This text will change when you click the button below.') {
            dynamicText.textContent = 'The text has been changed using JavaScript!';
        } else {
            dynamicText.textContent = 'This text will change when you click the button below.';
        }
    });

    // Style Manipulation
    const styleBox = document.getElementById('style-box');
    const changeStyleBtn = document.getElementById('change-style-btn');
    
    changeStyleBtn.addEventListener('click', function() {
        // Toggle the highlight class to change styles
        styleBox.classList.toggle('highlight');
    });

    // Element Manipulation
    const elementContainer = document.getElementById('element-container');
    const addElementBtn = document.getElementById('add-element-btn');
    const removeElementBtn = document.getElementById('remove-element-btn');
    let elementCount = 0;
    
    addElementBtn.addEventListener('click', function() {
        // Create a new paragraph element
        const newElement = document.createElement('p');
        elementCount++;
        newElement.textContent = `Element ${elementCount} - Added dynamically`;
        newElement.classList.add('new-element');
        newElement.setAttribute('data-id', elementCount);
        
        // Add the new element to the container
        elementContainer.appendChild(newElement);
    });
    
    removeElementBtn.addEventListener('click', function() {
        // Remove the last added element if any exists
        const elements = document.querySelectorAll('.new-element');
        if (elements.length > 0) {
            elementContainer.removeChild(elements[elements.length - 1]);
        }
    });

    // Counter Example
    const countDisplay = document.getElementById('count');
    const incrementBtn = document.getElementById('increment-btn');
    const decrementBtn = document.getElementById('decrement-btn');
    const resetBtn = document.getElementById('reset-btn');
    let count = 0;
    
    incrementBtn.addEventListener('click', function() {
        count++;
        updateCountDisplay();
    });
    
    decrementBtn.addEventListener('click', function() {
        count--;
        updateCountDisplay();
    });
    
    resetBtn.addEventListener('click', function() {
        count = 0;
        updateCountDisplay();
    });
    
    function updateCountDisplay() {
        countDisplay.textContent = count;
        
        // Change color based on value
        if (count > 0) {
            countDisplay.style.color = 'green';
        } else if (count < 0) {
            countDisplay.style.color = 'red';
        } else {
            countDisplay.style.color = 'black';
        }
    }

    // Form Validation
    const sampleForm = document.getElementById('sample-form');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const usernameError = document.getElementById('username-error');
    const emailError = document.getElementById('email-error');
    
    sampleForm.addEventListener('submit', function(event) {
        let isValid = true;
        
        // Prevent the form from submitting by default
        event.preventDefault();
        
        // Reset error messages
        usernameError.textContent = '';
        emailError.textContent = '';
        
        // Validate username (at least 5 characters)
        if (usernameInput.value.length < 5) {
            usernameError.textContent = 'Username must be at least 5 characters long';
            usernameInput.classList.add('invalid');
            usernameInput.classList.remove('valid');
            isValid = false;
        } else {
            usernameInput.classList.add('valid');
            usernameInput.classList.remove('invalid');
        }
        
        // Validate email (simple check for @ symbol)
        if (!emailInput.value.includes('@')) {
            emailError.textContent = 'Please enter a valid email address';
            emailInput.classList.add('invalid');
            emailInput.classList.remove('valid');
            isValid = false;
        } else {
            emailInput.classList.add('valid');
            emailInput.classList.remove('invalid');
        }
        
        // If form is valid, show success message
        if (isValid) {
            alert('Form submitted successfully!');
            sampleForm.reset();
            usernameInput.classList.remove('valid');
            emailInput.classList.remove('valid');
        }
    });

    // Add input event listeners for real-time validation
    usernameInput.addEventListener('input', function() {
        if (usernameInput.value.length < 5) {
            usernameError.textContent = 'Username must be at least 5 characters long';
            usernameInput.classList.add('invalid');
            usernameInput.classList.remove('valid');
        } else {
            usernameError.textContent = '';
            usernameInput.classList.add('valid');
            usernameInput.classList.remove('invalid');
        }
    });
    
    emailInput.addEventListener('input', function() {
        if (!emailInput.value.includes('@')) {
            emailError.textContent = 'Please enter a valid email address';
            emailInput.classList.add('invalid');
            emailInput.classList.remove('valid');
        } else {
            emailError.textContent = '';
            emailInput.classList.add('valid');
            emailInput.classList.remove('invalid');
        }
    });
});
