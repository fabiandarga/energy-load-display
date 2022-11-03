<template>
  <Line :chartData="chartData" :height="120" :chart-options="options" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import type { Tuple } from "@/types/Table";
import { getBatteryColor, getSolarPanelColor } from "@/utils/ColorUtils";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale
);

const props = defineProps(["labels", "columns", "timeStops"]);

// Hardcoded for now
const colors = ["#a108a1", "#c9ecac", "#f2bf27", "#5ac1ff"];

const chartData = computed(() => {
  return {
    labels: props.timeStops,
    hoverBorderWidth: 5,
    datasets: props.columns.map((column: Tuple, index: number) => ({
      label: props.labels[index],
      backgroundColor: (pointData: any) => {
        if (index === 1) {
          return getBatteryColor(pointData.raw);
        }
        if (index === 2) {
          return getSolarPanelColor(pointData.raw);
        }
        // default color
        return "#b7b7b7";
      },
      borderColor: colors[index],
      pointStyle: "rect",
      pointRadius: 5,
      data: column,
    })),
  };
});

const options = {
  plugins: {
    legend: {
      onClick: function () {},
    },
  },
};
</script>
