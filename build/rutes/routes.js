import { Handler } from '../handlers/handler';
const router = xpress.Router();
router.get("/hola", Handler.salute);
export { router };
