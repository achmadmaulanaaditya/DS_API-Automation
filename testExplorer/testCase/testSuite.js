const {
  getMethod,
  postMethod,
  putMethod,
  patchMethod,
} = require("../apiServer/apiObjects");

//Test Suites
describe("Testing API restful", function () {
  let id;
  // Test POST
  it("Test POST from Function", async function () {
    id = await postMethod();
  });
  // Test PATCH
  it("Test PATCH from Function", async function () {
    await patchMethod(id);
  });
  // Test PUT
  it("Test PUT from Function", async function () {
    await putMethod(id);
  });
  // Test GET
  it("Test GET from Function", async function () {
    await getMethod(id);
  });
});
