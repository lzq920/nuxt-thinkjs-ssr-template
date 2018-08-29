const qs = require("querystring");
const axios = require("axios");
module.exports = {
  async FetchData(url, method, data) {
    let userinfo = await this.session("userinfo");
    let Token = null;
    if (userinfo) {
      Token = userinfo.Token;
    }
    return axios({
      baseURL: this.config("remote"),
      url: url,
      method: method,
      data: qs.stringify(data || {}),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Token: Token
      }
    })
      .then(res => {
        console.log(res.data);
        return {
          Status: res.status,
          Data: res.data
        };
      })
      .catch(err => {
        switch (err.response.status) {
          case 404:
            return { Status: err.response.status, Data: "接口未定义" };
            break;
          case 401:
            return { Status: err.response.status, Data: "用户未登录" };
            break;
          case 500:
            return { Status: err.response.status, Data: "服务器错误" };
            break;
          default:
            if (think.isArray(err.response.data)) {
              return {
                Status: err.response.status,
                Data: err.response.data[0].message
              };
            } else {
              return {
                Status: err.response.status,
                Data: err.response.data.message
              };
            }
            break;
        }
      });
  }
};
