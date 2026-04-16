#!/usr/bin/env node
/**
 * Post-install script for @image-charts/pcf-all
 */

const path = require('path');
const fs = require('fs');

const packageDir = path.dirname(__dirname);
const solutionPath = path.join(packageDir, 'solution', 'ImageChartsAll.zip');

console.log(`
===============================================================================
  Image-Charts Complete PCF Suite for Power Apps
===============================================================================

The complete Image-Charts PCF solution suite has been installed!

INCLUDED COMPONENTS:
  - QRCodeGenerator      (@image-charts/pcf-qrcode)
  - BarChartGenerator    (@image-charts/pcf-barchart)
  - PieChartGenerator    (@image-charts/pcf-piechart)
  - LineChartGenerator   (@image-charts/pcf-linechart)
  - DoughnutChartGenerator (@image-charts/pcf-doughnut)
  - ImageChartsGenerator (@image-charts/pcf-generic)

NEXT STEPS:

1. MANUAL IMPORT (Recommended for Production):
   - Go to https://make.powerapps.com
   - Select your environment
   - Navigate to Solutions > Import
   - Select the solution file:
     ${solutionPath}

2. Or import individual components from node_modules:
   - @image-charts/pcf-qrcode/solution/ImageChartsQRCode.zip
   - @image-charts/pcf-barchart/solution/ImageChartsBarChart.zip
   - @image-charts/pcf-piechart/solution/ImageChartsPieChart.zip
   - @image-charts/pcf-linechart/solution/ImageChartsLineChart.zip
   - @image-charts/pcf-doughnut/solution/ImageChartsDoughnut.zip
   - @image-charts/pcf-generic/solution/ImageChartsGeneric.zip

DOCUMENTATION:
  https://documentation.image-charts.com/integrations/power-apps/

SUPPORT:
  https://github.com/image-charts/pcf-all/issues

===============================================================================
`);

if (fs.existsSync(solutionPath)) {
  console.log('Combined solution file verified at:', solutionPath);
} else {
  console.log('Note: Combined solution file will be available after building all components.');
}
