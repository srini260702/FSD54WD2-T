


App.jsx :

import React, { useState } from 'react';
import BookForm from './BookForm';
import BookList from './BookList';
import AuthorForm from './AuthorForm';
import AuthorList from './AuthorList';


const App = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);

  const handleBookSubmit = (values) => {
    setBooks([...books, values]);
  };

  const handleAuthorSubmit = (values) => {
    setAuthors([...authors, values]);
  };

  const handleBookDelete = (isbn) => {
    setBooks(books.filter((book) => book.isbn !== isbn));
  };

  const handleAuthorDelete = (id) => {
    setAuthors(authors.filter((author) => author.id !== id));
  };

  return (
    <div style={{textAlign:'center', marginLeft:'450px', backgroundColor:'white',color:'black',padding:'50px'}}>
      <div style={{textAlign:'center'}}><h1>Authors and Book Details</h1></div>
      <BookForm initialValues={{ title: '', author: '', isbn: '', publicationDate: '' }} onSubmit={handleBookSubmit} />
      <BookList books={books} onDelete={handleBookDelete} />

      <AuthorForm initialValues={{ name: '', birthDate: '', biography: '' }} onSubmit={handleAuthorSubmit} />
      <AuthorList authors={authors} onDelete={handleAuthorDelete} />
    </div>
  );
};

export default App;

BookList.jsx :

import React from 'react';


const BookList = ({ books, onDelete, onEdit }) => {
  return (
    <div>
      <h2>Book List</h2>
      <ul style={{border :'1px solid black', padding:'10px'}}>
        {books.map((book) => (
          <li key={book.isbn}>
            {book.title} by {book.author}{' '}
            <button onClick={() => onEdit(book)}  style={{padding:'10px'}}>Edit</button>
            <button onClick={() => onDelete(book.isbn)}  style={{padding:'10px'}}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;

Authors.jsx :

import React from 'react';

const AuthorList = ({ authors, onDelete, onEdit }) => {
  return (
    <div>
      <h2>Author List</h2>
      <ul style={{border :'1px solid black', padding:'10px'}}>
        {authors.map((author) => (
          <li key={author.id}>
            {author.name}{' '}
            <button onClick={() => onEdit(book)} style={{padding:'10px'}}>Edit</button>
            <button onClick={() => onDelete(author.id)} style={{padding:'10px'}}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorList;

AuthorsForm.jsx :

import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const AuthorForm = ({ initialValues, onSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <div  style={{padding:'10px'}}>
          <label htmlFor="name" style={{padding:'10px'}}>Name:</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>

        <div  style={{padding:'10px'}}>
          <label htmlFor="birthDate" style={{padding:'10px'}}>Birth Date:</label>
          <Field type="date" id="birthDate" name="birthDate" />
          <ErrorMessage name="birthDate" component="div" />
        </div>

        <div  style={{padding:'10px'}}>
          <label htmlFor="biography" style={{padding:'10px'}}>Biography:</label>
          <Field as="textarea" id="biography" name="biography" />
          <ErrorMessage name="biography" component="div" />
        </div>

        <button type="submit" style={{padding:'10px'}}>Add</button>
      </Form>
    </Formik>
  );
};

export default AuthorForm;

BookForm.jsx :

import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const BookForm = ({ initialValues, onSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <div style={{padding:'10px'}}>
          <label htmlFor="title" style={{padding:'10px'}}>Title:</label>
          <Field type="text" id="title" name="title" />
          <ErrorMessage name="title" component="div" />
        </div>

        <div style={{padding:'10px'}}>
          <label htmlFor="author" style={{padding:'10px'}}>Author:</label>
          <Field type="text" id="author" name="author" />
          <ErrorMessage name="author" component="div" />
        </div>

        <div style={{padding:'10px'}}>
          <label htmlFor="isbn" style={{padding:'10px'}}>ISBN:</label>
          <Field type="text" id="isbn" name="isbn" />
          <ErrorMessage name="isbn" component="div" />
        </div>

        <div style={{padding:'10px'}}>
          <label htmlFor="publicationDate" style={{padding:'10px'}}>Publication Date:</label>
          <Field type="date" id="publicationDate" name="publicationDate" />
          <ErrorMessage name="publicationDate" component="div" />
        </div>

        <button type="submit" style={{padding:'10px'}}>Add</button>
      </Form>
    </Formik>
  );
};

export default BookForm;