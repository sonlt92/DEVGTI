import userRouter from "./memberRoute";
import carRouter from "./carRoute";
import serviceRouter from "./serviceRoute";
import gasRouter from "./gasStationRoute";

const routes = [userRouter, carRouter, serviceRouter, gasRouter];

export default routes;
