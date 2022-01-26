import create from 'zustand';
import { AttendeesStoreInterface } from './attendeesTypes';

export const useAttendees = create<AttendeesStoreInterface>((set) => ({
  attendees: {},
  createAttendee: (attendee) =>
    set((state) => ({
      attendees: { ...state.attendees, [attendee.id]: attendee },
    })),
}));
