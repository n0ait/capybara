"use server";

import * as z from "zod";
import { LoginSchema } from "@/schemas";

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validateFields = LoginSchema.safeParse(values);

    if(!validateFields.success){
        return { error: "Mail ou mot de passe invalides" }
    }

    return { success: "Un mail de vérification vous a été envoyé !" }
}