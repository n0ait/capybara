"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import bycrpt from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByMail } from "@/data/users";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(values);

  if(!validateFields.success){
    return { error: "Un des champs est invalide" }
  }

  const { email, password, name } = validateFields.data;
  const hashedPassword = await bycrpt.hash(password, 10);

  const existingUser = await getUserByMail(email);

  if (existingUser){
    return { error: "Un utilisateur avec cet e-mail existe déjà !" }
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    }
  })

  //TODO: send verification email

  return { success: "Un mail de vérification vous a été envoyé !" }
}