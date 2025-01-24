const { getRandomArrayElement } = require("../src/values");

//Random test
let arr = [2, 3, 4];
describe("should get one value from array", () => {
  it("should check get random array elem fn", () => {
    expect(
      parseInt(getRandomArrayElement(Object.keys(arr)))
    ).toBeLessThanOrEqual(2);
  });
});
