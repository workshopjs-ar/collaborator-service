import {ServerResponse} from "http";

export function json(res: ServerResponse, view: any, code: number = 200) {
    res.writeHead(code, {"Content-Type": "application/json"});
    res.end(
        JSON.stringify(view)
    );
}