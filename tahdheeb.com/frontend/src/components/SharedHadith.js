import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SharedHadith = () => {
  const { bookId, chapterId, hadithId } = useParams();
  const [hadith, setHadith] = useState(null);

  useEffect(() => {
    axios.get(`/api/books/${bookId}/chapters/${chapterId}/hadiths/${hadithId}`)
      .then(response => setHadith(response.data))
      .catch(error => console.error(error));
  }, [bookId, chapterId, hadithId]);

  if (!hadith) return <div>Lade...</div>;

  return (
    <div>
      <h1>Hadith</h1>
      <p>{hadith.text}</p>
    </div>
  );
};

export default SharedHadith;
