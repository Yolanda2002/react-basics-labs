
import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" />
      <Task title="Laundry" deadline="Tomorrow" 
      discription="Fold laundry and put away">
      </Task>
      <Task title="Tidy" deadline="Today" />
      <Task title="Vacumming" deadline="Tommorrow" />
      <Task title="Sweeping" deadline="Today" 
      discription="Sweep before Vacumming">
      </Task>
    </div>
  );
}

export default App;