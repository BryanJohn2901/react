import React from 'react'
import BannerImg from '../../assets/women/women2.jpg'
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
    return (
        <section 
          className="min-h-[550px] flex justify-center items-center py-12 sm:py-0" 
          aria-label="Seção de promoção de inverno"
        >
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                    
                    {/* Imagem principal */}
                    <figure data-aos="zoom-in" className="flex justify-center">
                        <img
                            src={BannerImg}
                            alt="Promoção de inverno com roupas femininas em destaque"
                            className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
                        />
                    </figure>

                    {/* Texto e destaques */}
                    <article className="flex flex-col justify-center gap-6 sm:pt-0">
                        <header>
                            <h1 className="text-3xl sm:text-4xl font-bold">
                                Promoção de Inverno até 50% OFF
                            </h1>
                        </header>
                        <p className="text-sm text-gray-500 tracking-wide leading-5">
                            Aproveite nossa promoção especial de inverno! Produtos de alta
                            qualidade com descontos incríveis, entrega rápida e diversas
                            formas de pagamento. Garanta já as melhores ofertas da estação!
                        </p>

                        {/* Benefícios */}
                        <ul className="flex flex-col gap-4" aria-label="Benefícios da promoção">
                            <li data-aos="fade-up" className="flex items-center gap-4">
                                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                                <span>Produtos de Qualidade</span>
                            </li>
                            <li data-aos="fade-up" className="flex items-center gap-4">
                                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                                <span>Entrega Rápida</span>
                            </li>
                            <li data-aos="fade-up" className="flex items-center gap-4">
                                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                                <span>Pagamento Facilitado</span>
                            </li>
                            <li data-aos="fade-up" className="flex items-center gap-4">
                                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                                <span>Ofertas Exclusivas</span>
                            </li>
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Banner
