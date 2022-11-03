export function getBatteryColor(load: number): string {
  if (load < 0) {
    // warning color for charging batteries
    return "#ff0000";
  }
  if (load > 0) {
    // color for using batteries
    return "#4bbb33";
  }
  return "#ffffff";
}

export function getSolarPanelColor(load: number): string {
  if (load > 0) {
    // active panels color
    return "#f2bf27";
  }
  return "#5b4d24";
}
