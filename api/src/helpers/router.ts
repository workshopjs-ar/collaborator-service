import {IncomingMessage, ServerResponse} from "http";
import {getSubPath} from "./url";
import {notFound} from "./response";

export enum HttpMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
}

export type BasicRouterDefinition = {
    [P in HttpMethod]?: BasicRouterMethodDefinition
}

type BasicRouterMethodDefinition = {
    [key: string]: Controller
}

export type Controller = (IncomingMessage, ServerResponse) => void;

export function basicRouter(router: BasicRouterDefinition): Controller {
    return (req: IncomingMessage, res: ServerResponse) => {
        const method: HttpMethod = (req.method as HttpMethod),
            subPath = getSubPath(req.url);

        const routerByMethod = (router[method] as BasicRouterMethodDefinition);
        if (!routerByMethod) {
            notFound(res);
            return;
        }

        const action = (routerByMethod[subPath] as Controller) || (routerByMethod['/' + subPath] as Controller);
        if (!action) {
            notFound(res);
            return;
        }

        action(req, res);
        return;
    }
}