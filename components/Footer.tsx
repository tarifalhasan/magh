import Image from "next/image";
import Container from "./Container";

const Footer = () => {
  return (
    <Container className=" py-9">
      <div className="grid xl:grid-cols-2 items-center gap-5">
        <div>
          <h2 className=" font-poppinss font-black text-skin-darkbrown-50 text-[2rem] xl:text-[4rem]">
            from Seattle with love
          </h2>
          <h2 className=" -mt-8 lg:-mt-10 text-[3.5rem] xl:text-[6rem] font-pacifico text-skin-darkbrown-900">
            Thank you!
          </h2>
        </div>
        <div>
          <Image
            src={"/thank you.png"}
            alt="hero image"
            className=" w-full rounded-[20px]"
            width={629}
            height={250}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </Container>
  );
};

export default Footer;
