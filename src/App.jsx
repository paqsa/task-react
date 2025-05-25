import { useState } from 'react';
import './App.css';
import MainCard from './components/mainCard/mainCard';
import StartContent from "./components/startContent/startContent"

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task: 1', description: 'Lorem Ipsum is simply dummy' },
    { id: 2, title: 'Task: 2', description: 'Another task description' },
    { id: 3, title: 'Task: 3', description: 'Third task content' },
    { id: 4, title: 'Task: 4', description: 'Fourth task here' },
  ]);

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <main className='mainContent'>
      <StartContent></StartContent>

      {tasks.map(task => (
        <MainCard
          key={task.id}
          title={task.title}
          description={task.description}
          onDelete={() => handleDelete(task.id)}
        />
      ))}
    </main>
  );
}

export default App;
