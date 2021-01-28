import React,{useState} from 'react';
import { render } from '@testing-library/react';
import TodoList from './TodoList';

test('Renders Todo List Correctly', () => {
  const test1 = () => {const [tasksSet1,setTasksSet1] = useState(["masak ikan", "minum air"])}
  const { getByText } = render(<TodoList tasks={tasksSet1} onTasksChange={setTasksSet1} />);
  const masakSet1 = getByText(/masak ikan/gi);
  expect(masakSet1).toBeInTheDocument();
  const minumSet1 = getByText(/minum air/gi);
  expect(minumSet1).toBeInTheDocument();


});
