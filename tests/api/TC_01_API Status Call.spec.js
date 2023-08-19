import { test, expect } from "@playwright/test";

test.describe.parallel("API Testing", () => {
  const baseUrl = "https://reqres.in/api";

  test("SImple API Test - Assert Response Status", async ({ request }) => {
    const response = await request.get(`${baseUrl}/users/2`);
    expect(response.status()).toBe(200);
  });

  test("SImple API Test - Assert Invalid Endpoint", async ({ request }) => {
    const response = await request.get(
      `${baseUrl}/users/non-existing-end-point`
    );
    expect(response.status()).toBe(404);
  });
});
