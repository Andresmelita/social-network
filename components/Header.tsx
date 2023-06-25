import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BsCircle, BsHeart } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { FaPowerOff } from 'react-icons/fa';
import { IoAddSharp } from 'react-icons/io5';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { RiLayoutMasonryFill } from 'react-icons/ri';
import { SlArrowDown } from 'react-icons/sl';
import { logOut } from '../lib/helpers/logout.helper';
import { useUser } from '../lib/services/user.services';
import minilogo from '../public/images/hashlogo2.svg';
import InputSearch from './InputSearch';

const Header = () => {
  const { data: user } = useUser();
  const [clickMenu, setClickMenu] = useState(false);
  const handleClickMenu = () => setClickMenu(!clickMenu);
  const [LoginUser, setLoginUser] = useState(true);

  const clickLogOut = () => {
    setClickMenu(false);
    logOut();
  };

  useEffect(() => {
    if (user) {
      setLoginUser(false);
    } else {
      setLoginUser(true);
    }
  }, [user]);

  useEffect(() => {
    const jwt = Cookies.get('token');
    if (!jwt) {
      return setLoginUser(true);
    }
    return setLoginUser(false);
  }, []);

  return (
    <div className="bg-[#3f2e91] z-[100] header-container fixed justify-center">
      <div className="flex flex-row w-screen items-center h-[100%] max-w-[1100px]">
        <div className="flex place-content-between items-center relative w-screen mr-[20px] ml-[20px] sm:mr-[52px] sm:ml-[46px]">
          <div className="sm:w-[62px] sm:h-[30px] w-[40px] h-max flex items-center">
            <Link href="/">
              <Image src={minilogo} alt="imageLogo" className='absolute top-[4px] shadow-filter' width={40} />
            </Link>
          </div>
          {/*LOG CAMBIO*/}
          <nav
            className={
              LoginUser
                ? 'text-white flex sm:gap-[35px] gap-[12px] h500-normal-12px items-center'
                : 'hidden'
            }
          >
            {/* <Link href="/create" className="flex">
              <div className="flex items-center text-primary-blue">
                <IoAddSharp className=" justify-content flex m-1 text-[26px]" />
                Crear publicación
              </div>
            </Link> */}
            <div className="flex sm:gap-[18px] text-[14px] gap-[10px] h-[50px] items-center">
              <Link href="/login" className="cursor-pointer">
                <div className='shadow-text hidden sm:flex'>Create my Hash!</div>
              </Link>
              <CgProfile className='text-[24px] shadow-text' />
              {/* <p className="shadow-text">{'|'}</p> */}
              {/* <Link href="/sign-up" className="cursor-pointer">
                <div className='shadow-text'>Sign In</div>
              </Link> */}
            </div>
          </nav>
          {/*LOG CAMBIO*/}
          <nav
            className={
              LoginUser
                ? 'hidden'
                : 'text-white flex sm:gap-[49px] cursor:pointer gap-[12px] h500-normal-12px items-center'
            }
          >
            {/* <Link href="/create" className="md:flex hidden">
              <div className="flex items-center text-primary-blue">
                <IoAddSharp className=" justify-content flex m-1 text-[26px]" />
                Crear publicación
              </div>
            </Link> */}
            <div className="flex pl-[10px] pr-[10px] w-[280px] justify-center items-center">
              <InputSearch />
            </div>
            <div className="flex sm:gap-[42px] gap-[12px] justify-center items-center">
              <Link href="/profile" className="gap-[8px] md:flex hidden">
                <BsHeart className="text-primary-pink text-[16px]" />
                Mis Votos
              </Link>
              <div
                className="flex gap-[8px] sm:gap-[13px] justify-center items-center"
                onClick={handleClickMenu}
              >
                <div className="flex items-center justify-center">
                  <BsCircle className="text-white relative text-[34px]" />
                  <MdOutlinePersonOutline className="absolute text-white text-[22px]" />
                </div>
                <span className="transition-all duration-200 hover:scale-[1.0] cursor-pointer">
                  {user?.email}
                </span>
                <div className="hamburguer">
                  <SlArrowDown className="text-white ml-[0px] cursor-pointer" />
                  <div
                    className={
                      clickMenu ? 'nav-menu active' : 'nav-menu hidden'
                    }
                  >
                    <div className="bg-white absolute right-[20px] top-[91px] p-[8px] w-[250px] h-[328px] md:h-[218px] z-[200] shadow-hamburguer rounded-[25px]">
                      <div className="text-black h400-normal-18px m-[29px]">
                        <div className="flex flex-col gap-[25px] mb-[40px]">
                          <Link
                            href="/create"
                            className="flex gap-[19px] items-center md:hidden"
                          >
                            <IoAddSharp className=" justify-content text-primary-blue flex text-[23px]" />
                            Publicación
                          </Link>
                          <Link
                            href="/profile"
                            className="flex gap-[19px] items-center md:hidden"
                          >
                            <BsHeart className="text-primary-pink text-[23px]" />
                            Mis Votos
                          </Link>
                          <Link
                            href="/setup"
                            className="flex gap-[19px] items-center"
                          >
                            <RiLayoutMasonryFill className="text-[23px]" />
                            Configuración
                          </Link>
                          <a
                            className="flex gap-[19px] items-center cursor-pointer"
                            onClick={clickLogOut}
                          >
                            <FaPowerOff className="text-[23px]" />
                            Cerrar sesión
                          </a>
                        </div>
                        <div className="border-t-[2px] p-[22px] border-primary-grayDark">
                          <a className="text-primary-grayDark">
                            Ayuda y Soporte
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
