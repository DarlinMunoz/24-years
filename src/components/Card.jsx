export const Card = ({ title, img, text }) => {
  return (
    <div className="flex flex-col items-center bg-violet-400 rounded-2xl mx-8 p-8 hover:bg-violet-500 w-80 border-4 border-violet-50">
      <header className="font-ita text-center">
        <h1 className="text-5xl text-gray-50">{title}</h1>
      </header>
      <div className="my-4">
        <img src={img} alt={title} className="rounded-2xl border-4 border-violet-200 w-56" />
      </div>
      <section className="font-ita">
        <p className="text-3xl text-center text-gray-100">
          {text}
        </p>
      </section>
    </div>
  )
}

