interface EnvType {
    loginConnect: string | undefined
}

export const env : EnvType = {
    loginConnect: process.env.NODE_PASSWORD_MONGODB
}