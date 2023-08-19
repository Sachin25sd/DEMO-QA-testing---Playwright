import { test, expect } from "@playwright/test";

test.describe.parallel("API Testing", () => {
  const baseUrl = "https://reqres.in/api";

  //Positive test to check user can be found
  test("Get Request - Assert Response Status", async ({ request }) => {
    const response = await request.get(`${baseUrl}/users/2`);
    expect(response.status()).toBe(200);

    const responseBody = JSON.parse(await response.text());
  });

  //Negative test to confirm invalid endpoint
  test("Get Request - Assert Invalid Endpoint", async ({ request }) => {
    const response = await request.get(
      `${baseUrl}/users/non-existing-end-point`
    );
    expect(response.status()).toBe(404);
  });

  //Get Request
  test.only("Get Request - Get user details", async ({ request }) => {
    const response = await request.get(`${baseUrl}/users/1`);
    const responseBody = JSON.parse(await response.text());

    expect(response.status()).toBe(200);
    expect(responseBody.data.id).toBe(1);
    expect(responseBody.data.first_name).toBe("George");
    expect(responseBody.data.last_name).toBe("Bluth");
    expect(responseBody.data.email).toBeTruthy();
  });
});
