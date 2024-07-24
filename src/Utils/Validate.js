export const CheckValidate = (email, password) => {
  const isemailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const ispasswordvalid =
    /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

  if (!isemailValid) return "Email is not valid";
  if (!ispasswordvalid) return "Password is not valid";

  return null;
};
