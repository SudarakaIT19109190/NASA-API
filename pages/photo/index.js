import Head from "next/head";
import {useState} from "react";

import ImagePreview from "../../components/imagePreview";

export default function Home({items}){
    const [search, setSearch] = useState("");
    const [photos, setPhotos] = useState(items);
    return (
        <div className="container">
            <Head>
                <title>NASA Image Gallery</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="main">
                <h1 className="title">Welcome to NASA Gallery</h1>
                <input id="nasaSearch" onChange={(e) => setSearch(e.target.value)}
                className = "searchInput"
                type="text"
                placeholder="Search for an image"
                />
                <button className="button" disable={search == ""} onClick={
                    async () => {
                        const results = await fetch(
                            'https://images-api.nasa.gov/search?media_type=image&q=${search}'
                        );
                        const previews = await results.json();
                        setPhotos(await preview.collection.items)
                    }
                }>
                    Find
                </button>
                <div className="fade">
                <div className="gridContainer">
                {photos && photos.map((preview) => (
                   <ImagePreview 
                   key={preview.data[0].nasa_id}
                   thumbnailUrl={preview.links[0].href}
                   nasaId={preview.data[0].nasa_id} 
                   />
                ))}
                </div>
                </div>
            </main>
        </div>
    );
}

export async function getStaticProps(){
    const results = await fetch(
        "https://images-api.nasa.giv/search?media_type=image"
    );
    const preview = await results.json();
    const items = await preview.collection.items;
    return{
        props: { items },
    };
}