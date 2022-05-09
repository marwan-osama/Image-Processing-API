import supertest from "supertest";
import app from "../index";

const server = supertest(app);

describe("Endpoint testing", (): void => {
  it("Expect to get the api/images endpoint", async (): Promise<void> => {
    const response = await server.get("/api/images");
    expect(response.status).toBe(200);
  });
});
