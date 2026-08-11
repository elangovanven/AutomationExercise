/*When Node.js starts your Playwright test, dotenv.config() reads:.env file and loads its values into:
process.env , So this: BASE_URL=https://www.saucedemo.com becomes accessible as:
process.env.BASE_URL

Need to import in test file
import { env } from '../utils/env.js'



*/

import dotenv from 'dotenv' 

dotenv.config()

export const env = {
    baseUrl: process.env.BASE_URL,
    // username: process.env.USERNAME,
    // password: process.env.PASSWORD
}