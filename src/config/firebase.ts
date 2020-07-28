const AUTH_ERROR = {
  'auth/email-already-in-use': 'Este e-mail já está em uso!',
  'auth/invalid-email': 'Este e-mail é invalido!',
};

export const getError = (code: string) => {
  console.log(code);
  return AUTH_ERROR[code] || code;
};
