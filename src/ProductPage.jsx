import { useDispatch } from "react-redux";
import { fetchProducts } from "./productThunk";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function ProductPage() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status == "loading") return <p>Loading...</p>;

  return (
    <div>
      <h1>Product Listing</h1>
      <ul>
        {status == "succeeded" &&
          items.map((p) => <li key={p.index}>{p.title}</li>)}
      </ul>
      {status == "failed" ? <p>ERROR</p> : null}
    </div>
  );
}
