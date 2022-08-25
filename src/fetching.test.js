import { describe, expect, test } from "@jest/globals";
import { fetchQuizFromApi } from "./utils/api";

//testing API
describe("fetching data", () => {
  test("data", async () => {
    await expect(fetchQuizFromApi()).toEqual({ category: "Geography" });
  });
});
