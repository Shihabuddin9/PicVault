import MenuNavbar from "@/component/shared/MenuNavbar/MenuNavbar";
import ImageGallery from "@/component/ui/ImageGallery/ImageGallery";
import TopOverview from "@/component/ui/TopOverview/TopOverview";

export default function Home() {
  return (
    <main>
      <TopOverview />
      <ImageGallery />
    </main>
  );
}
