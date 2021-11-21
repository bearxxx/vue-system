<template>
  <div style="height: 100%" ref="echart">echart</div>
</template>

<script>
import * as echarts from "echarts"
import { $ref } from "vue"
export default {
  props: {
    chartData: {
      type: Object,
      default() {
        return {
          xData: [],
          series: [],
        }
      },
    },
    isAxisChart: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    options() {
      return this.isAxisChart ? this.axisOption : this.normalOption
    },
  },
  data() {
    return {
      echart: null,
      axisOption: {
        xAxis: [
          {
            type: "category",
            data: [],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [],
      },
      normalOption: {
        series: [],
      },
    }
  },
  methods: {
    initChart() {
      this.initChartData()
      if (this.echart) {
        this.echart.setOption(this.options)
      } else {
        this.echart = echarts.init(this.$refs.echart)
        this.echart.setOption(this.options)
      }
    },
    initChartData() {
      if (this.isAxisChart) {
        this.axisOption.xAxis.data = this.chartData.xData
        this.axisOption.series = this.chartData.series
      } else {
        console.log("option")
      }
    },
  },
  watch: {
    chartData: {
      handler: function () {
        this.initChart()
      },
      deep: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
