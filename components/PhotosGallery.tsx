import Image from "next/image";
import Container from "./Container";

const PhotosGallery = () => {
  const imageList = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/7.png",
    "/8.png",
    "/9.png",
    "/10.png",
    "/11.png",
  ];

  return (
    <div className=" pt-10">
      <Container>
        <div className=" grid   grid-cols-12">
          <div className="order-last xl:order-first  col-span-12 xl:col-span-8">
            <div className=" columns-1  md:columns-2 xl:columns-3 gap-5 [&>img:not(:first-child)]:mt-5 [&>img:not(:first-child)]:rounded-lg">
              {imageList.map((image, index) => (
                <Image
                  src={image}
                  alt="hero image"
                  width={229}
                  key={index}
                  className=" w-full "
                  height={150}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ))}
            </div>
          </div>
          <div className=" space-y-4 order-first xl:order-last col-span-12 xl:col-span-4">
            <h2 className=" font-pacifico text-center text-[2.5rem] sm:text-[3.5rem] xl:text-[5rem]">
              Photos
            </h2>
            <div className=" pt-5 xl:pt-10">
              <Image
                src={"/Characters@1-1920x1080-1.png"}
                alt="hero image"
                width={229}
                className="block mx-auto"
                height={150}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PhotosGallery;
