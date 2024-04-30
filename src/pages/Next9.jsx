import { Card } from "../components/Card";
import { Link } from 'react-router-dom';
import darlin from '../assets/darlin.jpg';

export const Next9 = () => {
  return (
    <div className="flex flex-col items-center bg-violet-200 h-screen pt-16">
      <Card
        title="Tú Novio y Futuro Esposo"
        img={darlin}
        text="Ésta sonrisa es la que tengo día a día gracias a tí, te recuerdo que tienes a muchas personas que te apreciamos y que no estas sola..."
      />

      <Link to='/next10' className="bg-violet-300 text-violet-900 px-4 py-2 rounded-xl hover:bg-violet-400 text-center font-ita text-3xl w-48 mt-8">
        <button>Siguiente</button>
      </Link>
    </div>

  )
}

