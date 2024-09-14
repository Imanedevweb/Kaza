import React from 'react'
import Banner from '../../components/Banner/Banner';
import ImageBannerHome from '../../assets/images/banner-home.png'
import Gallery from '../../components/Gallery/Gallery';




function Home() {
    return (
        <div className="home">
          <Banner image={ImageBannerHome} title="Chez vous, partout et ailleurs" />
            <main>
                <Gallery />
            </main>
        
        </div>
    );
}

export default Home;

