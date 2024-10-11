import axios from 'axios'
import env from 'global/config/environment'

export default axios
export { axios }

export const DOMAIN = env['APP_API_URL'] || 'http://example.com'

export const baseURL = DOMAIN
export const withCredentials = false
export const headers = { Accept: 'application/json' }
export const config = { baseURL, withCredentials, headers }

export const apiAxios = axios.create(config)
