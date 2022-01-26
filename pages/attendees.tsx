import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@chakra-ui/react';
import { useAttendees } from '../stores/attendees/store';

const AttendeesPage = () => {
  const { createAttendee } = useAttendees();

  return (
    <div>
      Attendees will live here
      <div className="p-20">
        <Button
          onClick={() =>
            createAttendee({
              id: uuidv4(),
              name: 'Andrei Karas',
              email: 'test@gmail.com',
              attending: false,
            })
          }
        >
          Create a test attendee
        </Button>
      </div>
    </div>
  );
};

export default AttendeesPage;
