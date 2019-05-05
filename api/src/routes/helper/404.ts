import {notFound} from "../../helpers/response";
import {ServerResponse} from "http";

export default (_, res: ServerResponse) => { notFound(res);}