import request from "@/utils/request";

export function getTableData(data) {
  return request({
    url: "/mock/test",
    method: "post",
    data
  });
}
export function getTestData() {
  return request({
    url: "/rest/test/find",
    method: "get"
  });
}
