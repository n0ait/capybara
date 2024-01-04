"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validateFields = RegisterSchema.safeParse(values);

    if(!validateFields.success){
        return { error: "Un des champs est invalide" }
    }

    return { success: "Un mail de vérification vous a été envoyé !" }
}