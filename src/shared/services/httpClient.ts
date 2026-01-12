// src/shared/services/httpClient.ts
import { authToken } from './authToken'
import { logger } from './logger'

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

type RequestOptions = {
  headers?: Record<string, string>
  body?: any
  auth?: boolean // default = true
  dataType?: 'json' | 'formData' // default = 'json'
}

const BASE_URL = 'https://api.example.com'

async function request<T>(
  method: HttpMethod,
  url: string,
  options: RequestOptions = {},
): Promise<T> {
  const { headers = {}, body, auth = true, dataType = 'json' } = options

  const finalHeaders: Record<string, string> = {
    'Content-Type': dataType === 'formData' ? 'multipart/form-data' : 'application/json',
    ...headers,
  }

  if (auth) {
    const token = await authToken.get()
    if (token) {
      finalHeaders.Authorization = `Bearer ${token}`
    }
  }

  logger.log(`[HTTP] ${method} ${url}`)

  const response = await fetch(`${BASE_URL}${url}`, {
    method,
    headers: finalHeaders,
    body: body ? JSON.stringify(body) : undefined,
  })

  if (!response.ok) {
    const errorBody = await response.text()
    logger.log('[HTTP ERROR]', response.status, errorBody)

    throw new Error(
      `HTTP ${response.status}: ${errorBody || response.statusText}`,
    )
  }

  return response.json() as Promise<T>
}

export const httpClient = {
  get: <T>(url: string, options?: RequestOptions) =>
    request<T>('GET', url, options),

  post: <T>(url: string, body?: any, options?: RequestOptions) =>
    request<T>('POST', url, { ...options, body }),

  put: <T>(url: string, body?: any, options?: RequestOptions) =>
    request<T>('PUT', url, { ...options, body }),

  patch: <T>(url: string, body?: any, options?: RequestOptions) =>
    request<T>('PATCH', url, { ...options, body }),

  delete: <T>(url: string, options?: RequestOptions) =>
    request<T>('DELETE', url, options),
}
