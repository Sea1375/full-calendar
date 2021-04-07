var calendar;

$(function () {

    var calendarEl = document.getElementById('calendar');
    $("#calendar").dblclick(function () {
        alert("here");
    })
    //no dblclick event ca
    calendar = new FullCalendar.Calendar(calendarEl, {

        events: [
            {
                title: 'Event1',
                start: '2011-04-04'
            },
            {
                title: 'Event2',
                start: '2011-05-05'
            }
            // etc...
        ],
        color: 'yellow',   // an option!
        textColor: 'black' // an option!
    })
})
