import Head from 'next/head';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard/ProductCard';
import styles from '../styles/Home.module.css';
import { Suspense, useEffect, useId, useState } from 'react';
import Lottie from 'react-lottie-player';
import loading from '../public/json/loading.json';
import { Button } from 'react-bootstrap';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../app/redux/slice/productSlice';
// export const getStaticProps = async () => {
//   const res = await fetch('https://fakestoreapi.com/products');
//   const products = await res.json();
//   return {
//     props: {
//       products: products,
//     },
//   };
// };

export default function Home() {
  const productState = (state) => state.product.value;
  const count = useSelector(productState);
  const dispatch = useDispatch();
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
    };
    fetchData();
  }, []);
  if (!products) {
    return (
      <div className='main-container'>
        <Lottie animationData={loading} play />
      </div>
    );
  }
  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>Meow Shop</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Suspense fallback={<Lottie animationData={loading} play />}>
        <main className={styles.main}>
          <h1>{count}</h1>
          <Button
            onClick={() => {
              dispatch(increment());
            }}
          >
            Redux Test
          </Button>
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </main>
      </Suspense>
    </div>
  );
}
