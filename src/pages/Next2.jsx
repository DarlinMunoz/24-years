import { Card } from "../components/Card";
import { Link } from 'react-router-dom';
import luandemi from '../assets/luandemi.jpg'

export const Next2 = () => {
  return (
    <div className="flex flex-col items-center bg-violet-200 h-screen pt-16 mb-8">
      <Card
        title="Tu Mami te Desea un Felíz Cumpleaños"
        img={luandemi}
        text="Aunque no la estes escuchando, ella no se ha olvidado de tí. Ella quiere que disfrutes éste día porque sabe que existen muchas personas que te apreciamos..."
      />

      <Link to='/next3' className="bg-violet-300 text-violet-900 px-4 py-2 rounded-xl hover:bg-violet-400 text-center font-ita text-3xl w-48 mt-8">
        <button>Siguiente</button>
      </Link>
    </div>

  )
}

