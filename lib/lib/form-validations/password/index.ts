const hasCapitalLetter = (pwd: string) => /[A-Z]/.test(pwd);
const hasSmallLetter = (pwd: string) => /[a-z]/.test(pwd);
const hasNumber = (pwd: string) => /[0-9]/.test(pwd);
const validPwd = (pwd: string) => {
  return (
    pwd?.length > 6 &&
    hasCapitalLetter(pwd) &&
    hasSmallLetter(pwd) &&
    hasNumber(pwd)
  );
};

const PasswordErrorMapper = {
  NUMBER: "* Pelo menos 1 número (0...9)",
  SMALL_LETTER: "* Pelo menos 1 letra minúscula (a...z)",
  CAPITAL_LETTER: "* Pelo menos 1 letra maiúscula (A...Z) ",
  MIN_CHARACTER: "* Pelo menos 6 caracteres",
};

export {
  PasswordErrorMapper,
  hasCapitalLetter,
  hasNumber,
  hasSmallLetter,
  validPwd,
};
