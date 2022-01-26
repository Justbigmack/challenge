import type { NextPage } from 'next';
import Calendar from '../components/Calendar';

const Home: NextPage = () => {
  return (
    <div className="p-40 min-h-screen">
      <Calendar />
    </div>
  );
};

export default Home;
