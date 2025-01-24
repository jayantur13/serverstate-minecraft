const axios = require("axios");

const fetchApi = async (srvAddress, srvType) => {
  if (srvAddress.length === 0 && srvType.length === 0) {
    return "Server address & type required";
  } else if (srvAddress.length === 0 || srvType.length === 0) {
    return "Server address or type is missing";
  } else {
    if (srvType === "java") {
      let data = await axios.get(process.env.MAIN_URL + srvAddress);
      return data;
    } else {
      let data = await axios.get(process.env.BEDROCK_URL + srvAddress);
      return data;
    }
  }
};

module.exports = { fetchApi };
