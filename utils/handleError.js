import { AxiosError } from "axios";

const handleError = (error) => {
  let message = "Something went wrong";
  if (error instanceof AxiosError) {
    throw new Error(error.response.data.message);
  }
  if (error.message === "Network Error") {
    message = "Something wrong with your connection";
  }

  throw new Error(message);
};

export default handleError;
