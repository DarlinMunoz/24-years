import { Card } from "../components/Card";
import { Link } from 'react-router-dom';
import hearth from '../assets/hearth.jpg'

export const HomePage = () => {
  return (
    <div className="flex flex-col items-center bg-violet-200 h-screen pt-16">
      <Card
        title="Happy 24th Birthday"
        img={hearth}
        text="Felíz cumpleaños número 24 princesa mía. Estuve esperando mucho éste gran día..."
      />

      <Link to='/next1' className="bg-violet-300 text-violet-900 px-4 py-2 rounded-xl hover:bg-violet-400 text-center font-ita text-3xl w-48 mt-8">
        <button>Siguiente</button>
      </Link>
    </div>
  )
}
