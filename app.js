// Main application logic
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm')
    
    loginForm.addEventListener('submit', async function(e) {
        e.preventDefault()
        
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        
        // Show loading state
        const submitButton = loginForm.querySelector('button[type="submit"]')
        const originalText = submitButton.textContent
        submitButton.textContent = 'Signing in...'
        submitButton.disabled = true
        
        // Clear previous messages
        clearMessage()
        
        // Attempt to sign in
        const result = await signInWithEmail(email, password)
        
        if (result.success) {
            showMessage('Login successful! Redirecting...', 'success')
            // Redirect to home page
            setTimeout(() => {
                window.location.href = 'home.html'
            }, 1500)
        } else {
            showMessage(`Login failed: ${result.error}`, 'error')
        }
        
        // Reset button state
        submitButton.textContent = originalText
        submitButton.disabled = false
    })
})

// Utility functions for showing messages
function showMessage(text, type = 'info') {
    const messageElement = document.getElementById('message')
    messageElement.textContent = text
    messageElement.className = `message ${type}`
    messageElement.style.display = 'block'
}

function clearMessage() {
    const messageElement = document.getElementById('message')
    messageElement.textContent = ''
    messageElement.style.display = 'none'
}