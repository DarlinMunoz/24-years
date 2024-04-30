import { Card } from "../components/Card";
import { Link } from 'react-router-dom';
import vaca from '../assets/vaca.jpg';

export const Next8 = () => {
  return (
    <div className="flex flex-col items-center bg-violet-200 h-screen pt-16">
      <Card
        title="Vaquitas"
        img={vaca}
        text="Las vaquitas que tanto aprecias, te tienen mucho cariño y aprecio, están agradecidas de que tú las aprecies y también te desean felíz cumpleaños..."
      />

      <Link to='/next9' className="bg-violet-300 text-violet-900 px-4 py-2 rounded-xl hover:bg-violet-400 text-center font-ita text-3xl w-48 mt-8">
        <button>Siguiente</button>
      </Link>
    </div>

  )
}

