import {
  image1,
  image10,
  image11,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
} from "@/assets";
import Characters from "@/public/Characters@1-1920x1080-1.png";
import Image from "next/image";
import Container from "./Container";
const PhotosGallery = () => {
  const imageList = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
  ];

  return (
    <div id="photos" className=" pt-10">
      <Container>
        <div className=" grid   gap-y-10 grid-cols-12">
          <div className="order-last xl:order-first  col-span-12 xl:col-span-8">
            <div className=" columns-1  md:columns-2 xl:columns-3 gap-5 [&>img:not(:first-child)]:mt-5 [&>img:not(:first-child)]:rounded-lg">
              {imageList.map((image, index) => (
                <Image
                  src={image}
                  alt="hero image"
                  key={index}
                  className=" w-full h-full object-cover "
                />
              ))}
            </div>
          </div>
          <div className=" space-y-4 order-first xl:order-last col-span-12 xl:col-span-4">
            <h2 className=" font-pacifico text-center text-[2.5rem] sm:text-[3.5rem] xl:text-[5rem]">
              Photos
            </h2>
            <div className=" pt-5 xl:pt-10">
              <div className=" w-36 block mx-auto">
                <Image
                  src={Characters}
                  alt="hero image"
                  className=" w-full block mx-auto h-full object-cover "
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PhotosGallery;
