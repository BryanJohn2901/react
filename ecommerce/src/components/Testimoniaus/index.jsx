import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Sachin Tendulkar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      className="py-10 mb-10"
      aria-label="Depoimentos de clientes"
    >
      <div className="container">
        {/* Cabeçalho da seção */}
        <header className="text-center mb-10 max-w-[600px] mx-auto">
          <p
            data-aos="fade-up"
            className="text-sm text-primary"
          >
            O que nossos clientes dizem
          </p>
          <h2
            data-aos="fade-up"
            className="text-3xl font-bold"
          >
            Depoimentos
          </h2>
          <p
            data-aos="fade-up"
            className="text-xs text-gray-400"
          >
            Confira a experiência de quem já comprou conosco e aprovou a
            qualidade dos nossos produtos e serviços.
          </p>
        </header>

        {/* Lista de depoimentos */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <article
                key={data.id}
                className="my-6"
              >
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                  
                  {/* Foto do cliente */}
                  <figure className="mb-4 flex justify-center">
                    <img
                      src={data.img}
                      alt={`Foto de ${data.name}`}
                      className="rounded-full w-20 h-20"
                    />
                  </figure>

                  {/* Depoimento */}
                  <blockquote className="flex flex-col items-center gap-4 text-center">
                    <p className="text-xs text-gray-500">“{data.text}”</p>
                    <footer>
                      <cite className="not-italic text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </cite>
                    </footer>
                  </blockquote>

                  {/* Aspas decorativas */}
                  <span className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </span>
                </div>
              </article>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
