import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeValue, getSampleData } from './store/example/exampleSlice';

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
    <>
      <h1>React JS Application</h1>
      <div>
        <button type="button" onClick={updateStoreData}>
          Update store data: example slice
        </button>
        <p>{value}</p>
      </div>
    </>
  );
};

export default App;
