import { AWS } from "@serverless/typescript";

export type HandlerType = (event: unknown) => unknown;

export type FunctionDefinition = NonNullable<AWS["functions"]>[string];


export type CreateLambdaHandlerConfigInput = {
  name: string;
  events: FunctionDefinition["events"];
  handlerPath?: string
};
