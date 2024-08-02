import getAllPicVaultPhotos from "@/component/utils/getAllPicVaultPhoto";
import ImageGallery from "./ImageGallery";

export default async function ImageGalleryPage() {
    const photos = await getAllPicVaultPhotos();
    return <ImageGallery photos={photos} />;
}