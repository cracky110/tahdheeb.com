const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const bookRoutes = require('./routes/bookRoutes');
const chapterRoutes = require('./routes/chapterRoutes');
const hadithRoutes = require('./routes/hadithRoutes');
const reportRoutes = require('./routes/reportRoutes');
const authRoutes = require('./routes/authRoutes');
const app = express();

app.use(bodyParser.json());
app.use(session({
    secret: 'yourSecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true, maxAge: 30 * 60 * 1000 }
}));

app.use('/api/books', bookRoutes);
app.use('/api/books/:bookId/chapters', chapterRoutes);
app.use('/api/books/:bookId/chapters/:chapterId/hadiths', hadithRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/auth', authRoutes);

app.listen(3000, () => {
    console.log('Server is running on https://localhost:3000');
});
