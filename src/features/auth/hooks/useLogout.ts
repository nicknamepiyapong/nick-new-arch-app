import { useEffect, useCallback } from 'react'
/**
 * NOTE:
 * Cross-feature import is normally disallowed.
 * Auth is a system-level feature (e.g. logout), so calling auth commands is allowed.
 */
import { logout } from '@/features/auth/services/authService'

export default function useLogout() {

  const handleLogout = useCallback(async () => {
    await logout()
  }, [])

  useEffect(() => {}, [])

  return { handleLogout }
}
