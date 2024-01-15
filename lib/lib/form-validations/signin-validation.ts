import { z } from "zod";
import {
  PasswordErrorMapper,
  hasCapitalLetter,
  hasNumber,
  hasSmallLetter,
} from "./password";

export const signinValidation = z.object({
  email: z
    .string({ required_error: "* Campo obrigatório." })
    .email({ message: "* E-mail inválido." }),
  password: z
    .string({ required_error: "* Campo obrigatório." })
    .min(6, { message: PasswordErrorMapper.MIN_CHARACTER })
    .refine(
      (pwd) => {
        return hasSmallLetter(pwd);
      },
      { message: PasswordErrorMapper.SMALL_LETTER }
    )
    .refine(
      (pwd) => {
        return hasCapitalLetter(pwd);
      },
      { message: PasswordErrorMapper.CAPITAL_LETTER }
    )
    .refine(
      (pwd) => {
        return hasNumber(pwd);
      },
      { message: PasswordErrorMapper.NUMBER }
    ),
});

export type SigninValidation = z.infer<typeof signinValidation>;
