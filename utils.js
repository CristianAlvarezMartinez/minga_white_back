import {dirname} from 'path'
import { fileURLToPath } from 'url'

const __filname = fileURLToPath(import.meta.url)
const __dirname = dirname(__filname)

export {__dirname, __filname}