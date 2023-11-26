import { AxiosError } from "axios";

const handleError = (error) => {
  if (error instanceof AxiosError) {
    throw new Error(error.response.data.message);
  }

  throw new Error("Something went wrong");
};

export default handleError;
