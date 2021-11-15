const report = require('multiple-cucumber-html-reporter');

var today = new Date();
var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
var time = today.getHours() + 'h' + today.getMinutes() + 'm' + today.getSeconds() + 's';
var dateTime = date + '_' + time;

report.generate({
  jsonDir: 'cypress/cucumber-json/',
  reportPath: 'cypress/reports/MultipleReport_' + dateTime + '.html',
  metadata: {
    browser: {
      name: 'Chrome',
      version: '86.0.4240.75'
    },
    device: 'Local test machine',
    platform: {
      name: 'Linux',
      version: 'Ubuntu'
    }
  },
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'Booking Automation Tests' },
      { label: 'Release', value: '1.0.0' },
      { label: 'Execution Start Time', value: `${dateTime}` },
      { label: 'Execution End Time', value: `${dateTime}` }
    ]
  }
});
