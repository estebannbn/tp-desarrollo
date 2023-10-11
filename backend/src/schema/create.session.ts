import { object, string, TypeOf } from "zod";

export const createSessionSchema = object({
    body: object({
        email: string({
            required_error: 'Required email'
        }).email('Not a valid email'),
        password: string({
            required_error: 'Required password'
        })
    })
});

export type CreateSessionInput = TypeOf<typeof createSessionSchema>['body'];