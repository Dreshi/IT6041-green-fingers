import Head from 'next/head';
import { useQuery } from 'urql';
import { PRODUCT_QUERY } from "../lib/query";
import Product from '../components/Products';
import { Gallery } from '../styles/Gallery';
import { MeiliSearch } from 'meilisearch';
import { useEffect, useState } from "react";
import { ProductStyles } from "../styles/ProductStyle";
import Link from "next/link";
import Image from 'next/image';
import { buildUrl } from 'cloudinary-build-url';

const searchClient = new MeiliSearch({
  host: `${ process.env.NEXT_PUBLIC_MEILISEARCH_HOST }`,
  apiKey: '', // Use the public key not the private or master key to search.
})

export default function Home() {
  //Fetch products from strapi
  const [results] = useQuery({query: PRODUCT_QUERY});
  const {data, fetching, error} = results;
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    //search product index based on search value
    searchClient
    .index("product")
    .search(search)
    .then((searchResults) => {
      setItems(searchResults.hits);
      const srcResults = searchResults;
    });
  }, [search]);
  
  //Check for the data coming in
  if(fetching) return <p>Loading...</p>;
  if(error) return <p>Oh no...{error.message}</p>;
  const products = data.products.data;
  console.log(items);
  
  const url = buildUrl(`https://res.cloudinary.com/dksqsotmc/image/upload/`, {
    cloud: {
      cloudName: 'dksqsotmc',
    },
  });    

  return (
    <div>
      <Head>
        <title>EcoWorld Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="App">
          <div className="search">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            </div>
        </div>
        <Gallery>
          {items.map((product) => (
          <ProductStyles>
            <Link href={`product/${product.slug}`}>
              <Image 
              src={url}
              alt={product.title}
              width={100}
              height={100}
              unoptimized={true}
              />
            </Link>
            <h2>{product.title}</h2>
            <h3>{product.price}</h3>
          </ProductStyles>
          ))}
        </Gallery>
      </main>      
    </div>
  )/* ,
  console.log(products); */
}