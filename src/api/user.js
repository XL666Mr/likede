import request from "@/utils/request";

export function login(clientToken, ruleForm) {
  return request({
    headers: {
      "Content-Type": "application/json",
    },
    url: "/api/user-service/user/login",
    method: "post",
    data: {
      clientToken: clientToken,
      code: ruleForm.verificationCode,
      loginName: ruleForm.pass,
      loginType: 0,
      password: ruleForm.checkPass,
    },
  });
}

// 图片验证码
export function imageCode(clientToken) {
  return request({
    headers: {
      "Content-Type": "application/json",
    },
    url: `/api/user-service/user/imageCode/${clientToken}`,
  });
}
