import { FunctionDefinition } from "../../handler/types";

export const createLambdaFunctionList = (functions: Record<string, {config: FunctionDefinition}>) => {
    const lambdaFunctions: { [key: string]: FunctionDefinition } = {}
    for (const [key, value] of Object.entries(functions)) {
        lambdaFunctions[key] = value.config
    }
    return lambdaFunctions
}