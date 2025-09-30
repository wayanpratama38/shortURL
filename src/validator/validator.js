import { UrlPayloadSchema } from "./scheme.js"


export const UrlValidator = {
    validateUrlPayload : (payload) => {
        const result = UrlPayloadSchema.validate(payload)
        if(result.error){
            throw new Error("Error karena payload salah")
        }
    }
}