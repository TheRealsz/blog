import { z } from "zod"
import { signUpFormSchema } from "./SignUpForm.schema"

export const editProfileSchema = z.object({
    newFullname: signUpFormSchema.shape.fullname
})

type EditProfileFormType = z.infer<typeof editProfileSchema>

export default EditProfileFormType