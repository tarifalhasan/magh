import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PhotosGallery from "@/components/PhotosGallery";
import QuestionAnsware from "@/components/QuestionAnsware";
import Heading from "@/utils/Heading";

export default function Home() {
  return (
    <div>
      <Heading
        title="Minh Anh + Gia Khiem"
        description="Marrying on Dec 24th, 2023, in Hanoi, Vietnam.
       Friends and families must come ヾ(・ω・*)"
        kyeword="love "
      />
      <Hero />
      <PhotosGallery />
      <QuestionAnsware />
      <Footer />
    </div>
  );
}
