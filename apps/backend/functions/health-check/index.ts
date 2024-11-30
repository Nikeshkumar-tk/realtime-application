import { createLambdaHandlerConfig } from "../../libs/handler/create-config";
import { createHandlerPath } from "../../libs/handler/utils";

export const config = createLambdaHandlerConfig({
  name: "healthCheck",
  handlerPath: createHandlerPath("health-check"),
  events: [
    {
      httpApi: {
        path: "/health-check",
        method: "get",
      },
    },
  ],
});
