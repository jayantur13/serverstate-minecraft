const { fetchApi } = require("../src/theApi");
require("dotenv").config();
const axios = require("axios");

jest.mock("axios");

let mdata = {
  hostname: "server.pokecentral.org",
};

let bdata = {
  hostname: "play.primegames.net",
};

let status = {
  online: true,
};
describe("Basic Api Testing", () => {
  it("should return java hostname", async () => {
    axios.get.mockResolvedValue(mdata.hostname);
    const res = await fetchApi("server.pokecentral.org", "java");
    expect(res).toEqual(mdata.hostname);
  });
  it("should return bedrock hostname", async () => {
    axios.get.mockResolvedValue(bdata.hostname);
    const res = await fetchApi("play.primegames.net", "bedrock");
    expect(res).toEqual(bdata.hostname);
  });
  it("should check status (java)", async () => {
    axios.get.mockResolvedValue(status.online);
    const res = await fetchApi("server.pokecentral.org", "java");
    expect(res).toEqual(status.online);
  });
  it("should check status (bedrock)", async () => {
    axios.get.mockResolvedValue(status.online);
    const res = await fetchApi("play.primegames.net", "bedrock");
    expect(res).toEqual(status.online);
  });
  //False
  it("should check status (online/offline)", async () => {
    axios.get.mockResolvedValue(status.online === true ? true : false);
    const res = await fetchApi("prime", "java");
    expect(res).toEqual(status.online === true ? true : false);
  });
  it("should check status (java http code !200)", async () => {
    const err = new Error("http error");
    axios.get.mockRejectedValueOnce(err);
    await fetchApi(null, "java").catch((err) => {
      expect(err).toEqual(err);
    });
  });
  it("should check status (bedrock http code !200)", async () => {
    const err = new Error("http error");
    axios.get.mockRejectedValueOnce(err);
    await fetchApi(null, "bedrock").catch((err) => {
      expect(err).toEqual(err);
    });
  });
  it("should check length of srvAddress & srvType", async () => {
    axios.get.mockResolvedValue("Server address & type required");
    const res = await fetchApi("", "");
    expect(res).toEqual("Server address & type required");
  });
  it("should check length of srvAddress & srvType", async () => {
    axios.get.mockResolvedValue("Server address or type is missing");
    const res = await fetchApi("", "java");
    expect(res).toEqual("Server address or type is missing");
  });
});
