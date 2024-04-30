import { Card } from "../components/Card";
import { Link } from 'react-router-dom';
import mother from '../assets/mother.jpg'

export const Next1 = () => {
  return (
    <div className="flex flex-col items-center bg-violet-200 h-screen pt-16">
      <Card
        title="Éste Día es Importante"
        img={mother}
        text="Tú mami está felíz de que su niña siga creciendo..."
      />

      <Link to='/next2' className="bg-violet-300 text-violet-900 px-4 py-2 rounded-xl hover:bg-violet-400 text-center font-ita text-3xl w-48 mt-8">
        <button>Siguiente</button>
      </Link>
    </div>

  )
}

