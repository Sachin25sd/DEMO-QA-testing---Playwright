import { test, expect } from "@playwright/test";

test.describe.parallel("API Put Testing", () => {
  const baseUrl = "https://reqres.in/api";

  //Positive test to check user can be found
  test("Put Request - Update User", async ({ request }) => {
    const response = await request.put(`${baseUrl}/users/2`, {
      data: {
        name: "Buggy D Clown",
        job: "Emperor of the Sea",
      },
    });
    const responseBody = JSON.parse(await response.text());

    expect(response.status()).toBe(200);
    expect(responseBody.name).toBe("Buggy D Clown");
    expect(responseBody.job).toBe("Emperor of the Sea");
    expect(responseBody.updatedAt).toBeTruthy();
  });
});
