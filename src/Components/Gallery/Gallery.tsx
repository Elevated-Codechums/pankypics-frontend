// components/Gallery.tsx
import Image from 'next/image';

const Gallery = () => {
    // Sample image data - you can replace with your own images
    const images = [
        {
            src: "https://images.unsplash.com/photo-1735598109398-763993d23997?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
            alt: "Gallery image 1"
        },
        {
            src: "https://images.unsplash.com/photo-1736185669739-36a8e70cb6c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
            alt: "Gallery image 2"
        },
        {
            src: "https://images.unsplash.com/photo-1736890316510-c2d6a1ca021c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
            alt: "Gallery image 3"
        },
        {
            src: "https://images.unsplash.com/photo-1736785937156-765db1557916?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2Mnx8fGVufDB8fHx8fA%3D%3D",
            alt: "Gallery image 4"
        }
        // Add more images as needed
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 rounded-lg md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="relative h-[90%] w-[94%] bg-darkbrown rounded-3xl flex flex-col gap-16 px-8 md:px-16 group">
                        <div className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes="(max-width: 640px) 100vw, 
                                             (max-width: 768px) 50vw,
                                             (max-width: 1024px) 33vw,
                                             25vw"
                                className="object-cover hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
