import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const HadithList = () => {
  const { bookId, chapterId } = useParams();
  const [hadiths, setHadiths] = useState([]);

  useEffect(() => {
    axios.get(`/api/books/${bookId}/chapters/${chapterId}/hadiths`)
      .then(response => setHadiths(response.data))
      .catch(error => console.error(error));
  }, [bookId, chapterId]);

  return (
    <div>
      <h1>Hadithe</h1>
      {hadiths.map(hadith => (
        <div key={hadith.id}>
          <p>{hadith.text}</p>
          <button onClick={() => navigator.clipboard.writeText(window.location.href + `/${hadith.id}`)}>Teilen</button>
          <Link to={`/chapter/${bookId}/${chapterId}/${hadith.id}`}>Anzeigen</Link>
        </div>
      ))}
    </div>
  );
};

export default HadithList;
