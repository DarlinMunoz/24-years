import { Card } from "../components/Card";
import { Link } from 'react-router-dom';
import drsimi from '../assets/drsimi.jpg'

export const Next4 = () => {
  return (
    <div className="flex flex-col items-center bg-violet-200 h-screen pt-16">
      <Card
        title="Dr. Simi"
        img={drsimi}
        text="También Dr. Simi está contigo siempre para cuidarte cuando te sientas mal, con un abrazo te desea un felíz cumpleaños..."
      />

      <Link to='/next5' className="bg-violet-300 text-violet-900 px-4 py-2 rounded-xl hover:bg-violet-400 text-center font-ita text-3xl w-48 mt-8">
        <button>Siguiente</button>
      </Link>
    </div>

  )
}

