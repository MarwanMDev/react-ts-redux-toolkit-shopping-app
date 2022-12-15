import { Star } from '@mui/icons-material';
import { IProductCardSlide } from '../../../types';

const ProductListCard = ({
  title,
  price,
  rating,
  img,
}: IProductCardSlide) => {
  return (
    <div className="flex flex-col">
      <img src={`../../${img}`} alt="img" className="h-full w-full" />
      <div className="flex flex-row justify-between items-center my-5">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="font-semibold text-3xl">$ {price}</p>
      </div>
    </div>
  );
};

export default ProductListCard;
