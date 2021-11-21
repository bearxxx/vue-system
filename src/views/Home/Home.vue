<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover" style="height: 290px">
        <div class="user">
          <img :src="userImg" alt="" />
          <div class="userinfo">
            <p class="name">Nick</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间：<span>2019-10-20</span></p>
          <p>上次登录地点：<span>北京</span></p>
        </div>
      </el-card>
      <el-card shadow="hover" style="height: 522px; margin-top: 28px">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column show-overflow-tooltip :prop="key" :label="val" width="80" v-for="(val, key) in tableLable" :key="key"> </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16">
      <div class="num">
        <el-card shadow="hover" v-for="item in countData" :key="item.name" body-style="display: flex;align-items: center;padding:0">
          <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }"></i>
          <div class="datail">
            <p class="nums">￥ {{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card shadow="hover">
        <echart style="height: 280px" :chartData="echartData.order"></echart>
      </el-card>
      <div class="graph">
        <el-card shadow="hover">
          <echart style="height: 260px"></echart>
        </el-card>
        <el-card shadow="hover">
          <echart style="height: 260px"></echart>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Echart from "../../components/Echart.vue"

export default {
  components: { Echart },
  data() {
    return {
      userImg: require("../../assets/images/user.jpg"),
      tableData: [],
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 1234,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 1234,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
      tableLable: {
        name: "课程名",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买",
      },
      echartData: {
        order: {
          xData: [],
          series: [],
        },
        user: {
          xData: [],
          series: [],
        },
        video: {
          series: [],
        },
      },
    }
  },
  methods: {
    getTableData() {
      this.$http.get("/home/getData").then((res) => {
        res = res.data
        this.tableData = res.data.tableData
        //订单折线图
        const order = res.data.orderData
        this.echartData.order.xData = order.date
        //第一步去除serie中的name部分-键名
        let keyArray = Object.keys(order.data[0])
        keyArray.forEach((key) => {
          this.echartData.order.series.push({
            name: key === "wechat" ? "小程序" : key,
            data: order.data.map((item) => item[key]),
            type: "line",
          })
        })
      })
    },
  },
  created() {
    this.getTableData()
  },
  mounted() {},
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/home.scss";
</style>
