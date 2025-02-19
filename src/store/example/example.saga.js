import { put, takeEvery } from 'redux-saga/effects';
import { getSampleData, getSampleDataSuccess } from './exampleSlice';

function* fetchSampleData() {
  try {
    // Simulate an API call
    const data = yield new Promise((resolve) => {
      setTimeout(() => {
        resolve({ message: 'Hello from Saga!' });
      }, 2000);
    });
    console.log('Data from getSampleData saga:', data);
    yield put(getSampleDataSuccess(data));
  } catch (error) {
    console.log('Error in getSampleData saga', error);
  }
}

export function* watchGetSampleData() {
  yield takeEvery(getSampleData, fetchSampleData);
}
