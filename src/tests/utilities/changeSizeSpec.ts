import changeSize from "../../utilities/changeSize";
import path from "path";

describe("Testing image tranformation function", (): void => {
  it("Expected to reject with Input file is missing error", async (): Promise<void> => {
    const returned = changeSize(
      path.resolve("assets/full/fjord123.jpg"),
      path.resolve("assets/thumb/fjord123_100x100.jpg"),
      100,
      100
    );
    await expectAsync(returned).toBeRejectedWithError(/Input file is missing/);
  });

  it("Expected to resolve without errors", async (): Promise<void> => {
    const returned = changeSize(
      path.resolve("assets/full/fjord.jpg"),
      path.resolve("assets/thumb/fjord_100x100.jpg"),
      100,
      100
    );
    await expectAsync(returned).toBeResolved();
  });
});
