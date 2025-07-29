import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMoods, reset } from '../../features/mood/moodSlice';
import MoodForm from '../../components/MoodForm';
import MoodItem from '../../components/MoodItem';

const MoodDashboard = () => {
  const dispatch = useDispatch();
  const { moods, isLoading, isError, message } = useSelector((state) => state.moods);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) console.error('Mood error:', message);
    if (user) dispatch(getMoods());
    return () => dispatch(reset());
  }, [user, dispatch, isError, message]);

  return (
    <section className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">🧠 Mood Tracker</h1>
      <MoodForm />
      <div className="mt-6 grid gap-4">
        {isLoading ? (
          <p>Loading moods...</p>
        ) : moods.length > 0 ? (
          moods.map((mood) => <MoodItem key={mood._id} mood={mood} />)
        ) : (
          <p className="text-gray-500">No mood entries yet.</p>
        )}
      </div>
    </section>
  );
};

export default MoodDashboard;
