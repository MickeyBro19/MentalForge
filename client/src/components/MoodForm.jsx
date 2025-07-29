import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createMood } from '../features/mood/moodSlice';

const emojiMap = {
  happy: '😊',
  sad: '😢',
  angry: '😠',
  anxious: '😰',
  neutral: '😐',
};

const MoodForm = () => {
  const [mood, setMood] = useState('');
  const [note, setNote] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mood) return;
    dispatch(createMood({ mood, note }));
    setMood('');
    setNote('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white rounded-xl p-6 shadow">
      <h2 className="text-lg font-semibold text-indigo-700">How are you feeling?</h2>
      <div className="flex gap-3">
        {Object.entries(emojiMap).map(([value, emoji]) => (
          <button
            key={value}
            type="button"
            onClick={() => setMood(value)}
            className={`text-3xl p-2 rounded-full ${
              mood === value ? 'bg-indigo-100 scale-110' : 'hover:bg-gray-100'
            } transition`}
          >
            {emoji}
          </button>
        ))}
      </div>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Add a note (optional)..."
        className="w-full px-3 py-2 border rounded"
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        Submit Mood
      </button>
    </form>
  );
};

export default MoodForm;
