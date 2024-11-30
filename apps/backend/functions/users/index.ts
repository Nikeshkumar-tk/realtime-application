import { createLambdaHandlerConfig } from "../../libs/handler/create-config";

export const config = createLambdaHandlerConfig({
  name: "users",
  events: [
    {
      httpApi: {
        path: "/users",
        method: "post",
      },
    },
  ],
});
