function scheduleEvents() {
  // 1) open Events Calendar
  var spreadsheet = SpreadsheetApp.getActiveSheet();
  //SASE-General-Events calendar ID
  var calendarID = spreadsheet.getRange("C4").getValue();
  var eventCal = CalendarApp.getCalendarById(calendarID);
  
  //SASE-General-Events-Website calendar ID
  var calendarIDwebsite = spreadsheet.getRange("C5").getValue();
  var eventCalwebsite = CalendarApp.getCalendarById(calendarIDwebsite);
  
  // 2) get event date/name info into the code
  var getSize = spreadsheet.getRange("G6").getValues();
  var list = spreadsheet.getRange(getSize).getValues();
  //var list = spreadsheet.getRange("A10:D11").getValues();
  
  /**
  example of the array
  [  
      [12/23/2020 20:00:00, 12/23/2020 22:00:00, EventName1, Description1, Location1: Zoom link1],
      [12/30/2020 20:00:00, 12/30/2020 22:00:00, EventName2, Description2, Location2: Zoom link2]
      
  ]
  **/
  // 3) do the work
  for (x=0; x<list.length-1; x++) {
    var eventInfo = list[x];
    
    var startTime = eventInfo[0];
    var endTime = eventInfo[1];
    var eventName = eventInfo[2];
    var desciptionInfo = eventInfo[3];
    var locationLink = eventInfo[4];
    
    // create event for eventCalwebsite.createEvent(title , startTime, endTime);
    eventCalwebsite.createEvent(eventName, startTime, endTime);
    //create event for eventCal.createEvent(title, startTime, endTime, options)
    eventCal.createEvent(eventName, startTime, endTime, {description : desciptionInfo, location: locationLink});
  }
}

/**
    // sync button(Send to SASE Calendar options)
**/
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu("Send to SASE Calendar options")
      .addItem('Schedule Events now', 'scheduleEvents')
      .addItem('Email event confirmation', 'emailMembers')
      .addSeparator()
      .addSubMenu(ui.createMenu('Delete')
          .addItem('Delete shifts from Calendar', 'clearCalendar'))
      .addToUi();
}
function scheduleShifts() {
  // Magic happens here, connecting this Google Sheet
  // with a Google Calendar.
}

function emailMembers() {
  // Magic happens here, connecting this Google Sheet
  // with Gmail.
}

function clearCalendar() {
  // This one removes all of the shifts from the event
  // Calendar, so I put it in a sub-menu to make it
  // difficult to click by accident!
}
  