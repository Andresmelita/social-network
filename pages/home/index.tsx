import Image from 'next/image';
import { useEffect, useState } from 'react';
import Login from '../../components/Login';
import Layout from '../../components/layout/Layout';
import { useCategories } from '../../lib/services/category.services';
import { usePublications } from '../../lib/services/publication.services';
import { useUser } from '../../lib/services/user.services';
import logoHash from '../../public/images/hashnet.svg';
import '../../styles/Home.module.css';


const Home = () => {
  const { data, error, isLoading } = usePublications();
  const { data: categories } = useCategories();
  const { data: user } = useUser();
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    if (user) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [user]);

  return (
    <Layout title="Home | Hash Net" description="Home">
      <div className="flex flex-col justify-center items-center home-init">
        <div className="top-0 left-0 flex flex-col relative min-h-max">
          <div className="min-h-[480px] max-h-[480px] w-[100vw] bg-[url('/images/back01.jpg')] bg-center bg-cover"></div>
          <div className=" flex w-[100%] flex-col gap-[16px] justify-center items-center absolute z-40 top-[59px] h-[400px]">
            <div className="flex justify-center items-center mb-[16px] md:p-0 p-[20px]">
              <Image
                src={logoHash}
                alt="home-hash"
                width={380}
              />
            </div>

            {/* <div className="flex w-[100vw] pl-[10px] pr-[10px] justify-center items-center">
              <InputSearch />
            </div> */}
            {/* <div className="flex gap-[7px] relative flex-wrap justify-center w-[100vw] max-w-[465px] h-[100vh] max-h-[30px] pl-[20px] pr-[20px] md:pl-[0px] md:pr-[0px]">
              {categories?.map((category) => {
                return (
                  <div className="flex w-max h-[30px]" key={category.id}>
                    <Link href={`/categories/${category.id}`}>
                      <Category Categories={category.name} />
                    </Link>
                  </div>
                );
              })}
            </div> */}
          </div>
          <div className=" custom-shape-divider-bottom-1687556756 shadow-invert">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className="shape-fill"></path>
            </svg>
          </div>
          <div className='w-[100vw] bg-[#fff] h-[40px] mt-[475px] absolute'></div>
          {/* <svg id="wave" version="1.1" xmlns="http://www.w3.org/2000/svg"
            className="-mt-[80px] h-[120px] w-full svg-curve">
            <defs>
              <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop stop-color="#fff" offset="100%"></stop>
                <stop stop-color="#111" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path className='path-curve' fill="url(#sw-gradient-0)"
              d="M0,0L80,16C160,32,320,64,480,74C640,84,800,72,960,58C1120,44,1280,28,1440,26C1600,24,1760,36,1920,48C2080,60,2240,72,2400,78C2560,84,2720,84,2880,78C3040,72,3200,60,3360,46C3520,32,3680,16,3840,20C4000,24,4160,48,4320,58C4480,68,4640,64,4800,66C4960,68,5120,76,5280,82C5440,88,5600,92,5760,86C5920,80,6080,64,6240,60C6400,56,6560,64,6720,70C6880,76,7040,80,7200,80C7360,80,7520,76,7680,64C7840,52,8000,32,8160,34C8320,36,8480,60,8640,70C8800,80,8960,76,9120,66C9280,56,9440,40,9600,38C9760,36,9920,48,10080,58C10240,68,10400,76,10560,74C10720,72,10880,60,11040,46C11200,32,11360,16,11440,8L11520,0L11520,120L11440,120C11360,120,11200,120,11040,120C10880,120,10720,120,10560,120C10400,120,10240,120,10080,120C9920,120,9760,120,9600,120C9440,120,9280,120,9120,120C8960,120,8800,120,8640,120C8480,120,8320,120,8160,120C8000,120,7840,120,7680,120C7520,120,7360,120,7200,120C7040,120,6880,120,6720,120C6560,120,6400,120,6240,120C6080,120,5920,120,5760,120C5600,120,5440,120,5280,120C5120,120,4960,120,4800,120C4640,120,4480,120,4320,120C4160,120,4000,120,3840,120C3680,120,3520,120,3360,120C3200,120,3040,120,2880,120C2720,120,2560,120,2400,120C2240,120,2080,120,1920,120C1760,120,1600,120,1440,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z">
            </path>
          </svg> */}
        </div>
        <div className='flex flex-col justify-center items-center w-[100vw] pl-[21px]'></div>
        <div className={isLogin ? "h-full" : "h-full"}>
          {isLogin ? <Login /> : <div></div>}
        </div>
        {/* <div className="flex flex-col justify-center items-center w-[100vw] pl-[21px]">
          <div className="flex flex-col pt-[77px] pb-[10px] lg:ml-[00px] max-w-[1010px] w-[100%] bg-slate-400">
            <h1 className="h500-normal-24px text-primary-blackLight pb-[10px]">
              Populares en Querétaro
            </h1>
            <h3 className="h400-normal-16px text-primary-grayDark">
              Lo que las personas piden más
            </h3>
          </div>
          <div className="flex justify-start w-[100vw] items-center lg:justify-center pb-[40px]">
            <SliderNew />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-[100vw] pl-[21px]">
          <div className="flex flex-col pt-[77px] pb-[10px] lg:ml-[00px] max-w-[1010px] w-[100%]">
            <h1 className="h500-normal-24px text-primary-blackLight pb-[10px]">
              Sugerencias para ti
            </h1>
            <h3 className="h400-normal-16px text-primary-grayDark">
              Publicaciones en las que podrías colaborar
            </h3>
          </div>
          <div className="flex justify-start w-[100vw] items-center lg:justify-center pb-[40px]">
            <SliderNew />
          </div>
        </div>
        <div className="flex p-[10px] w-[100vw] flex-col justify-center bg-primary-grayLighter max-w-[1010px] h-max">
          <Suggestions />
        </div>
        <div className="flex flex-col justify-center items-center w-[100vw] pl-[21px]">
          <div className="flex flex-col pt-[77px] pb-[10px] ml-[20px] lg:ml-[00px] max-w-[1010px] w-[100%]">
            <h1 className="h500-normal-24px text-primary-blackLight pb-[10px]">
              Recientes
            </h1>
            <h3 className="h400-normal-16px text-primary-grayDark">
              Las personas últimamente están hablando de esto
            </h3>
          </div>
          <div className="flex justify-start w-[100vw] items-center lg:justify-center pb-[40px]">
            <SliderNew />
          </div>
        </div> */}
      </div>
    </Layout>
  );
};

export default Home;
