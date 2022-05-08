import supertest from "supertest";
import assert from "assert";
import app from "../../../index";

const server = supertest(app);

describe("Image transform endpoint testing", () => {
  it("Expect endpoint to throw a specific error as input image is missing", async () => {
    await server
      .get("/api/images?fileName=missing&width=100&height=100")
      .expect((response) => {
        assert.ok(response.text.includes("Image not found!"));
      });
  });

  it("Expect endpoint to throw a specific error as image size is invalid", async () => {
    await server
      .get("/api/images?fileName=fjord&width=aaa&height=bbb")
      .expect((response) => {
        assert.ok(response.text.includes("Invalid image size!"));
      });
  });
});
