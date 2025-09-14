import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
    id: string;
    name: string;
    email: string;
}

export interface Auth {
    isAuthenticated: boolean;
    user: User | null;
    loading: boolean;
    error: string | null;
}

interface LoginPayload {
    email: string;
    password: string;
    name?: string;
    confirmPassword?: string;
}

const initialState: Auth = {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null
}

// Hardcoded credentials for demo
const DEMO_CREDENTIALS = {
    email: 'sourav@monova.com',
    password: 'monova'
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        login: (state, action: PayloadAction<LoginPayload>) => {
            const { email, password, name } = action.payload;
            
            // Reset loading state
            state.loading = false;
            
            // Check credentials
            if (email === DEMO_CREDENTIALS.email && password === DEMO_CREDENTIALS.password) {
                console.log('Login successful');
                state.isAuthenticated = true;
                state.user = {
                    id: '1',
                    name: name || 'Sourav',
                    email: email
                };
                state.error = null;
            } else {
                state.error = 'Invalid email or password';
                state.isAuthenticated = false;
                state.user = null;
            }
        },
        loginSuccess: (state, action: PayloadAction<User>) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
            state.error = null;
        },
        loginError: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
            state.isAuthenticated = false;
            state.user = null;
        },
        signup: (state, action: PayloadAction<LoginPayload>) => {
            const { email, password, name, confirmPassword } = action.payload;
            
            state.loading = false;
            
            // Basic validation
            if (!name || name.length < 2) {
                state.error = 'Name must be at least 2 characters';
                return;
            }
            
            if (!email || !email.includes('@')) {
                state.error = 'Please enter a valid email';
                return;
            }
            
            if (!password || password.length < 6) {
                state.error = 'Password must be at least 6 characters';
                return;
            }
            
            if (password !== confirmPassword) {
                state.error = 'Passwords do not match';
                return;
            }
            
            // For demo, auto-create account
            state.isAuthenticated = true;
            state.user = {
                id: Date.now().toString(),
                name: name,
                email: email
            };
            state.error = null;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.loading = false;
            state.error = null;
        },
        clearError: (state) => {
            state.error = null;
        }
    },
});

export const { 
    loginStart, 
    login, 
    loginSuccess, 
    loginError, 
    signup, 
    logout, 
    clearError 
} = authSlice.actions;

export default authSlice.reducer;