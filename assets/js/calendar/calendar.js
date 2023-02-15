document.addEventListener('DOMContentLoaded', function() {
  let calendarEl = document.getElementById('calendar');
  let calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'timeGridDay,timeGridWeek,dayGridMonth,multiMonthYear,listDay,addtask'
    },
    views: {
      listDay: { buttonText: 'Schedule' },
      timeGridDay: { buttonText: 'Day' },
      timeGridWeek: { buttonText: 'Week' },
      dayGridMonth: { buttonText: 'Month' },
      multiMonthYear: { buttonText: 'Year' },
    },
    selectable: true,
    customButtons: {
      addtask: {
        text: 'Add Task',
        click: function() {
          const modal = document.querySelector('#taskModal')
          const taskModal = new bootstrap.Modal(modal)
          taskModal.show()
        }
      },
    },
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    dayMaxEvents: true, // allow "more" link when too many events
    events: [
      {
        title: 'All Day Event',
        start: '2023-02-01'
      },
      {
        title: 'Long Event',
        start: '2023-02-07',
        end: '2023-02-10'
      },
      {
        groupId: 999,
        title: 'Repeating Event',
        start: '2023-02-09T16:00:00'
      },
      {
        groupId: 999,
        title: 'Repeating Event',
        start: '2023-02-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2023-02-11',
        end: '2023-02-13'
      },
      {
        title: 'Meeting',
        start: '2023-02-12T10:30:00',
        end: '2023-02-12T12:30:00'
      },
      {
        title: 'Conference',
        start: '2023-02-15',
        end: '2023-02-15'
      },
      {
        title: 'Meeting',
        start: '2023-02-15T17:30:00',
        end: '2023-02-15T18:30:00'
      },
      {
        title: 'Conference',
        start: '2023-02-16',
        end: '2023-02-16'
      },
      {
        title: 'Meeting',
        start: '2023-02-16T16:30:00',
        end: '2023-02-16T17:30:00'
      },
      {
        title: 'Lunch',
        start: '2023-02-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2023-02-12T14:30:00'
      },
      {
        title: 'Happy Hour',
        start: '2023-02-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: '2023-02-12T20:00:00'
      },
      {
        title: 'Birthday Party',
        start: '2023-02-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2023-02-28'
      }
    ]
  });
  
  calendar.render();
});