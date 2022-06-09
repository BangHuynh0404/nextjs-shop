import Image from 'next/image';
import { motion } from 'framer-motion';
import { Rate, Button, Popover } from 'antd';
import { ShoppingTwoTone, HeartTwoTone } from '@ant-design/icons';
import WrapperProductCardStyled from './ProductCardStyled';
import { useRouter } from 'next/router';
import { Parallax } from 'rc-scroll-anim';

const ProductCard = ({ product, key }) => {
  const router = useRouter();
  const content = <span className='product-title'>Demo text!</span>;
  return (
    <Popover content={content} title={product.title}>
      <WrapperProductCardStyled
        onClick={() => {
          router.push(`/products/${product.id}`);
        }}
        as={motion.div}
        key={key}
        whileHover={{ scale: 1.1 }}
      >
        {/* IMAGE */}
        <div className='card-img-container'>
          <Image
            className='card-img'
            src={product.image}
            preview={false}
            alt=''
            width={200}
            height={150}
          />
        </div>

        {/* CONTENT */}
        <div className='card-content'>
          <span className='product-title'>{product.title}</span>
          <Rate disabled defaultValue={product.rating.rate} />
          <span className='product-price'>$ {product.price} </span>
        </div>

        <Button
          className='btn-add-to-cart'
          type='text'
          shape='circle'
          icon={<ShoppingTwoTone />}
          size={32}
        />
        <Button
          className='btn-add-to-like'
          type='text'
          shape='circle'
          icon={<HeartTwoTone twoToneColor='#eb2f96' />}
          size={32}
        />
      </WrapperProductCardStyled>
    </Popover>
  );
};
export default ProductCard;
