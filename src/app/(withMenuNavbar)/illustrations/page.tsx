import React from 'react';
import HigherOrderFunction from '@/component/utils/HigherOrderFunction/HigherOrderFunction';

interface Photo {
    category: string;
    // Add other properties of the photo as needed
}

interface FilterPhotoProps {
    filterPhoto: Photo[];
}

const Illustrations: React.FC<FilterPhotoProps> = ({ filterPhoto }) => {
    console.log(filterPhoto);
    return (
        <div>
            <h1>Illustrations</h1>
            {/* Use filterPhoto here, for example: */}
            {filterPhoto.map((photo, index) => (
                <div key={index}>
                    {/* Render photo details here */}
                    <p>{photo.category}</p>
                </div>
            ))}
        </div>
    );
};

// Wrap Illustrations component with HigherOrderFunction
const IllustrationsWithFilter = HigherOrderFunction('Illustrations', Illustrations);
export default IllustrationsWithFilter;
