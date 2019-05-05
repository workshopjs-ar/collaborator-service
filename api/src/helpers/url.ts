import { parse } from "url";
import { ParsedUrlQuery } from "querystring";

export const ROOT_PATH = '_root';
export const SUBPATH_QSK = '_subpath';

export function queryParams(url: string): ParsedUrlQuery {
    return parse(url || '', true).query;
}

export function getSubPath(url: string | undefined): string {
    let sp = queryParams(url || '')[SUBPATH_QSK] || ROOT_PATH;
    if (sp === 'undefined') {
        sp = ROOT_PATH
    }

    if (sp instanceof Array) {
        return sp[0];
    }

    return sp;
}