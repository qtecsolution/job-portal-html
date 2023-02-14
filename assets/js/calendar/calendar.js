document.addEventListener('DOMContentLoaded', function() {
  let calendarEl = document.getElementById('calendar');
  let calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'timeGridDay,timeGridWeek,dayGridMonth,dayGridYear,addtask'
    },
    selectable: true,
    customButtons: {
      addtask: {
        text: 'Add Task',
        click: function() {
          alert('clicked custom button 1!');
        }
      },
      // custom2: {
      //   text: 'custom 2',
      //   click: function() {
      //     alert('clicked custom button 2!');
      //   }
      // }
    }
  });
  
  calendar.render();
});