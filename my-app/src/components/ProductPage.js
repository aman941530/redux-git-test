const ProductPage = () => {
  const products = [
    { title: "Product1", id: "P1", price: "$4" },
    { title: "Product2", id: "P2", price: "$5" },
  ];
  return (
    <>
      {products.map((product) => {
        return <div>{product.title}</div>;
      })}
    </>
  );
};

export default ProductPage ;
