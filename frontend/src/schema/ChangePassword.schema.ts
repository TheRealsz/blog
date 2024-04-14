import { z } from "zod"
import { signUpFormSchema } from "./SignUpForm.schema"

export const changePasswordSchema = z.object({
    newPassword: signUpFormSchema.shape.password
})

type ChangePasswordSchemaType = z.infer<typeof changePasswordSchema>

export default ChangePasswordSchemaType