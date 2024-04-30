import { Card } from "../components/Card";
import { Link } from 'react-router-dom';
import family from '../assets/family.jpg';

export const Next5 = () => {
  return (
    <div className="flex flex-col items-center bg-violet-200 h-screen pt-16">
      <Card
        title="Recuerda Que Siguen Aquí"
        img={family}
        text="Ellos te están viendo, no se olvidan de tí y siempre te están cuidando junto a Dios. Ten en cuenta que ellos también te desean un felíz cumpleaños..."
      />

      <Link to='/next6' className="bg-violet-300 text-violet-900 px-4 py-2 rounded-xl hover:bg-violet-400 text-center font-ita text-3xl w-48 mt-8">
        <button>Siguiente</button>
      </Link>
    </div>

  )
}

