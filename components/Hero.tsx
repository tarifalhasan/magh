import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import Counter from "./Counter";

const Hero = () => {
  return (
    <Container>
      <div className="grid xl:grid-cols-2 gap-4 py-3 ">
        <div>
          <nav className="flex items-center gap-x-12 py-4">
            <h2 className="text-5xl font-pacifico text-skin-darkbrown-900 font-normal">
              ma+gk
            </h2>
            <ul className="inline-flex items-center gap-x-12">
              <li>
                <Link
                  href={"/"}
                  className=" text-[1.5rem] sm:text-[2rem] font-poppinss  font-medium text-skin-darkbrown-700"
                >
                  Photos
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-[1.5rem] sm:text-[2rem]  font-poppinss  font-medium text-skin-darkbrown-700"
                >
                  Q&A
                </Link>
              </li>
            </ul>
          </nav>
          <div className=" pt-7">
            <div className=" relative">
              <h2 className="text-[3rem] 2xl:text-[4rem] text-skin-darkbrown-50 font-poppinss font-bold">
                Celebrating
              </h2>
              <div className=" -mt-[3rem] lg:-mt-[3.8rem]">
                <h2 className=" text-[4.5rem] 2xl:text-[6rem] font-pacifico text-skin-darkbrown-900">
                  Minh Anh +
                </h2>
                <h2 className="text-[4.5rem] lg:text-[6rem]  pl-[55px] -mt-[2rem] font-pacifico text-skin-darkbrown-300">
                  Gia Khiem
                </h2>
              </div>
            </div>
            <div className="pt-7">
              <p className="text-[1rem] pb-2 lg:text-[2rem] text-skin-darkbrown-800 font-poppinss font-normal">
                Friends and families must come ヾ(・ω・*)
              </p>
              <button className=" inline-flex items-center gap-1 rounded-full bg-skin-darkbrown-900 py-3 text-white font-bold text-[1.6rem] transition-all duration-300 hover:bg-skin-darkbrown-300 px-5">
                RSVP
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 12H19"
                    stroke="white"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5L19 12L12 19"
                    stroke="white"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className=" pt-5">
                <Image
                  src={"/Characters@1-1920x1080-1.png"}
                  alt="hero image"
                  width={150}
                  height={150}
                  sizes="(min-width: 1540px) 760px, (min-width: 1280px) 632px, (min-width: 1040px) 504px, (min-width: 780px) 752px, (min-width: 640px) 624px, (min-width: 520px) 459px, calc(87.5vw + 22px)"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="  space-y-7">
          <div>
            <Image
              src={"/hero.png"}
              alt="hero image"
              className=" w-full rounded-[20px]"
              width={829}
              height={250}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div>
            <Counter />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
