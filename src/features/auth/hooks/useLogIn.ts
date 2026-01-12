import { useCallback, useState } from 'react'

/**
 * NOTE:
 * Cross-feature import is normally disallowed.
 * Auth is a system-level feature (e.g. logout), so calling auth commands is allowed.
 */
import { login } from '@/features/auth/services/authService'

export default function useLogIn() {
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSetEmail = useCallback((value: string) => {
        setEmail(value.trim())
    }, [])

    const handleSetPassword = useCallback((value: string) => {
        setPassword(value.trim())
    }, [])

    const handleLogIn = useCallback(async () => {
        try {
            setIsLoading(true)
            await login(email, password)
        } catch (error) {
            // TODO: handle error (toast, modal, throw up)
            throw error
        } finally {
            setIsLoading(false)
        }
    }, [email, password])

    return {
        // state
        email,
        password,
        isLoading,

        // handlers
        handleSetEmail,
        handleSetPassword,
        handleLogIn,
    }
}
