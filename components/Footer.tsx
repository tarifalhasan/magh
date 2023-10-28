import img from "@/public/thank you.png";
import Image from "next/image";
import Container from "./Container";
const Footer = () => {
  return (
    <Container className=" py-9">
      <div className="grid xl:grid-cols-2 items-center gap-5">
        <div>
          <h2 className=" font-poppinss font-black text-skin-darkbrown-50 text-[1.5rem] xl:text-[4rem]">
            from Seattle with love
          </h2>
          <h2 className=" -mt-5 lg:-mt-10 text-[3rem] sm:text-[3.5rem] xl:text-[6rem] font-pacifico text-skin-darkbrown-900">
            Thank you!
          </h2>
        </div>
        <div>
          <Image
            src={img}
            alt="hero image"
            className=" w-full h-full object-cover rounded-[20px]"
          />
        </div>
      </div>
    </Container>
  );
};

export default Footer;
