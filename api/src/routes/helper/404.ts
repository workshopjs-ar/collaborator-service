import {json, notFound} from "../../helpers/response";
import {ServerResponse} from "http";

export default (_, res: ServerResponse) => {
    json(res, {
        code: 404,
    }, 404);
}