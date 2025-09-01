import React from "react";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6";

const Products = () => {
  const ProductsData = [
    {
      id: 1,
      img: Img1,
      title: "Roupa Étnica Feminina",
      rating: 5.0,
      color: "Branco",
      aosDelay: "0",
    },
    {
      id: 2,
      img: Img2,
      title: "Moda Feminina Casual",
      rating: 4.5,
      color: "Vermelho",
      aosDelay: "200",
    },
    {
      id: 3,
      img: Img3,
      title: "Óculos de Sol",
      rating: 4.7,
      color: "Marrom",
      aosDelay: "400",
    },
    {
      id: 4,
      img: Img4,
      title: "Camiseta Estampada",
      rating: 4.4,
      color: "Amarelo",
      aosDelay: "600",
    },
    {
      id: 5,
      img: Img2,
      title: "Camiseta Fashion",
      rating: 4.5,
      color: "Rosa",
      aosDelay: "800",
    },
  ];

  return (
    <section className="mt-14 mb-12">
      <div className="container">
        {/* Cabeçalho da Seção */}
        <header className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-primary">Produtos mais vendidos para você</p>
          <h1
            data-aos="zoom-out"
            data-aos-duration="500"
            data-aos-once="true"
            className="text-5xl sm:text-6xl lg:text-7xl font-bold"
          >
            Produtos
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
            className="text-sm text-gray-600"
          >
            Confira nossa seleção exclusiva de peças femininas que combinam estilo e conforto.
          </p>
        </header>

        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
          {ProductsData.map((data) => (
            <article
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}
              className="space-y-3"
            >
              <figure>
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <figcaption className="mt-2">
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">Cor: {data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </figcaption>
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
