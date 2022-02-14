import Button from "./Button";
import Cart from "../../Icons/Cart";
const ProductPage = (props) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="lg:pr-10">
          <h5 className="mb-4 text-4xl font-extrabold leading-none">
            {props.title}
          </h5>
          <p className="mb-6 text-gray-900">{props.description}</p>
          <hr className="mb-5 border-gray-300" />
          <div>
            <Button
              name="Add to cart"
              onClick={props.onClick}
              icon={<Cart />}
            />
          </div>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src={props.imgSrc}
            alt={props.imgAlt}
          />
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
