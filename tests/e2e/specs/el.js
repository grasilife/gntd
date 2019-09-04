it("输入搜索词，结果正确展示", () => {
  cy.visit("https://h5.ele.me/");
  // 点击跳转搜索页面
  cy.get(".search").click();

  cy.wait(200);
  cy.get("input").type("麻辣烫");

  cy.get("button").click();

  // 目标页面地址包含 search 点击列表第一项
  cy.wait(500);
  cy.url().should("include", "search");
  cy.get(".shop")
    .first()
    .click();

  // 跳转至商家详情页，找到购物车元素
  cy.wait(500);
  cy.g;
});
