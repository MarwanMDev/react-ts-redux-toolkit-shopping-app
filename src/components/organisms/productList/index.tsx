import Masonry from '@mui/lab/Masonry';
import { PRODUCT_DETAILS } from '../../constants/api';
import ProductListCard from '../../molecules/productListCard';

const ProductList = () => {
  return (
    <div className="px-20 flex flex-col gap-y-10">
      <div>
        <h2 className="text-4xl font-bold">Best Selling Products</h2>
      </div>
      <Masonry columns={3} spacing={2}>
        {PRODUCT_DETAILS.map((product, key) => (
          <div key={key}>
            <ProductListCard {...product} key={key} />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default ProductList;
