import { Card } from "../components/Card";
import { Link } from 'react-router-dom';
import lyd from '../assets/lyd.jpg';

export const Next10 = () => {
  return (
    <div className="flex flex-col items-center bg-violet-200 h-screen pt-16">
      <Card
        title="I Love You"
        img={lyd}
        text="Te deseo un felíz cumpleaños mi amor, en próximos cumpleaños pasaremos juntos, por ahora, aunque no pueda darte un abrazo, quiero hacerte llegar mi cariño al menos de ésta manera, nunca olvides lo mucho que Te amo. También te quiero hacer una pequeña petición y no acepto un NO como respuesta, dale click al botón de abajo..."
      />

      <Link to='https://wa.me/+593999024171?text=YA%20LE%20DI%20CLICK' className="bg-violet-300 text-violet-900 px-4 py-2 rounded-xl hover:bg-violet-400 text-center font-ita text-3xl w-48 mt-8">
        <button>Dame Click</button>
      </Link>
    </div>

  )
}

