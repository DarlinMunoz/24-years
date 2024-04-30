import { Card } from "../components/Card";
import { Link } from 'react-router-dom';
import tia from '../assets/tia.jpg';

export const Next6 = () => {
  return (
    <div className="flex flex-col items-center bg-violet-200 h-screen pt-16">
      <Card
        title="Tú Familia Está Contigo"
        img={tia}
        text="Tía Pera y el resto de tu familia también están contigo y te aprecian mucho, siempre estarán presentes para tí..."
      />

      <Link to='/next7' className="bg-violet-300 text-violet-900 px-4 py-2 rounded-xl hover:bg-violet-400 text-center font-ita text-3xl w-48 mt-8">
        <button>Siguiente</button>
      </Link>
    </div>

  )
}

