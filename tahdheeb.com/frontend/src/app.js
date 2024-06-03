import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import ChapterList from './components/ChapterList';
import HadithList from './components/HadithList';
import Login from './components/Login';
import ReportForm from './components/ReportForm';
import SharedHadith from './components/SharedHadith';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BookList />} />
      <Route path="/book/:bookId" element={<ChapterList />} />
      <Route path="/chapter/:bookId/:chapterId" element={<HadithList />} />
      <Route path="/chapter/:bookId/:chapterId/:hadithId" element={<SharedHadith />} />
      <Route path="/login" element={<Login />} />
      <Route path="/report/:hadithId" element={<ReportForm />} />
    </Routes>
  );
};
export default App;
