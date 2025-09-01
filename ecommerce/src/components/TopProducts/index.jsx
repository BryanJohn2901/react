import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Camiseta Casual",
    description:
      "Modelo básico e confortável, ideal para o dia a dia com um toque de estilo.",
  },
  {
    id: 2,
    img: Img2,
    title: "Camisa Estampada",
    description:
      "Peça moderna e estilosa, perfeita para quem gosta de se destacar no visual.",
  },
  {
    id: 3,
    img: Img3,
    title: "Camisa Feminina",
    description:
      "Conforto e elegância em um só look, pensada para ocasiões casuais ou formais.",
  },
];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <section className="py-12">
      <div className="container">
        {/* Cabeçalho */}
        <header className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Produtos mais bem avaliados para você
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Nossos Melhores Produtos
          </h1>
          <p
            data-aos="fade-up"
            className="text-xs text-gray-600 dark:text-gray-300"
          >
            Descubra nossa seleção especial com as peças mais procuradas pelos clientes.
          </p>
        </header>

        {/* Lista de Produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <article
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-gray-50 dark:bg-gray-900 hover:bg-black/80 dark:hover:bg-primary 
                         text-gray-900 dark:text-gray-100 hover:text-white relative shadow-xl duration-300 
                         group max-w-[300px]"
            >
              {/* Imagem do Produto */}
              <figure className="h-[100px]">
                <img
                  src={data.img}
                  alt={data.title}
                  className="max-w-[140px] block mx-auto transform -translate-y-20 
                             group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </figure>

              {/* Detalhes */}
              <div className="p-4 text-center">
                {/* Estrelas */}
                <div className="w-full flex items-center justify-center gap-1 mb-2">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>

                <h2 className="text-xl font-bold">{data.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>

                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 
                             group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Comprar Agora
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopProducts;
