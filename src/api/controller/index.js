const Base = require("./base.js");
module.exports = class extends Base {
  async loginAction() {
    const data = await this.FetchData("/admin/user/login", "post", {
      Phone: "18888888888",
      Password: "123456"
    });
    if (data.Status === 200) {
      await this.session("userinfo", data.Data);
      this.success(data.Data);
    } else {
      this.status = data.Status;
      this.fail(data.Status, data.Data);
    }
  }
  async logoutAction() {
    const data = await this.FetchData("/admin/user/logout", "post", {});
    if (data.Status === 200) {
      await this.session(null);
      this.success(data.Data);
    } else {
      this.status = data.Status;
      this.fail(data.Status, data.Data);
    }
  }
  async listAction() {
    const data = await this.FetchData("/admin/hospital/list", "post", {});
    if (data.Status === 200) {
      this.success(data.Data);
    } else {
      this.status = data.Status;
      this.fail(data.Status, data.Data);
    }
  }
};
