import { HttpResponse } from "../models/httpResponse-models";


export const ok = async (data: any): Promise<HttpResponse> => {
    return {
        status: 200,
        body: data
    };
};

export const notFound = (message: string): HttpResponse => {
    return {
        status: 404,
        body: { error: message }
    };
};

export const noContent = async (): Promise<HttpResponse> => {
    return {
        status: 204,
        body: null
    };
}