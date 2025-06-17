// Authentication functions
async function signInWithEmail(email, password) {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        })

        if (error) {
            throw error
        }

        return { success: true, user: data.user }
    } catch (error) {
        return { success: false, error: error.message }
    }
}

async function signUpWithEmail(email, password) {
    try {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password
        })

        if (error) {
            throw error
        }

        return { success: true, user: data.user }
    } catch (error) {
        return { success: false, error: error.message }
    }
}

async function signOut() {
    try {
        const { error } = await supabase.auth.signOut()
        if (error) {
            throw error
        }
        return { success: true }
    } catch (error) {
        return { success: false, error: error.message }
    }
}

// Check if user is logged in
async function getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser()
    return user
}

// Listen for auth state changes
supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN') {
        console.log('User signed in:', session.user)
        // Redirect to dashboard or handle successful login
        showMessage('Login successful!', 'success')
    } else if (event === 'SIGNED_OUT') {
        console.log('User signed out')
    }
})