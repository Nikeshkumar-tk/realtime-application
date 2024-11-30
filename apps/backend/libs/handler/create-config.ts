import { CreateLambdaHandlerConfigInput, FunctionDefinition } from "./types";
import { createHandlerPath } from "./utils";

export const createLambdaHandlerConfig = (
  input: CreateLambdaHandlerConfigInput
): FunctionDefinition => {
  return {
    handler: input.handlerPath ? input.handlerPath : createHandlerPath(input.name),
    events: input.events
  };
};
