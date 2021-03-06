import {basicRouter, BasicRouterDefinition, HttpMethod} from "../../helpers/router";
import {getAll} from "../../controllers/v1/collaborators";
import {ROOT_PATH} from "../../helpers/url";

const router: BasicRouterDefinition = {
    [HttpMethod.GET]: {
        '/': getAll,
    }
};

export default basicRouter(router)