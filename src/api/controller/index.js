const Base = require("./base.js");
const qs = require("querystring");
const axios = require("axios");
module.exports = class extends Base {
  async indexAction() {
    await axios({
      url: "https://cloud.dev.100cbc.com/admin/user/login",
      method: "post",
      data: qs.stringify({
        Phone: "18888888888",
        Password: "123456"
      }),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
      .then(res => {
        this.success(res.status, res.data);
      })
      .catch(err => {
        if (think.isArray(err.response.data)) {
          this.fail(err.response.status, err.response.data[0].message);
        } else {
          this.fail(err.response.status, err.response.data.message);
        }
      });
  }
};
