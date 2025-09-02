import React from "react";
import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  { title: "Início", link: "/#" },
  { title: "Sobre", link: "/#about" },
  { title: "Contato", link: "/#contact" },
  { title: "Blog", link: "/#blog" },
];

const Footer = () => {
  return (
    <footer style={BannerImg} className="text-white">
      <div className="container">
        <section
          data-aos="zoom-in"
          className="grid md:grid-cols-3 pb-44 pt-5"
        >
          {/* Detalhes da empresa */}
          <article className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo Shopsy" className="max-w-[50px]" />
              Shopsy
            </h1>
            <p>
              Somos especialistas em criação de sites modernos, lojas virtuais e
              estratégias digitais que ajudam empresas a crescer e se destacar
              online. Nossa missão é transformar ideias em resultados.
            </p>
          </article>

          {/* Navegação */}
          <nav
            className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10"
            aria-label="Links de navegação do rodapé"
          >
            <div>
              <div className="py-8 px-4">
                <h2 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links Importantes
                </h2>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                    >
                      <a href={link.link}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="py-8 px-4">
                <h2 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Navegação
                </h2>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                    >
                      <a href={link.link}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Redes sociais e contato */}
            <div>
              <div className="flex items-center gap-3 mt-6" aria-label="Redes sociais">
                <a href="#" aria-label="Instagram">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#" aria-label="Facebook">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>

              <address className="mt-6 not-italic">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Curitiba, Paraná - Brasil</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <a href="tel:+5541999999999" className="hover:underline">
                    +55 (41) 99999-9999
                  </a>
                </div>
              </address>
            </div>
          </nav>
        </section>

        {/* Créditos no final */}
        <div className="flex justify-center items-center py-4 border-t border-gray-600">
          <p className="text-black">
            Desenvolvido por <span className="font-black">Johnson</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
