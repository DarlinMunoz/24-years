import { Card } from "../components/Card";
import { Link } from 'react-router-dom';
import tobi from '../assets/tobi.jpg';

export const Next7 = () => {
  return (
    <div className="flex flex-col items-center bg-violet-200 h-screen pt-16">
      <Card
        title="Super Tobito"
        img={tobi}
        text="Super Tobito también te desea un felíz cumpleaños aunque no pueda hablar, yo sé que él será muy consentido cuando te conozca..."
      />

      <Link to='/next8' className="bg-violet-300 text-violet-900 px-4 py-2 rounded-xl hover:bg-violet-400 text-center font-ita text-3xl w-48 mt-8">
        <button>Siguiente</button>
      </Link>
    </div>

  )
}

