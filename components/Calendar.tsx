import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useEvents } from '../stores';

const Calendar = () => {
  const { events } = useEvents();

  const normalizedEvents = Object.keys(events).map((eventId) => ({
    title: events[eventId].title,
    start: events[eventId].date,
  }));

  // add date click listener

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={normalizedEvents}
      selectable
    />
  );
};

export default Calendar;
