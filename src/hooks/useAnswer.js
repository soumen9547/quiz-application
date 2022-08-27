import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useAnswers(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    async function fetchAnswers() {
      // database related works
      const db = getDatabase();
      const answerref = ref(db, "answers/" + videoID + "/questions");
      const answerQuery = query(answerref, orderByKey());

      try {
        setError(false);
        setLoading(true);
        // request firebase database
        const result = await get(answerQuery);
        setLoading(false);
        if (result.exists()) {
            setAnswers((prevQuestions) => {
            return [...prevQuestions, ...Object.values(result.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    fetchAnswers();
  }, [videoID]);

  return {
    loading,
    error,
    answers,
  };
}