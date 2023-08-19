import { test, expect } from "@playwright/test";

test.describe.parallel("API Delete Testing", () => {
  const baseUrl = "https://reqres.in/api";

  //Positive test to check user can be found
  test("Delete Request - Delete User", async ({ request }) => {
    const response = await request.delete(`${baseUrl}/users/2`);
    expect(response.status()).toBe(204);
  });
});
