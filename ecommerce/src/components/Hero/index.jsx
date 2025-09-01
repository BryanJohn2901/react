import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Até 50% de desconto em roupas masculinas",
    description:
      "Aproveite nossa coleção de camisetas, calças e jaquetas com descontos especiais para renovar seu guarda-roupa.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% de desconto em roupas femininas",
    description:
      "Estilo e conforto em vestidos, blusas e acessórios exclusivos, agora com preços imperdíveis.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% de desconto em toda a liquidação",
    description:
      "Últimas peças em promoção: garanta já roupas e acessórios com descontos de até 70%.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <section className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* background pattern */}
      <div className="absolute inset-0 -z-10">
        <div
          className="w-full h-full bg-orange-300"
          style={{
            clipPath: "polygon(0 0, 100% 0, 75% 100%, 0 100%)",
          }}
        ></div>
      </div>

      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <div className="slider-container">
          <Slider {...settings}>
            {ImageList.map((data) => (
              <article key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* text content section */}
                  <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                    >
                      {data.title}
                    </h1>
                    <p
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="100"
                      className="text-sm"
                    >
                      {data.description}
                    </p>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="300"
                    >
                      <button
                        onClick={handleOrderPopup}
                        className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                      >
                        Comprar Agora
                      </button>
                    </div>
                  </div>

                  {/* image section */}
                  <div className="order-1 sm:order-2">
                    <figure
                      data-aos="zoom-in"
                      data-aos-once="true"
                      className="relative z-10"
                    >
                      <img
                        src={data.img}
                        alt={data.title}
                        className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-125 object-contain mx-auto"
                      />
                    </figure>
                  </div>
                </div>
              </article>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Hero;
