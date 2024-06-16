import { z } from "zod"
import { signUpFormSchema } from "./SignUpForm.schema"

export const deleteAccountSchema = z.object({
    email: signUpFormSchema.shape.email
})

type DeleteAccountSchemaType = z.infer<typeof deleteAccountSchema>

export default DeleteAccountSchemaType