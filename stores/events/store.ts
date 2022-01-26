import create from 'zustand';
import { EventsStoreInterface } from './eventsTypes';

export const useEvents = create<EventsStoreInterface>((set) => ({
  events: {},
  createEvent: (event) =>
    set((state) => ({
      events: { ...state.events, [event.id]: event },
    })),
  deleteEvent: (id) =>
    set((state) => {
      const currentEvents = { ...state.events };
      delete currentEvents[id];

      return {
        events: currentEvents,
      };
    }),
}));
