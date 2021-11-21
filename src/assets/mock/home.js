import Mock from "mockjs"

let List = []
export default {
  getStatisticalData: () => {
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          vue: Mock.Random.float(1000, 10000, 0, 2),
          SpringBoot: Mock.Random.float(1000, 10000, 0, 2),
          wechat: Mock.Random.float(1000, 10000, 0, 2),
          Java: Mock.Random.float(1000, 10000, 0, 2),
          Css: Mock.Random.float(1000, 10000, 0, 2),
          ES6: Mock.Random.float(1000, 10000, 0, 2),
        })
      )
    }
    return {
      code: 20000,
      data: {
        videoData: [
          {
            name: "SpringBoot",
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: "Vue",
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: "wechat",
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: "Java",
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: "Css",
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: "ES6",
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
        ],
        tableData: [
          {
            name: "SpringBoot",
            todayBuy: Mock.Random.float(1000, 10000, 0, 2),
            monthBuy: Mock.Random.float(1000, 10000, 0, 2),
            totalBuy: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: "Vue",
            todayBuy: Mock.Random.float(1000, 10000, 0, 2),
            monthBuy: Mock.Random.float(1000, 10000, 0, 2),
            totalBuy: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: "wechat",
            todayBuy: Mock.Random.float(1000, 10000, 0, 2),
            monthBuy: Mock.Random.float(1000, 10000, 0, 2),
            totalBuy: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: "Java",
            todayBuy: Mock.Random.float(1000, 10000, 0, 2),
            monthBuy: Mock.Random.float(1000, 10000, 0, 2),
            totalBuy: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: "Css",
            todayBuy: Mock.Random.float(1000, 10000, 0, 2),
            monthBuy: Mock.Random.float(1000, 10000, 0, 2),
            totalBuy: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: "ES6",
            todayBuy: Mock.Random.float(1000, 10000, 0, 2),
            monthBuy: Mock.Random.float(1000, 10000, 0, 2),
            totalBuy: Mock.Random.float(1000, 10000, 0, 2),
          },
        ],
        orderData: {
          data: [
            {
              vue: Mock.Random.float(1000, 10000, 0, 2),
              SpringBoot: Mock.Random.float(1000, 10000, 0, 2),
              wechat: Mock.Random.float(1000, 10000, 0, 2),
              Java: Mock.Random.float(1000, 10000, 0, 2),
              Css: Mock.Random.float(1000, 10000, 0, 2),
              ES6: Mock.Random.float(1000, 10000, 0, 2),
            },
            {
              vue: Mock.Random.float(1000, 10000, 0, 2),
              SpringBoot: Mock.Random.float(1000, 10000, 0, 2),
              wechat: Mock.Random.float(1000, 10000, 0, 2),
              Java: Mock.Random.float(1000, 10000, 0, 2),
              Css: Mock.Random.float(1000, 10000, 0, 2),
              ES6: Mock.Random.float(1000, 10000, 0, 2),
            },
            {
              vue: Mock.Random.float(1000, 10000, 0, 2),
              SpringBoot: Mock.Random.float(1000, 10000, 0, 2),
              wechat: Mock.Random.float(1000, 10000, 0, 2),
              Java: Mock.Random.float(1000, 10000, 0, 2),
              Css: Mock.Random.float(1000, 10000, 0, 2),
              ES6: Mock.Random.float(1000, 10000, 0, 2),
            },
            {
              vue: Mock.Random.float(1000, 10000, 0, 2),
              SpringBoot: Mock.Random.float(1000, 10000, 0, 2),
              wechat: Mock.Random.float(1000, 10000, 0, 2),
              Java: Mock.Random.float(1000, 10000, 0, 2),
              Css: Mock.Random.float(1000, 10000, 0, 2),
              ES6: Mock.Random.float(1000, 10000, 0, 2),
            },
            {
              vue: Mock.Random.float(1000, 10000, 0, 2),
              SpringBoot: Mock.Random.float(1000, 10000, 0, 2),
              wechat: Mock.Random.float(1000, 10000, 0, 2),
              Java: Mock.Random.float(1000, 10000, 0, 2),
              Css: Mock.Random.float(1000, 10000, 0, 2),
              ES6: Mock.Random.float(1000, 10000, 0, 2),
            },
            {
              vue: Mock.Random.float(1000, 10000, 0, 2),
              SpringBoot: Mock.Random.float(1000, 10000, 0, 2),
              wechat: Mock.Random.float(1000, 10000, 0, 2),
              Java: Mock.Random.float(1000, 10000, 0, 2),
              Css: Mock.Random.float(1000, 10000, 0, 2),
              ES6: Mock.Random.float(1000, 10000, 0, 2),
            },
            {
              vue: Mock.Random.float(1000, 10000, 0, 2),
              SpringBoot: Mock.Random.float(1000, 10000, 0, 2),
              wechat: Mock.Random.float(1000, 10000, 0, 2),
              Java: Mock.Random.float(1000, 10000, 0, 2),
              Css: Mock.Random.float(1000, 10000, 0, 2),
              ES6: Mock.Random.float(1000, 10000, 0, 2),
            },
            {
              vue: Mock.Random.float(1000, 10000, 0, 2),
              SpringBoot: Mock.Random.float(1000, 10000, 0, 2),
              wechat: Mock.Random.float(1000, 10000, 0, 2),
              Java: Mock.Random.float(1000, 10000, 0, 2),
              Css: Mock.Random.float(1000, 10000, 0, 2),
              ES6: Mock.Random.float(1000, 10000, 0, 2),
            },
            {
              vue: Mock.Random.float(1000, 10000, 0, 2),
              SpringBoot: Mock.Random.float(1000, 10000, 0, 2),
              wechat: Mock.Random.float(1000, 10000, 0, 2),
              Java: Mock.Random.float(1000, 10000, 0, 2),
              Css: Mock.Random.float(1000, 10000, 0, 2),
              ES6: Mock.Random.float(1000, 10000, 0, 2),
            },
            {
              vue: Mock.Random.float(1000, 10000, 0, 2),
              SpringBoot: Mock.Random.float(1000, 10000, 0, 2),
              wechat: Mock.Random.float(1000, 10000, 0, 2),
              Java: Mock.Random.float(1000, 10000, 0, 2),
              Css: Mock.Random.float(1000, 10000, 0, 2),
              ES6: Mock.Random.float(1000, 10000, 0, 2),
            },
            {
              vue: Mock.Random.float(1000, 10000, 0, 2),
              SpringBoot: Mock.Random.float(1000, 10000, 0, 2),
              wechat: Mock.Random.float(1000, 10000, 0, 2),
              Java: Mock.Random.float(1000, 10000, 0, 2),
              Css: Mock.Random.float(1000, 10000, 0, 2),
              ES6: Mock.Random.float(1000, 10000, 0, 2),
            },
            {
              vue: Mock.Random.float(1000, 10000, 0, 2),
              SpringBoot: Mock.Random.float(1000, 10000, 0, 2),
              wechat: Mock.Random.float(1000, 10000, 0, 2),
              Java: Mock.Random.float(1000, 10000, 0, 2),
              Css: Mock.Random.float(1000, 10000, 0, 2),
              ES6: Mock.Random.float(1000, 10000, 0, 2),
            },
            {
              vue: Mock.Random.float(1000, 10000, 0, 2),
              SpringBoot: Mock.Random.float(1000, 10000, 0, 2),
              wechat: Mock.Random.float(1000, 10000, 0, 2),
              Java: Mock.Random.float(1000, 10000, 0, 2),
              Css: Mock.Random.float(1000, 10000, 0, 2),
              ES6: Mock.Random.float(1000, 10000, 0, 2),
            },
            {
              vue: Mock.Random.float(1000, 10000, 0, 2),
              SpringBoot: Mock.Random.float(1000, 10000, 0, 2),
              wechat: Mock.Random.float(1000, 10000, 0, 2),
              Java: Mock.Random.float(1000, 10000, 0, 2),
              Css: Mock.Random.float(1000, 10000, 0, 2),
              ES6: Mock.Random.float(1000, 10000, 0, 2),
            },
          ],
          date: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        },
      },
    }
  },
}
