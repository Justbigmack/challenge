import { AttendeeInterface } from '../attendees';

export interface EventInterface {
  id: string;
  title: string;
  description: string;
  attendees: AttendeeInterface[];
  date: string;
  startTime: string;
  endTime: string;
}

export type EventsType = {
  [key: string]: EventInterface;
};

export interface EventsStoreInterface {
  events: EventsType;
  createEvent: (event: EventInterface) => void;
  deleteEvent: (id: string) => void;
}
