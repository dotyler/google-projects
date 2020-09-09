function scheduleEvents() {
  // 1) open Events Calendar
  var spreadsheet = SpreadsheetApp.getActiveSheet();
  var calendarID = spreadsheet.getRange("E1").getValue();
  var eventCal = CalendarApp.getCalendarById(calendarID);
  
  // 2) get event date/name info into the code
  var list = spreadsheet.getRange("A1:C55").getValues();
  
  /**
  example:
  {  
      [9/2/2020, CS 33xx, Homework 1 Group A],
      [9/4/2020, CS 33xx, Virtual Machine Assignment],
      
  }
  **/
  // 3) do the work
  for (x=0; x<list.length-1; x++) {
    var eventInfo = list[x];
    
    //var startTime = eventInfo[0];
    //var endTime = eventInfo[1];
    //var eventName = eventInfo[2];
    //eventCal.createEvent(eventName, startTime, endTime);
    
    var date = eventInfo[0];
    var className = eventInfo[1];
    // make options Object : var options = eventInfo[2];
    var options = eventInfo[2];
    //add options object : eventCal.createAllDayEvent(className, date, options)
    eventCal.createAllDayEvent(className, date, {description: options});
  }
}

/**
    // sync button(Full Send to CalendarXD)
**/
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu("Full Send to CalendarXD")
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
  