// Home page logic
document.addEventListener('DOMContentLoaded', async function() {
    // Check if user is authenticated
    const user = await getCurrentUser()
    
    if (!user) {
        // Redirect to login if not authenticated
        window.location.href = 'index.html'
        return
    }
    
    // Display user information
    const userEmailElement = document.getElementById('userEmail')
    userEmailElement.textContent = `Email: ${user.email}`
    
    // Handle logout
    const logoutBtn = document.getElementById('logoutBtn')
    logoutBtn.addEventListener('click', async function() {
        const result = await signOut()
        if (result.success) {
            window.location.href = 'index.html'
        }
    })
})