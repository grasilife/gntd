import request from "@/utils/request";

export function getchannelApi() {
  return request({
    url: "/vod/getchannel",
    method: "get"
  });
}
