import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { changeValue, getSampleData } from './store/example/exampleSlice';
import ExamplePage from './pages/ExamplePage';

const App = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.example);

  const updateStoreData = () => {
    dispatch(changeValue('value is updated'));
  };

  useEffect(() => {
    dispatch(getSampleData());
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<ExamplePage />} />
      </Routes>
      <div>
        <button type="button" onClick={updateStoreData}>
          Update store data: example slice
        </button>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default App;
