import { Prouduct } from "./Prouduct";


export function ProductList({ product_list, setproList }) {
  return (
    <div className="list">
      {product_list.map((itme, index) => (
        <Prouduct key={index} product={itme} id={index} />
      ))}
    </div>
  );
}
