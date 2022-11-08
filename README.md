# Energy Load Display

This is a small example of data visualization.  

## Features
* Data Table aligns with the chart
* Chart and Table have an indicator for battery and solar panel status

## Up Next
Possible upgrades
* When I hover over a data point in the chart or the table the other needs to get a hightlight as well
* status dependent color for the lines (not only the points) in the graph, for battery and solar
* Some interactive Elements:
### Forecast Controls
I would like to add the option to adjust the values of each point in time:
* toggle the battery loading (using/loading/waiting)
* slider to set engine levels (0-100%)

When the controls are used, we could show an alternative line in the graph which respects the changes.
This way the operator could see which effect her actions would have in the forecast.

### Warnings
There could be warning if the load needs to be kept inside specific parameters. Maybe the engine load needs to be kept below 100. We could show a red horizontal line in the graph and maybe some info messages below the table. E.g.:
> "Warning: at 1:30 total load is expect to rise above 80"  
> "Warning: at 2:00 the batteries are empty"  
> "Warning: at 4:50 total load is expect to rise above 80"  
> "Danger: at 5:30 total load is expect to rise above 100"
## Project Setup
This Project uses **Vue.js 3**. I have been using Vue2 for a long time and lately a bit more react. Now I wanted to try a small project with Vue3.  

For the charts I have added 
**chart.js and vue-chartjs**. I have worked with this before, so I knew how to use its features. The api feels a bit outdated to me, but has a lots of options. I think there are alternatives which are maybe a little bit more modern and interactive.
## Project Commands
### Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```