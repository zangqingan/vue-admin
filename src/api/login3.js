import instance from "@/utils/request.js";

// 获取验证码
export function getSms(data) {
  return instance.request({
    method: "post",
    url: "/getSms/",
    data
  });
}
