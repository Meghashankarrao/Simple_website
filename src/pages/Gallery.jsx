import React from 'react';

const Gallery = () => {
    // Mock data for gallery images
    const images = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qHTCSBXnZiSF1z-zX69US8x7ETWmouhwhg&s',
        'https://arborinternationalschool.com/wp-content/uploads/2025/11/Gallery-02.jpg',
        'https://taips.edu.in/wp-content/uploads/2023/10/379184687_727759576033958_3917619667971993045_n.webp',
        'https://i0.wp.com/www.drpbps.in/wp-content/uploads/2024/02/5.webp?fit=1024%2C681&ssl=1',
        'https://suchitra.in/wp-content/uploads/2024/07/SA-GAL24-7-1024x682.jpg',
        'https://suchitra.in/wp-content/uploads/2021/07/suchitra_academy_art_craft.jpg'
    ];

    return (
        <section className="section-padding">
            <div className="container">
                <h2 className="section-title">School Gallery</h2>
                <div className="gallery-grid">
                    <style jsx>{`
                        .gallery-grid {
                            display: grid;
                            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                            gap: 20px;
                        }
                        .gallery-item {
                            overflow: hidden;
                            border-radius: 8px;
                            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
                            transition: transform 0.3s ease;
                        }
                        .gallery-item:hover {
                            transform: scale(1.02);
                        }
                        .gallery-item img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            display: block;
                        }
                    `}</style>
                    {images.map((img, index) => (
                        <div className="gallery-item" key={index}>
                            <img src={img} alt={`Gallery Image ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
