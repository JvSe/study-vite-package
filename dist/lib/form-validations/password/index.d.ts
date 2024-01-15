declare const hasCapitalLetter: (pwd: string) => boolean;
declare const hasSmallLetter: (pwd: string) => boolean;
declare const hasNumber: (pwd: string) => boolean;
declare const validPwd: (pwd: string) => boolean;
declare const PasswordErrorMapper: {
    NUMBER: string;
    SMALL_LETTER: string;
    CAPITAL_LETTER: string;
    MIN_CHARACTER: string;
};
export { PasswordErrorMapper, hasCapitalLetter, hasNumber, hasSmallLetter, validPwd, };
