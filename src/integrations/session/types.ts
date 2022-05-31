export type TLoginData = {
    email: string;
    password: string;
}

export type TUserResponse = {
    user: {
        email: string
        name: string
    },
    auth: {
        type: string
        token: string
    }
}