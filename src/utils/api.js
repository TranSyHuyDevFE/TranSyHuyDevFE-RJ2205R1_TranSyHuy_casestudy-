import axios from "axios";

const apiUrl = "https://opentdb.com/api.php?amount=15&type=boolean";
export const fetchQuizFromApi = () => {
  return axios
    .get(apiUrl)
    .then((res) => res.data)
    .then((question) => question.results)
    .catch((err) => {
      throw err;
    });
};
