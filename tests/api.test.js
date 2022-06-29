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
  it("should return main hostname", async () => {
    axios.get.mockResolvedValue(mdata.hostname);
    const res = await fetchApi("server.pokecentral.org", "main");
    expect(res).toEqual(mdata.hostname);
  });
  it("should return bedrock hostname", async () => {
    axios.get.mockResolvedValue(bdata.hostname);
    const res = await fetchApi("play.primegames.net", "bedrock");
    expect(res).toEqual(bdata.hostname);
  });
  it("should check status (main)", async () => {
    axios.get.mockResolvedValue(status.online);
    const res = await fetchApi("server.pokecentral.org", "main");
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
    const res = await fetchApi("prime", "main");
    expect(res).toEqual(status.online === true ? true : false);
  });
  it("should check status (main http code !200)", async () => {
    const err = new Error("http error");
    axios.get.mockRejectedValueOnce(err);
    await fetchApi(null, "main").catch((err) => {
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
    axios.get.mockResolvedValue("Please provide server address & type");
    const res = await fetchApi("", "");
    expect(res).toEqual("Please provide server address & type");
  });
  it("should check length of srvAddress & srvType", async () => {
    axios.get.mockResolvedValue(
      "Server address or type is missing,required both"
    );
    const res = await fetchApi("", "main");
    expect(res).toEqual("Server address or type is missing,required both");
  });
});
