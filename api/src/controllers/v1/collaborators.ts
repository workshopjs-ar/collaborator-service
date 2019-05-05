import { IncomingMessage, ServerResponse } from "http";
import {json} from "../../helpers/response";

export function getAll(req: IncomingMessage, res: ServerResponse) {
    json(res, {path: req.url, method: req.method})
}