This is a repo for Doctorly's FE challenge.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project progress

The project is very far from being done. I will try to explain my way of thinking in this readme.

# Development process

At the very first glance, I was honestly very confused, because there is no backend for this task. I thought that there is no way I can build a calendar in 4 hours combined with all the usual functionality of an app like CRUD and adding state to it, so I decided to use an external calendar library. At first I was going to use [react-calendar](https://www.npmjs.com/package/react-calendar) as they were quite popular, but after glancing over their documentation I had to look for another one and after some time I decided to use [FullCalendar](https://fullcalendar.io/) because it was lightweigt, had decent typescript demos and their docs seemes quite vast, which would decrease the likelihood of running into errors.

I decided to use Next.js, because I am more used to it. CRA would have sufficed, but Next.js gives quite a bit out of the box and it is always nice to have a possibility of simply rendering pages statically, if possible. In my case, there are literally no API calls, so that is an overkill.

My first steps were to set up a dev env with things like eslint, prettier, etc to organize the dev experience (but it actually was a mistake and I could have saved time on it). Then I started building out the layout and pages. The task it was still pretty vague, so I thought that I will figure it out on the go.

I built the basics like header and tried to render the calendar, but quickly ran into the bug with the calendar library, because Next.js does not allow importing css files anywhere but the top level and in this library they were doing that. So I had to spend quite some time to fix that and the fix was to transpile their modules manually in `next.config.js`. I quickly rendered the calendar with some dummy data and decided to shift to building out the actual api or creating, deleting, etc attendees / events. For that I chose the state management library called [zustand](https://github.com/pmndrs/zustand). I find it quite easy and convenient to use. Their API is clear and consise compared to something like redux, where you need a lot of boilerplate to make things work.

After building that I wanted to allow the user to create an event + an attendee, so I had to build a form. I chocie [formik](https://formik.org/) for building forms and yup for validation. I built the form without field validation because of lack of time. I would then later just place this form in a custom component that would be rendered on clicking on an empty calendar cell (that was the idea).

I tested out the submission and everything was working fine, but I ran into the problem with FullCalendar. For some reason their events api that I was adding would not cause a rerender. Meaning that even if the component with it was rerendered and the events themselves changed, the events were not displayed in the calendar. I tried different techniques and renaming the events, but couldn't find a solution to this problem given the time constraint.

And that is pretty much where I stopped.

# What I would have done differently

- No one is really protected from that, but a better solution might have been starting with the calendar and working things out with dummy data all the way to the working prototype. Instead I ended up with something that is in a non-working state. The API of this calendar was not as clear as I expected.
- Write tests as I go. I was focusing on building the app out, but considering that I didn't get far and wrote 0 tests doesn't show me from a good side. I was trying to get the prototype to work and write tests later (I can write them, I didn't avoid them on purpose)

# Feedback about the challenge itself

- It is not really clear what the deliverable. It says that you don't need to build Backend for this task, but there is no BE endpoints in the task and there is no link to it, so you kind of have to build the BE(in a FE manner) to be able to do anything at all
- One needs more time to complete this task. Perhaps the purpose of this task is to put you in unrealistic time constraints and see how you work under that pressure. In that case, it fulfilled its purpose.
- There is 2 sections on the requirements. Perhaps combinning them into one will make it more intuitive.
- It is a bit frustrating that you have to rely on external libraries in this task and the chance that you have never worked with them is quite high, so the chance of running into bugs and not completing parts of the challenge that you know how to complete is also quite high
