export const getErrorMessage = (error: any) => {
  if (error.data) {
    return error.data.message;
  }

  return error.message;
};
