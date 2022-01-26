import React from 'react';
import { useFormik } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import { Button, Input } from '@chakra-ui/react';
import { useEvents } from '../stores';

const CreateEventForm = () => {
  const { createEvent } = useEvents();

  const formik = useFormik({
    initialValues: {
      id: uuidv4(),
      title: '',
      description: '',
      date: '',
      startTime: '',
      endTime: '',
    },
    onSubmit: (values) => {
      const { id, title, description, date, startTime, endTime } = values;
      alert(JSON.stringify(values, null, 2));
      createEvent({
        id,
        title,
        description,
        date: `${date}T:${startTime}:00`,
        startTime,
        endTime,
        attendees: [
          {
            id: uuidv4(),
            name: 'Andrei Karas',
            email: 'test@gmail.com',
            attending: false,
          },
        ],
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col items-center">
      <div className="max-w-3xl px-4">
        <label htmlFor="firstName" className="mb-4">
          Title
        </label>
        <Input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
          className="mb-4"
        />
        <label htmlFor="description" className="mb-4">
          Description
        </label>
        <Input
          id="description"
          name="description"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.description}
          className="mb-4"
        />
        <label htmlFor="date" className="mb-4">
          Date
        </label>
        <Input
          id="date"
          name="date"
          type="date"
          onChange={formik.handleChange}
          value={formik.values.date}
          className="mb-4"
        />
        <label htmlFor="startTime" className="mb-4">
          Starting Time
        </label>
        <Input
          id="startTime"
          name="startTime"
          type="time"
          onChange={formik.handleChange}
          value={formik.values.startTime}
          className="mb-4"
        />
        <label htmlFor="endTime" className="mb-4">
          Ending Time
        </label>
        <Input
          id="end"
          name="endTime"
          type="time"
          onChange={formik.handleChange}
          value={formik.values.endTime}
          className="mb-4"
        />
        <Button type="submit" colorScheme="cyan">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default CreateEventForm;
