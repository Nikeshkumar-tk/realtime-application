import { AWS } from "@serverless/typescript";
import { createLambdaFunctionList } from "./libs/serverless/lambda/createLambdaList";
import * as lambdaFunctions from "./functions";

export const serverlessConfiguration: AWS = {
  service: "relatime-application-backend",
  provider: {
    name: "aws",
    runtime: "nodejs18.x",
    region: "us-east-1",
    stage: "dev",
    profile: "personal-account",
  },
  package: {
    individually: true,
  },
  functions: createLambdaFunctionList(lambdaFunctions)
};

module.exports = serverlessConfiguration;
