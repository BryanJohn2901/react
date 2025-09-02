import Logo from '../../assets/logo.png'
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from './DarkMode';

const Menu = [
  { id: 1, name: "Início", link: "/#" },
  { id: 2, name: "Mais Vendidos", link: "/#services" },
  { id: 3, name: "Moda Infantil", link: "/#kids-wear" },
  { id: 4, name: "Moda Masculina", link: "/#mens-wear" },
  { id: 5, name: "Eletrônicos", link: "/#electronics" },
];

const DropdownLinks = [
  { id: 1, name: 'Produtos em Alta', link: '/#' },
  { id: 2, name: 'Mais Procurados', link: '/#' },
  { id: 3, name: 'Melhor Avaliados', link: '/#' },
];

const Navbar = () => {
  return (
    <header className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      
      {/* Barra Superior */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          
          {/* Logo */}
          <a
            className="font-bold text-2xl sm:text-3xl flex gap-2 items-center"
            href="/"
            aria-label="Página inicial"
          >
            <img className="w-10" src={Logo} alt="Logo da Shopsy" /> BJ
          </a>

          {/* Busca + Carrinho + Dark Mode */}
          <div className="flex justify-between items-center gap-4">
            
            {/* Barra de pesquisa */}
            <form className="relative group hidden sm:block" role="search">
              <label htmlFor="search" className="sr-only">Pesquisar produtos</label>
              <input
                id="search"
                type="search"
                placeholder="Pesquisar..."
                aria-label="Pesquisar produtos"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="pointer-events-none text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 text-lg" />
            </form>

            {/* Botão Carrinho */}
            <button
              onClick={() => alert("Sistema de pedidos ainda não disponível")}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
              aria-label="Abrir carrinho de compras"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Comprar
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Dark Mode */}
            <DarkMode />
          </div>
        </div>
      </div>

      {/* Barra Inferior - Navegação */}
      <nav
        className="flex justify-center shadow-sm dark:shadow-gray-800"
        aria-label="Menu principal"
      >
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}

          {/* Dropdown */}
          <li className="group relative cursor-pointer">
            <button
              className="flex items-center gap-[2px] py-2"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Produtos em Alta
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </button>

            <div className="absolute z-[9999] hidden group-hover:block w-[180px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
