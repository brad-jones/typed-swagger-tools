// Type definitions for swagger-tools 0.10.1
// Project: https://github.com/apigee-127/swagger-tools
// Definitions: https://github.com/swissspidy/typed-swagger-tools

import * as http from 'http';

declare namespace swagger {
	export interface IRouterOptions {
		controllers?: string|string[]|any;
		ignoreMissingHandlers?: boolean;
		useStubs?: boolean;
	}

	export interface IUIOptions {
		apiDocs?: string;
		apiDocsPrefix?: string;
		swaggerUi?: string;
		swaggerUiDir?: string;
		swaggerUiPrefix?: string;
	}

	export interface IValidatorOptions {
		validateResponse?: boolean;
	}

	export interface IMiddleware {
		swaggerMetadata(rlOrSO?: any, apiDeclarations?: any[]): void;
		swaggerSecurity(options?: any): void;
		swaggerValidator(options?: IValidatorOptions): void;
		swaggerRouter(options?: IRouterOptions): void;
		swaggerUi(options?: IUIOptions): void;
	}

	export interface IValidationResponse {
		apiDeclarations: any[];
		errors: any[];
		warnings: any[];
	}

	export interface IValidationError {
		code: string;
		message: string;
		path: string[];
		description: string;
		inner?: IValidationError[];
	}

	export interface ISpecification {
		docsUrl: string;
		primitives: string[];
		schemas: any;
		schemasUrl: string;
		validators: any;
		version: string;
		composeModel(aDOrSO: any, modelIdOrPtr: string, callback: (err: any, res: any) => void): void;
		convert(resourceListing: any, apiDeclarations: any[], skipValidation: boolean, callback: (err: any, res: any) => void): void;
		resolve(document: any, ptr: string, callback: (err: any, res: any) => void): void;
		validate(rLOrSO: any, apiDeclarations: any[], callback: (err: any, res: any) => void): void;
		validateModel(aDOrSO: any, modelIdOrRef: string, data: any|any[], callback: (err: any, res: any) => void): void;
	}

	export interface ISpecifications {
		v1: ISpecification;
		v1_2: ISpecification;
		v2: ISpecification;
		v2_0: ISpecification;
	}

	export type MiddlewareCallback = (middleware: IMiddleware) => void;
	export type AuthCallback = (req: http.ClientRequest, authOrSecDef: any, scopesOrApiKey: any, callback: AuthCallbackCallback) => void;
	export type AuthCallbackCallback = (scopesOrApiKey: any) => void;

	export function initializeMiddleware(rlOrSO: any, resources: any[], callback: MiddlewareCallback): void;
	export function initializeMiddleware(rlOrSO: any, callback: MiddlewareCallback): void;

	export var specs: ISpecifications;
}

export = swagger;