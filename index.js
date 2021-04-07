$(function () {
    var Draggable = FullCalendar.Draggable;

    var containerEl = document.getElementById('external-events');
    var calendarEl = document.getElementById('calendar');
    var checkbox = document.getElementById('drop-remove');

    // initialize the external events
    // -----------------------------------------------------------------

    // new Draggable(containerEl, {
    //     itemSelector: '.fc-event',
    //     eventData: function (eventEl) {
    //         var dataset = eventEl.dataset;

    //         return { //only affects sidebar - loses data on drop

    //             //title:  eventEl.innerHTML ,		


    //             extendedProps: {
    //                 mytitle: dataset.mytitle,
    //                 desc: dataset.desc,
    //                 mystart: dataset.mystart,
    //                 myend: dataset.myend,
    //                 stat: dataset.stat,

    //             },



    //         };

    //     }
    // });

    var calendarEl = document.getElementById('calendar');
    // $("#calendar").dblclick(function () {
    //     alert("here");
    // })
    //no dblclick event ca

    var teams = [{ "id": "1", "title": "Team 1", "eventBackgroundColor": "red", "eventTextColor": "white", "fname1": "Aaron", "fname2": null }, { "id": "2", "title": "Team 2", "eventBackgroundColor": "yellow", "eventTextColor": "black", "fname1": "Charlie", "fname2": "Tyler" }, { "id": "3", "title": "Team 3", "eventBackgroundColor": "blue", "eventTextColor": "white", "fname1": "Michael", "fname2": "Erwin (Jay)" }, { "id": "4", "title": "Team 4", "eventBackgroundColor": "orange", "eventTextColor": "white", "fname1": "Preston", "fname2": "Bobby" }, { "id": "5", "title": "Team 5", "eventBackgroundColor": "green", "eventTextColor": "white", "fname1": "Anthony", "fname2": "Logan" }, { "id": "6", "title": "Team 6", "eventBackgroundColor": "purple", "eventTextColor": "white", "fname1": "Daniel", "fname2": "Brennan" }, { "id": "7", "title": "Team 7", "eventBackgroundColor": "pink", "eventTextColor": "white", "fname1": "Forrest", "fname2": null }];
    var jobs = [
        { "id": "275", "resourceId": "6", "color": null, "start": "2021-02-03 06:00:00", "end": "2021-02-03 16:00:29", "title": "", "mytitle": "", "desc": "KR Cook 30374 14 R\/W Pensacola 8-9 am ", "team": "6", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "276", "resourceId": "6", "color": null, "start": "2021-02-04 06:00:00", "end": "2021-02-04 16:00:29", "title": "", "mytitle": "", "desc": "LB Leibold 30393 1 F\/D 1 R\/W Pensacola 8-9 am ", "team": "6", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "277", "resourceId": "6", "color": null, "start": "2021-02-05 06:00:00", "end": "2021-02-05 16:00:29", "title": "", "mytitle": "", "desc": "Rain Day Hourly 6:30-1 pm ", "team": "6", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "278", "resourceId": "6", "color": null, "start": "2021-02-08 06:00:00", "end": "2021-02-08 16:00:29", "title": "", "mytitle": "", "desc": "BS Driver 30396 8 R\/W Pensacola 8-9 am ", "team": "6", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "279", "resourceId": "6", "color": null, "start": "2021-02-09 06:00:00", "end": "2021-02-09 16:00:29", "title": "", "mytitle": "", "desc": "Covenant Church 28316 SVC Pensacola 8-9 am DD James 30358 4 R\/W 1 SGD Pensacola 12-1 pm ", "team": "6", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "280", "resourceId": "6", "color": null, "start": "2021-02-10 06:00:00", "end": "2021-02-10 16:00:29", "title": "", "mytitle": "", "desc": " DD James 30358 4 R\/W 1 SGD Pensacola 12-1 pm ", "team": "6", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "281", "resourceId": "6", "color": null, "start": "2021-02-11 06:00:00", "end": "2021-02-11 16:00:29", "title": "", "mytitle": "", "desc": "BS Pate 30404 4 R\/W Pensacola Beach 9-10 am ", "team": "6", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "282", "resourceId": "6", "color": null, "start": "2021-02-12 06:00:00", "end": "2021-02-12 16:00:29", "title": "", "mytitle": "", "desc": "BS Pate 30404 4 R\/W Pensacola Beach 9-10 am ", "team": "6", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "283", "resourceId": "6", "color": null, "start": "2021-02-15 06:00:00", "end": "2021-02-15 16:00:29", "title": "", "mytitle": "", "desc": "BS Pate 30404 4 R\/W Pensacola Beach 9-10 am ", "team": "6", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "284", "resourceId": "6", "color": null, "start": "2021-02-16 06:00:00", "end": "2021-02-16 16:00:29", "title": "", "mytitle": "", "desc": "BS Hindman 30409 7 R\/W 1 SGD 1 E\/D Pensacola 8-9 am ", "team": "6", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "285", "resourceId": "6", "color": null, "start": "2021-02-17 06:00:00", "end": "2021-02-17 16:00:29", "title": "", "mytitle": "", "desc": "LB Rowell 30417 14 R\/W Pace 8-9 am ", "team": "6", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "286", "resourceId": "6", "color": null, "start": "2021-02-18 06:00:00", "end": "2021-02-18 16:00:29", "title": "", "mytitle": "", "desc": "DD Stahl 30416 1 F\/D Pensacola 8-9 am ", "team": "6", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "287", "resourceId": "6", "color": null, "start": "2021-02-22 06:00:00", "end": "2021-02-22 16:00:29", "title": "", "mytitle": "", "desc": "REINSTALL--> Cook 30374 14 R\/W Pensacola 8-9 am ", "team": "6", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "288", "resourceId": "6", "color": null, "start": "2021-02-23 06:00:00", "end": "2021-02-23 16:00:29", "title": "", "mytitle": "", "desc": "REINSTALL--> Cook 30374 14 R\/W Pensacola 8-9 am ", "team": "6", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "289", "resourceId": "7", "color": null, "start": "2021-01-18 06:00:00", "end": "2021-01-18 16:00:29", "title": "", "mytitle": "", "desc": "Daniel to go with Anthony LB Waldroup 30331 1 SGD Pensacola 8-9 am ", "team": "7", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "290", "resourceId": "7", "color": null, "start": "2021-01-20 06:00:00", "end": "2021-01-20 16:00:29", "title": "", "mytitle": "", "desc": "Picked Up- McKeir 30353 16 R\/W $7942 LB Waters 30379 10 R\/W Milton $4578 BRENNAN Went WITH ", "team": "7", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "291", "resourceId": "7", "color": null, "start": "2021-01-21 06:00:00", "end": "2021-01-21 16:00:29", "title": "", "mytitle": "", "desc": "KR Del 24\/7 All Services 1 r\/w Gulf Shores ", "team": "7", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "292", "resourceId": "7", "color": null, "start": "2021-01-27 06:00:00", "end": "2021-01-27 16:00:29", "title": "", "mytitle": "", "desc": "Picked Up Coastal Construction 30444 7 R\/W $2800.00 Picked Up Pierce 7 R\/W $2918.30", "team": "7", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "293", "resourceId": "7", "color": null, "start": "2021-02-10 06:00:00", "end": "2021-02-10 16:00:29", "title": "", "mytitle": "", "desc": "DEL Roman KR Tidwell 30392 3 SGD Orange Beach ", "team": "7", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "294", "resourceId": "9", "color": null, "start": "2021-01-04 06:00:00", "end": "2021-01-04 16:00:29", "title": "", "mytitle": "", "desc": "Shelby 25224 SVC Pensacola 8-9 am Dickerson 26984 SVC Pensacola 11-12 pm Behr 27817 SVC Cantonment 1-2 pm ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "295", "resourceId": "9", "color": null, "start": "2021-01-05 06:00:00", "end": "2021-01-05 16:00:29", "title": "", "mytitle": "", "desc": "Minnifield 30255 SVC Pensacola 8-9 am King 30093 SVC Pensacola 11-12 PM Gonalez 26623 SVC Pensacola 1-2 pm ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "296", "resourceId": "9", "color": null, "start": "2021-01-06 06:00:00", "end": "2021-01-06 16:00:29", "title": "", "mytitle": "", "desc": "Borish 30154 SVC Pensacola Beach 8-9am Drake 30166 SVC Navarre 10-11am Gardner 30153 SVC Navarre 12-1 pm ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "297", "resourceId": "9", "color": null, "start": "2021-01-07 06:00:00", "end": "2021-01-07 16:00:29", "title": "", "mytitle": "", "desc": "Martin 27713 SVC Gulf Breeze 8-9am ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "298", "resourceId": "9", "color": null, "start": "2021-01-08 06:00:00", "end": "2021-01-08 16:00:29", "title": "", "mytitle": "", "desc": "Lands 29967 SVC Pensaocla 8-9am Cross SVC Gulf Shores ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "299", "resourceId": "9", "color": null, "start": "2021-01-11 06:00:00", "end": "2021-01-11 16:00:29", "title": "", "mytitle": "", "desc": "Davis 30219 SVC Mobile 8-9am Sheffield 29624 SVC Mobile 11-12 pm ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "300", "resourceId": "9", "color": null, "start": "2021-01-12 06:00:00", "end": "2021-01-12 16:00:29", "title": "", "mytitle": "", "desc": "Rosenbaum 30083 SVC Niceville 8-9am Martin 27713 SVC Gulf Breeze 12-1 pm ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "301", "resourceId": "9", "color": null, "start": "2021-01-13 06:00:00", "end": "2021-01-13 16:00:29", "title": "", "mytitle": "", "desc": "Pepper 30114 SVC Orange Beach 8-9am Lee 30273 SVC Foley 12-1pm ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "302", "resourceId": "9", "color": null, "start": "2021-01-14 06:00:00", "end": "2021-01-14 16:00:29", "title": "", "mytitle": "", "desc": "Hokins 30064 SVC Destin 8-9 am Mamazza 30324 SVC Crestview 12-1 pm Castelberry 28672 SVC Crestview 2-3pm ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "303", "resourceId": "9", "color": null, "start": "2021-01-15 06:00:00", "end": "2021-01-15 16:00:29", "title": "", "mytitle": "", "desc": "ONLY JOB Boccardo 29933 SVC Daphne 8-9 am ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "304", "resourceId": "9", "color": null, "start": "2021-01-18 06:00:00", "end": "2021-01-18 16:00:29", "title": "", "mytitle": "", "desc": "Office Time ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "305", "resourceId": "9", "color": null, "start": "2021-01-19 06:00:00", "end": "2021-01-19 16:00:29", "title": "", "mytitle": "", "desc": "Carter 30230 SVC Centry 8-9 am Tilley 26321 SVC Pensacola 11-12pm ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "306", "resourceId": "9", "color": null, "start": "2021-01-20 06:00:00", "end": "2021-01-20 16:00:29", "title": "", "mytitle": "", "desc": "Carter 29950 SVC Fort Walton Beach 8-9am", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "307", "resourceId": "9", "color": null, "start": "2021-01-21 06:00:00", "end": "2021-01-21 16:00:29", "title": "", "mytitle": "", "desc": "Moss 28122 SVC Pensacola 8-9am Silver 29893 SVC Pensacola 11-12pm ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "308", "resourceId": "9", "color": null, "start": "2021-01-22 06:00:00", "end": "2021-01-22 16:00:29", "title": "", "mytitle": "", "desc": "Office Time Swinney 30337 QC Loxey 1-2pm ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "309", "resourceId": "9", "color": null, "start": "2021-01-25 06:00:00", "end": "2021-01-25 16:00:29", "title": "", "mytitle": "", "desc": "Brancher 25461 SVC Pensacola 8-9 am Foster 30224 SVC Molino 11-12 pm ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "310", "resourceId": "9", "color": null, "start": "2021-01-26 06:00:00", "end": "2021-01-26 16:00:29", "title": "", "mytitle": "", "desc": "Kent 28207 SVC Milton 8-9 am Behenna 30108 SVC Navarre 11-12 pm Knott-Craig 30328 SVC Navarre Beach 1-2-pm ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "311", "resourceId": "9", "color": null, "start": "2021-01-27 06:00:00", "end": "2021-01-27 16:00:29", "title": "", "mytitle": "", "desc": "McDonald 29578 SVC Pensacola 8-9am Kline 30197 SVC Pensacola 11-12pm ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" },
        { "id": "312", "resourceId": "9", "color": null, "start": "2021-01-28 06:00:00", "end": "2021-01-28 16:00:29", "title": "", "mytitle": "", "desc": "Desiata 30165 SVC Miramar Beach 8-9am Schuch 30092 SVC Niceville 11-12pm ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "313", "resourceId": "9", "color": null, "start": "2021-01-29 06:00:00", "end": "2021-01-29 16:00:29", "title": "", "mytitle": "", "desc": "Pate 30216 SVC Gulf Breeze 8-9 am ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "314", "resourceId": "9", "color": null, "start": "2021-02-02 06:00:00", "end": "2021-02-02 16:00:29", "title": "", "mytitle": "", "desc": "Stevens 30333 SVC Orange Beach 8-9 am ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "315", "resourceId": "9", "color": null, "start": "2021-02-03 06:00:00", "end": "2021-02-03 16:00:29", "title": "", "mytitle": "", "desc": "Smith 30240 SVC Eight Mile 8-9am Duffy 27422 SVC Daphne 11-12pm ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "316", "resourceId": "9", "color": null, "start": "2021-02-04 06:00:00", "end": "2021-02-04 16:00:29", "title": "", "mytitle": "", "desc": "Davidson 28574 SVC Niceville 8-9 am Hammontree 28640 SVC Niceville 11-12 pm. Foster 30303 SVC Niceville 1-2 pm ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "317", "resourceId": "9", "color": null, "start": "2021-02-05 06:00:00", "end": "2021-02-05 16:00:29", "title": "", "mytitle": "", "desc": "Funderbuck 30118 SVC Navarre 8-9 am Borzatta 30148 SVC Destin 11-12 pm ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "318", "resourceId": "9", "color": null, "start": "2021-02-08 06:00:00", "end": "2021-02-08 16:00:29", "title": "", "mytitle": "", "desc": "HOLD for Smith 30332", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "319", "resourceId": "9", "color": null, "start": "2021-02-09 06:00:00", "end": "2021-02-09 16:00:29", "title": "", "mytitle": "", "desc": "Sanders 29907 SVC Navarre 8-9 am Vickery 29392 SVC Mary Esther 11-12 pm Smith 26530 SVC Shalimar 1-2 pm ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "320", "resourceId": "9", "color": null, "start": "2021-02-10 06:00:00", "end": "2021-02-10 16:00:29", "title": "", "mytitle": "", "desc": "ONLY JOB Wolfe 25483 SVC Pensacola 8-9am ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "321", "resourceId": "9", "color": null, "start": "2021-02-11 06:00:00", "end": "2021-02-11 16:00:29", "title": "", "mytitle": "", "desc": "Parker 29604 SVC Orange Beach 8-9 am ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "322", "resourceId": "9", "color": null, "start": "2021-02-12 06:00:00", "end": "2021-02-12 16:00:29", "title": "", "mytitle": "", "desc": "Persall 28857 SVC Magnolia Springs 8-9 am Hold Ziegler 28254 SVC Fairhope 11-12pm Schwan 28164 SVC Mobile 1-2 pm ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "323", "resourceId": "9", "color": null, "start": "2021-02-16 06:00:00", "end": "2021-02-16 16:00:29", "title": "", "mytitle": "", "desc": "Ballinger 28654 SVC Bon Secour 8-9 am ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "324", "resourceId": "9", "color": null, "start": "2021-02-17 06:00:00", "end": "2021-02-17 16:00:29", "title": "", "mytitle": "", "desc": " Larsen 26934 SVC Foley 11-12 pm Blanks 30299 SVC Semmes 1-2 pm Hobden 30050 SVC Theodore 2-3pm ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "325", "resourceId": "9", "color": null, "start": "2021-02-18 06:00:00", "end": "2021-02-18 16:00:29", "title": "", "mytitle": "", "desc": "Novotny 30112 SVC Santa Rosa Beach 8-9am ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "326", "resourceId": "9", "color": null, "start": "2021-02-19 06:00:00", "end": "2021-02-19 16:00:29", "title": "", "mytitle": "", "desc": "Carlstrom 30104 SVC Mary Esther 8-9 am ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "327", "resourceId": "9", "color": null, "start": "2021-02-22 06:00:00", "end": "2021-02-22 16:00:29", "title": "", "mytitle": "", "desc": "Steel 25738 SVC Pensacola 8-9 am Etscheid ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "328", "resourceId": "9", "color": null, "start": "2021-02-23 06:00:00", "end": "2021-02-23 16:00:29", "title": "", "mytitle": "", "desc": "Freeland 29994 SVC Pensacola 8-9 am Phillips 29754 SVC Pensacola 11-12 pm Beckman 29980 SVC Pensacola 1-2pm ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "329", "resourceId": "9", "color": null, "start": "2021-02-24 06:00:00", "end": "2021-02-24 16:00:29", "title": "", "mytitle": "", "desc": "Castleberry 28672 SVC Crestview 8-9 am ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "330", "resourceId": "9", "color": null, "start": "2021-02-25 06:00:00", "end": "2021-02-25 16:00:29", "title": "", "mytitle": "", "desc": "Kitchens 30251 SVC Robertsdale 8-9am Lee 30273 SVC Foley 11-12 pm Haupt 29786 SVC Elberta 1-2 Pm ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "331", "resourceId": "9", "color": null, "start": "2021-02-26 06:00:00", "end": "2021-02-26 16:00:29", "title": "", "mytitle": "", "desc": "Schuch 30092 SVC Niceville 9-10am ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "332", "resourceId": "9", "color": null, "start": "2021-03-01 06:00:00", "end": "2021-03-01 16:00:29", "title": "", "mytitle": "", "desc": "Hold Dutcher 27366 SVC Orange Beach 8-9 am Bradley 29959 SVC Orange Beach 12-1 pm ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "333", "resourceId": "9", "color": null, "start": "2021-03-02 06:00:00", "end": "2021-03-02 16:00:29", "title": "", "mytitle": "", "desc": "Brown 30086 SVC Dauphin Island 8-9 am ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "334", "resourceId": "9", "color": null, "start": "2021-03-03 06:00:00", "end": "2021-03-03 16:00:29", "title": "", "mytitle": "", "desc": " Knappe 27072 SVC Gulf Breeze 8-9 am Cacace 28302\/28081 SVC Navarre 11-12 pm ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "335", "resourceId": "9", "color": null, "start": "2021-03-04 06:00:00", "end": "2021-03-04 16:00:29", "title": "", "mytitle": "", "desc": "Cole 30207 SVC Navarre 8-9 am ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "336", "resourceId": "9", "color": null, "start": "2021-03-08 06:00:00", "end": "2021-03-08 16:00:29", "title": "", "mytitle": "", "desc": "Wade 30169 SVC Fairhope 8-9 am ", "team": "9", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "337", "resourceId": "3", "color": null, "start": "2021-01-04 06:00:00", "end": "2021-01-04 16:00:29", "title": "", "mytitle": "", "desc": "DD Mead 30180 6 C\/S Navarre 8-9am ", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "338", "resourceId": "3", "color": null, "start": "2021-01-05 06:00:00", "end": "2021-01-05 16:00:29", "title": "", "mytitle": "", "desc": "Finsh--TM Allen 30014 2 windows Loxely 8-9 am CH Rye 30253 Del 3 R\/W Mobile 12pm ", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "339", "resourceId": "3", "color": null, "start": "2021-01-06 06:00:00", "end": "2021-01-06 16:00:29", "title": "", "mytitle": "", "desc": "CH Blanks 30299 13 R\/W Semmes 8-9 am ", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "340", "resourceId": "3", "color": null, "start": "2021-01-07 06:00:00", "end": "2021-01-07 16:00:29", "title": "", "mytitle": "", "desc": "CANCELLED- RAIN- DD Schlitt 30355 12 R\/W Shaimar 8-9 am ", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "341", "resourceId": "3", "color": null, "start": "2021-01-08 06:00:00", "end": "2021-01-08 16:00:29", "title": "", "mytitle": "", "desc": "DD Schlitt 30355 12 R\/W Shaimar 8-9 am ", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "342", "resourceId": "3", "color": null, "start": "2021-01-09 06:00:00", "end": "2021-01-09 16:00:29", "title": "", "mytitle": "", "desc": "", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "343", "resourceId": "3", "color": null, "start": "2021-01-10 06:00:00", "end": "2021-01-10 16:00:29", "title": "", "mytitle": "", "desc": "", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "344", "resourceId": "3", "color": null, "start": "2021-01-11 06:00:00", "end": "2021-01-11 16:00:29", "title": "", "mytitle": "", "desc": "LB Henderson 30289 1 F\/D 1 E\/D 1 S\/D Pensacola 8-9 am ", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "345", "resourceId": "3", "color": null, "start": "2021-01-12 06:00:00", "end": "2021-01-12 16:00:29", "title": "", "mytitle": "", "desc": "KR Salter 30385 27 R\/W Foley 8-9 am ", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "346", "resourceId": "3", "color": null, "start": "2021-01-13 06:00:00", "end": "2021-01-13 16:00:29", "title": "", "mytitle": "", "desc": "KR Salter 30385 27 R\/W Foley 8-9 am ", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "347", "resourceId": "3", "color": null, "start": "2021-01-14 06:00:00", "end": "2021-01-14 16:00:29", "title": "", "mytitle": "", "desc": "CH Stevens 30333 5 R\/W 3 F\/D Orange Beach 8-9 am ", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "348", "resourceId": "3", "color": null, "start": "2021-01-15 06:00:00", "end": "2021-01-15 16:00:29", "title": "", "mytitle": "", "desc": "CH Stevens 30333 5 R\/W 3 F\/D Orange Beach 8-9 am ", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "349", "resourceId": "3", "color": null, "start": "2021-01-16 06:00:00", "end": "2021-01-16 16:00:29", "title": "", "mytitle": "", "desc": "", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" },
        { "id": "350", "resourceId": "3", "color": null, "start": "2021-01-17 06:00:00", "end": "2021-01-17 16:00:29", "title": "", "mytitle": "", "desc": "", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "351", "resourceId": "3", "color": null, "start": "2021-01-18 06:00:00", "end": "2021-01-18 16:00:29", "title": "", "mytitle": "", "desc": "TM Pearson 30102 1 R\/S Daphne 8-9 am ", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "352", "resourceId": "3", "color": null, "start": "2021-01-19 06:00:00", "end": "2021-01-19 16:00:29", "title": "", "mytitle": "", "desc": "CH Stevens 30333 5 R\/W 3 F\/D Orange Beach 8-9 am ", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "353", "resourceId": "3", "color": null, "start": "2021-01-20 06:00:00", "end": "2021-01-20 16:00:29", "title": "", "mytitle": "", "desc": "CH Crocker 30347 2 A\/S 1 F\/S Saraland 8-9am ", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "354", "resourceId": "3", "color": null, "start": "2021-01-21 06:00:00", "end": "2021-01-21 16:00:29", "title": "", "mytitle": "", "desc": "Finish-HP Compass Point Condo 29975 3 R\/W Gulf Shores 8-9 am ", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "355", "resourceId": "3", "color": null, "start": "2021-01-22 06:00:00", "end": "2021-01-22 16:00:29", "title": "", "mytitle": "", "desc": "Worked In Shop 6:30-12pm", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "356", "resourceId": "3", "color": null, "start": "2021-01-23 06:00:00", "end": "2021-01-23 16:00:29", "title": "", "mytitle": "", "desc": "", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "357", "resourceId": "3", "color": null, "start": "2021-01-24 06:00:00", "end": "2021-01-24 16:00:29", "title": "", "mytitle": "", "desc": "", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "358", "resourceId": "3", "color": null, "start": "2021-01-25 06:00:00", "end": "2021-01-25 16:00:29", "title": "", "mytitle": "", "desc": "LB Raley 30346 9 R\/W 1 F\/D Pensacola 8-9am ", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "359", "resourceId": "3", "color": null, "start": "2021-01-26 06:00:00", "end": "2021-01-26 16:00:29", "title": "", "mytitle": "", "desc": "LB Raley 30346 9 R\/W 1 F\/D Pensacola 8-9am ", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "360", "resourceId": "3", "color": null, "start": "2021-01-27 06:00:00", "end": "2021-01-27 16:00:29", "title": "", "mytitle": "", "desc": "CH Whitaker 30257 17 R\/W Gulf Shores 8-9am ", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "361", "resourceId": "3", "color": null, "start": "2021-01-28 06:00:00", "end": "2021-01-28 16:00:29", "title": "", "mytitle": "", "desc": "CH Whitaker 30257 17 R\/W Gulf Shores 8-9am ", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "362", "resourceId": "3", "color": null, "start": "2021-01-29 06:00:00", "end": "2021-01-29 16:00:29", "title": "", "mytitle": "", "desc": "CH Whitaker 30257 17 R\/W Gulf Shores 8-9am ", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "363", "resourceId": "3", "color": null, "start": "2021-01-30 06:00:00", "end": "2021-01-30 16:00:29", "title": "", "mytitle": "", "desc": "", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "364", "resourceId": "3", "color": null, "start": "2021-01-31 06:00:00", "end": "2021-01-31 16:00:29", "title": "", "mytitle": "", "desc": "", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "365", "resourceId": "3", "color": null, "start": "2021-02-01 06:00:00", "end": "2021-02-01 16:00:29", "title": "", "mytitle": "", "desc": "DD Vaughn 30261 9 R\/W 7 R\/S Holt 8-9 am ", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "366", "resourceId": "3", "color": null, "start": "2021-02-02 06:00:00", "end": "2021-02-02 16:00:29", "title": "", "mytitle": "", "desc": "Confirmed Finish-->LB Dilmore 30249 1 E\/D 1 SGD Pensacola 8-9 am ", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "367", "resourceId": "3", "color": null, "start": "2021-02-03 06:00:00", "end": "2021-02-03 16:00:29", "title": "", "mytitle": "", "desc": "Brown 30086 SVC Dauphin Island 11-12pm ", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "368", "resourceId": "3", "color": null, "start": "2021-02-04 06:00:00", "end": "2021-02-04 16:00:29", "title": "", "mytitle": "", "desc": "TM Pearson 30102 1 R\/S Daphne 8-9 am ", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "369", "resourceId": "3", "color": null, "start": "2021-02-05 06:00:00", "end": "2021-02-05 16:00:29", "title": "", "mytitle": "", "desc": "RAIN DAY Anthony Hourly 6:30-1pm Steele 25738 SVC Pensacola 8-9 Huppert 27746 SVC Pensacola ", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "370", "resourceId": "3", "color": null, "start": "2021-02-06 06:00:00", "end": "2021-02-06 16:00:29", "title": "", "mytitle": "", "desc": "", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "371", "resourceId": "3", "color": null, "start": "2021-02-07 06:00:00", "end": "2021-02-07 16:00:29", "title": "", "mytitle": "", "desc": "", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "372", "resourceId": "3", "color": null, "start": "2021-02-08 06:00:00", "end": "2021-02-08 16:00:29", "title": "", "mytitle": "", "desc": "DD Etscheid 30341 5 R\/W 2 E\/D and SVC Pensacola 8-9 am ", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "373", "resourceId": "3", "color": null, "start": "2021-02-09 06:00:00", "end": "2021-02-09 16:00:29", "title": "", "mytitle": "", "desc": "KR Henrichs 30402 18 R\/W Foley 8-9 am Michael Lead", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "374", "resourceId": "3", "color": null, "start": "2021-02-10 06:00:00", "end": "2021-02-10 16:00:29", "title": "", "mytitle": "", "desc": "LB Crawford 30405 1 E\/D 1 SGD Gulf Shores 8-9am ", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "375", "resourceId": "3", "color": null, "start": "2021-02-11 06:00:00", "end": "2021-02-11 16:00:29", "title": "", "mytitle": "", "desc": "HP Logothetis 30407 21 R\/W Pensacola 30503 Michael Lead ", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "376", "resourceId": "3", "color": null, "start": "2021-02-12 06:00:00", "end": "2021-02-12 16:00:29", "title": "", "mytitle": "", "desc": "CANCELED RAIN Plomp 29889 SVC Daphne 8-9 am Hellmich 26778 SVC Foley 11-12pm ", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "377", "resourceId": "3", "color": null, "start": "2021-02-13 06:00:00", "end": "2021-02-13 16:00:29", "title": "", "mytitle": "", "desc": "", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "378", "resourceId": "3", "color": null, "start": "2021-02-14 06:00:00", "end": "2021-02-14 16:00:29", "title": "", "mytitle": "", "desc": "", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "379", "resourceId": "3", "color": null, "start": "2021-02-15 06:00:00", "end": "2021-02-15 16:00:29", "title": "", "mytitle": "", "desc": "LB Scudder 30327 2 E\/D 1 R\/W Pensacola 8-9 am ", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "380", "resourceId": "3", "color": null, "start": "2021-02-16 06:00:00", "end": "2021-02-16 16:00:29", "title": "", "mytitle": "", "desc": "CONFIRMED LB Moore 30451 6 R\/W Pensacola 8-9 am ", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "381", "resourceId": "3", "color": null, "start": "2021-02-17 06:00:00", "end": "2021-02-17 16:00:29", "title": "", "mytitle": "", "desc": "LB Rowell 30417 14 R\/W Pace 8-9 am ", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "383", "resourceId": "3", "color": null, "start": "2021-02-19 06:00:00", "end": "2021-02-19 16:00:29", "title": "", "mytitle": "", "desc": "Hold Wilson 30055", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "386", "resourceId": "3", "color": null, "start": "2021-02-22 06:00:00", "end": "2021-02-22 16:00:29", "title": "", "mytitle": "", "desc": "LB McDonald 30320 4 E\/D Pensacola 8-9 am ", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "387", "resourceId": "3", "color": null, "start": "2021-02-23 06:00:00", "end": "2021-02-23 16:00:29", "title": "", "mytitle": "", "desc": "LB McDonald 30320 4 E\/D Pensacola 8-9 am ", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "388", "resourceId": "3", "color": null, "start": "2021-02-24 06:00:00", "end": "2021-02-24 16:00:29", "title": "", "mytitle": "", "desc": "LB McDonald 30320 4 E\/D Pensacola 8-9 am ", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "390", "resourceId": "3", "color": null, "start": "2021-02-26 06:00:00", "end": "2021-02-26 16:00:29", "title": "", "mytitle": "", "desc": "Hellmich 26778 SVC Foley 8-9 am ", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }, { "id": "400", "resourceId": "3", "color": null, "start": "2021-03-08 06:00:00", "end": "2021-03-08 16:00:29", "title": "", "mytitle": "", "desc": "HP Rosner 30401 10 R\/W Lillan 8-9 am ", "team": "3", "mycolor": null, "mystart": "6:00am", "myend": "4:00pm", "stat": "1" }
    ]

    var jobevents = [];
    jobs.forEach(job => {
        jobevents.push({
            ...job,
            start: job.start.substr(0, 10),
            end: job.end.substr(0, 10)
        });
    })

    var calendar = new FullCalendar.Calendar(calendarEl, {


        initialView: 'resourceTimelineFiveDays',
        //timeZone: 'UTC',
        aspectRatio: 1.5,
        headerToolbar: {
            left: 'prev,next',
            center: 'title',
            right: 'resourceTimelineFiveDays,resourceTimelineTenDays,dayGridMonth,resourceTimeGridDay'
        },
        eventClick: function (info) {
            console.log('event' + info);
            alert('test');
        },

        editable: true,
        droppable: true, // this allows things to be dropped onto the calendar
        drop: function (info) {
            // is the "remove after drop" checkbox checked?
            if (checkbox.checked) {
                // if so, remove the element from the "Draggable Events" list
                info.draggedEl.parentNode.removeChild(info.draggedEl);
            }
        },

        views: {
            resourceTimelineFiveDays: {
                type: 'resourceTimelineWeek',
                duration: { days: 7 },//total cols only
                buttonText: '5 days',
                slotDuration: { days: 1 },
                scrollTime: '00:00', // undo default 6am scrollTime
                duration: { weeks: 1 },
                weekends: false,
                //hiddenDays: [ 6, 7 ] ,
                resourceAreaWidth: '10%',
                // slotLabelFormat: {
                //     hour: 'numeric',
                //     minute: '2-digit',
                //     omitZeroMinute: true,
                //     meridiem: 'short'
                // },

            },

            resourceTimelineTenDays: {
                type: 'resourceTimelineWeek',
                duration: { days: 14 },//total cols only
                buttonText: '2 Weeks',
                slotDuration: { days: 1 },
                scrollTime: '00:00', // undo default 6am scrollTime
                duration: { weeks: 2 },
                weekends: true,
                //hiddenDays: [ 6, 7 ] ,
                resourceAreaWidth: '10%',

            },

            timeGridWeek: {
                type: 'timeGridWeek',
                //duration: { days: 5 },//total cols only
                buttonText: 'week',

                slotDuration: { hour: 1 },
                businessHours: {
                    daysOfWeek: [1, 2, 3, 4, 5], // Monday - Thursday					
                    startTime: '6:00', // a start time (10am in this example)
                    endTime: '17:00', // an end time (6pm in this example)
                    //scrollTime: '00:00', // undo default 6am scrollTime
                },
                //duration: { weeks: 1 },
                slotLabelFormat: {
                    hour: 'numeric',
                    minute: '2-digit',
                    omitZeroMinute: true,
                    meridiem: 'short'
                },
            },

            timeGridDay: {
                type: 'timeGridWeek',
                //duration: { days: 5 },//total cols only
                buttonText: 'week',

                slotDuration: { hour: 1 },
                businessHours: {
                    daysOfWeek: [1, 2, 3, 4, 5], // Monday - Thursday					
                    startTime: '6:00', // a start time (10am in this example)
                    endTime: '17:00', // an end time (6pm in this example)
                    //scrollTime: '00:00', // undo default 6am scrollTime
                },
                //duration: { weeks: 1 },
                slotLabelFormat: {
                    hour: 'numeric',
                    minute: '2-digit',
                    omitZeroMinute: true,
                    meridiem: 'short'
                },
            },

        },



        eventReceive: function (info) {

            // console.log("eventReceive:", info.event.getResources()[0].title);

        },

        eventDidMount: function (info) {


        },

        eventContent: function (info) {
            let italicEl = document.createElement('i');

            if (info.event.extendedProps.stat == 1) {
                stat = '<div style="width:20px;height:20px;background:#ff8100;float:right;font-size:17px;color:#fff;text-align: center;vertical-align: middle;padding:1px;line-height: 15px;"><i class="fas fa-tools"></i></div>'
                //<i class="fa fa-life-ring"></i>
            } else {
                stat = '';
            }



            italicEl.innerHTML = '<i class="nav-icon fa fa-clock"></i> '
                + info.event.extendedProps.mystart + '-' + info.event.extendedProps.mystart
                + '<span style="padding:0 10px;display:block;width:50%; text-align:right">Team ' + info.event.extendedProps.team + '</span>'



            italicEl.innerHTML += '<div style="padding:4px;display:block;color:#000;white-space:break-spaces;background:#fff;">'
                + '<div style="display:block;border-bottom:1px dotted #e1e1e1">'
                + '<strong>title:</strong> ' + info.event.extendedProps.mytitle + stat
                + '</div>'
                + '<div style="display:block;"><strong>desc:</strong>' + info.event.extendedProps.desc + '</div>'
                + '</div>';


            //<i class="fa fa-life-ring"


            let arrayOfDomNodes = [italicEl]
            return { domNodes: arrayOfDomNodes }
        },

        resourceAreaHeaderContent: 'Teams',
        resources: teams,
        events: jobevents,

        dateClick: function (info) {
            alert('Clicked on: ' + info.dateStr + '& ResourceId: ' + (info.resource ? info.resource.id : ''));
        },
        resourceRender: function (renderInfo) {
            console.log('resource render')
            renderInfo.el.style.backgroundColor = 'blue';
        }






    });
    calendar.render();







    renderEvent(jobevents);

    function renderEvent(events) {
        var eventSource = [];

        for (var i = 0; i < events.length; i = i + 1) {
            var event = {
                id: events[i].id,
                start: events[i].start,
                end: events[i].start,
                extendedProps: {
                    title: events[i].mytitle,
                    desc: events[i].desc,
                    team: events[i].team,
                    stat: events[i].stat
                },
            }

            eventSource.push(event);
            //calendar.addEvent(event);
        }

        calendar.addEventSource(eventSource);

    }

    function filter() {
        var selectedTeams = $('.teams').val();
        var selectedstats = $('.stat').val();

        var filteredEvents = jobevents;
        if (selectedTeams.length > 0) {
            filteredEvents = filteredEvents.filter(item => selectedTeams.indexOf(item.team) > -1);
        }

        if (selectedstats.length > 0) {
            filteredEvents = filteredEvents.filter(item => selectedstats.indexOf(item.stat) > -1);
        }

        // var events = calendar.getEvents();
        // events.forEach(e => {
        //     e.remove();
        // })

        calendar.removeAllEvents();

        renderEvent(filteredEvents);

    }

    $(".teams").select2({
        placeholder: "Select teams",
        allowClear: true
    }).on('change', function (e) {
        filter();
    });
    $(".stat").select2({
        placeholder: "Select Status",
        allowClear: true
    }).on('change', function (e) {
        filter();
    });
})