import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const ChapterList = () => {
  const { bookId } = useParams();
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    axios.get(`/api/books/${bookId}/chapters`)
      .then(response => setChapters(response.data))
      .catch(error => console.error(error));
  }, [bookId]);

  return (
    <div>
      <h1>Kapitel</h1>
      {chapters.map(chapter => (
        <div key={chapter.id}>
          <Link to={`/chapter/${bookId}/${chapter.id}`}>{chapter.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default ChapterList;
