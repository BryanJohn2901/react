import React from 'react'
import Banner from '../../assets/website/orange-pattern.jpg'

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "400px", // altura mínima para garantir visibilidade
  width: "100%",
}

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="bg-gray-100 dark:bg-gray-800 text-white flex items-center justify-center mb-20"
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Receba novidades e ofertas exclusivas
          </h1>

          <input
            data-aos="fade-up"
            type="email"
            placeholder="Digite seu e-mail"
            className="w-full p-3 rounded-md text-gray-800"
          />
          <button
            data-aos="fade-up"
            className="bg-primary text-white px-6 py-3 rounded-md hover:scale-105 duration-200 w-full sm:w-auto"
          >
            Inscrever-se
          </button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
