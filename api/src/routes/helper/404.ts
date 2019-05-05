import {notFound} from "../../helpers/response";
import {IncomingMessage, ServerResponse} from "http";

export default (req: IncomingMessage, res: ServerResponse) => { console.log(req.url); notFound(res);}