import React from 'react';
import { createRoot } from 'react-dom/client';

const ImageGalleryApp = ({ links }) => {
    const [imglink, setImgLink] = React.useState(links)

    const removeImage = (index) => {
        let updatedImages = [...imglink]
        updatedImages.splice(index, 1);
        setImgLink(updatedImages)
    };

    return (
        <>
            {imglink.map((link, index) => {
               return <div>
                <div className="image">
                <img key={index} src={link}/>
                <button onClick = {(e) => removeImage (index)} className="remove">X</button>
                </div>
               </div>
            })}
        </>
    );
}

export default ImageGalleryApp
