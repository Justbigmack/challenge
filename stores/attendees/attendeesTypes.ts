export interface AttendeeInterface {
  id: string;
  name: string;
  email: string;
  attending: boolean;
}

export type AttendeesType = {
  [key: string]: AttendeeInterface;
};

export interface AttendeesStoreInterface {
  attendees: AttendeesType;
  createAttendee: (attendee: AttendeeInterface) => void;
}
