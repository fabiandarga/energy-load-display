export type TimeEntry = [string, number, number, number, number];

export interface EnergyData {
  head: Array<string>;
  data: Array<TimeEntry>;
}

function loadData(): EnergyData {
  return {
    head: ["Time", "Engines", "Batteries", "Solar Panels", "Total load"],
    data: [
      ["0:00", 26, 29, 0, 55],
      ["0:10", 27, 29, 0, 56],
      ["0:20", 31, 29, 0, 60],
      ["0:30", 31, 30, 0, 61],
      ["0:40", 36, 29, 0, 65],
      ["0:50", 37, 30, 0, 67],
      ["1:00", 41, 29, 0, 70],
      ["1:10", 51, 24, 0, 75],
      ["1:20", 61, 19, 0, 80],
      ["1:30", 69, 16, 0, 85],
      ["1:40", 71, 15, 0, 86],
      ["1:50", 70, 11, 0, 81],
      ["2:00", 78, -2, 2, 78],
      ["2:10", 74, -3, 4, 75],
      ["2:20", 69, -6, 8, 71],
      ["2:30", 67, -11, 13, 69],
      ["2:40", 65, -11, 14, 68],
      ["2:50", 62, -16, 19, 65],
      ["3:00", 58, -18, 22, 62],
      ["3:10", 57, -22, 25, 60],
      ["3:20", 51, -21, 26, 56],
      ["3:30", 51, -23, 27, 55],
      ["3:40", 53, -23, 28, 58],
      ["3:50", 56, -25, 30, 61],
      ["4:00", 58, -25, 31, 64],
      ["4:10", 61, -27, 32, 66],
      ["4:20", 67, -29, 33, 71],
      ["4:30", 70, -26, 30, 74],
      ["4:40", 75, -21, 25, 79],
      ["4:50", 80, -17, 20, 83],
      ["5:00", 84, -12, 15, 87],
      ["5:10", 91, -9, 10, 92],
      ["5:20", 93, -7, 9, 95],
      ["5:30", 99, -5, 6, 100],
      ["5:40", 104, -2, 3, 105],
      ["5:50", 105, -1, 2, 106],
      ["6:00", 108, 3, 0, 111],
    ],
  };
}

export default loadData;
