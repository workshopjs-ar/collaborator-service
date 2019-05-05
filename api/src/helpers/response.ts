import {ServerResponse} from "http";

export function notFound(res: ServerResponse) {
    json(res, {
        code: 404,
    }, 404);
}

export function json(res: ServerResponse, view: any, code: number = 200) {
    res.writeHead(code, {"Content-Type": "application/json"});
    res.end(
        JSON.stringify(view)
    );
}