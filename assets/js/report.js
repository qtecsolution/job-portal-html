$(document).ready(function () {
  $(function () {
    let fromdate = $("#fromdate");
    if(fromdate.length > 0) {
      fromdate.datepicker();
    }
  });

  $(function () {
    let todate = $("#todate");
    if(todate.length > 0) {
      todate.datepicker();
    }
  });
});