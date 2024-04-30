import { Card } from "../components/Card";
import { Link } from 'react-router-dom';
import leo from '../assets/leo.jpg';

export const Next3 = () => {
  return (
    <div className="flex flex-col items-center bg-violet-200 h-screen pt-16">
      <Card
        title="Leo bb"
        img={leo}
        text="Leo bb está contigo, le importas muchísimo y aunque no pueda hablar. Él te desea un Felíz Cumpleaños..."
      />

      <Link to='/next4' className="bg-violet-300 text-violet-900 px-4 py-2 rounded-xl hover:bg-violet-400 text-center font-ita text-3xl w-48 mt-8">
        <button>Siguiente</button>
      </Link>
    </div>

  )
}

