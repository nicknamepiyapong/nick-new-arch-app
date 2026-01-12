// shared/*
import { httpClient } from '@/shared/services'
import { authToken } from '@/shared/services/authToken'
//
export async function login(email: string, password: string) {
  const res = await httpClient.post<{ token: string }>(
    '/login',
    { email, password },
    { auth: false },
  )

  await authToken.set(res.token)
}

export async function logout() {
  await authToken.clear()
}
