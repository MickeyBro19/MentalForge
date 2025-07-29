import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getJournals, reset } from "../../features/journal/journalSlice";
import JournalForm from "../../components/JournalForm";
import JournalItem from "../../components/JournalItem";

const JournalDashboard = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { journals, isLoading, isError, message } = useSelector((state) => state.journals);

  useEffect(() => {
    if (isError) {
      console.error("Error fetching journals:", message);
    }

    if (user?.token) {
      dispatch(getJournals());
    }

    return () => {
      if (!isLoading) dispatch(reset());
    };
  }, [user, dispatch, isError, message]);

  return (
    <section className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">📋 Your Journals</h1>

      <JournalForm />

      <div className="mt-8">
        {isLoading ? (
          <p className="text-gray-500">Loading journals...</p>
        ) : journals && journals.length > 0 ? (
          <div className="grid gap-4">
            {journals.map((journal) => (
              <JournalItem key={journal._id} journal={journal} />
            ))}
          </div>
        ) : isError ? (
          <p className="text-red-500">Failed to load journals.</p>
        ) : (
          <p className="text-gray-500">No journals yet. Create one!</p>
        )}
      </div>
    </section>
  );
};

export default JournalDashboard;
