import { FC } from 'react';
import getAllPicVaultPhotos from "../getAllPicVaultPhoto";

// Define the props for the component
interface Photo {
    category: string;
    // Add other properties of the photo as needed
}

interface HigherOrderFunctionProps {
    filterPhoto: Photo[];
}

export default function HigherOrderFunction(
    pathName: string,
    Component: FC<HigherOrderFunctionProps>
) {
    return async function HOC() {
        const photos = await getAllPicVaultPhotos();
        const filterPhoto = photos?.filter(photo => photo.category === pathName) || [];
        return (
            <div>
                <Component filterPhoto={filterPhoto} />
            </div>
        );
    }
}