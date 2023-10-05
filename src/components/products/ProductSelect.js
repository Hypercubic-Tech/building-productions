const ProductSelect = ({
  product,
  productStatusValues,
  setProductStatusValues,
  productStatus,
  confirmEdit,
  defaultStatusValue,
}) => {
  return (
    <select
      className="form-select"
      value={productStatusValues[product.id] || defaultStatusValue}
      onChange={(event) => {
        const newStatusValue = event.target.value;
        setProductStatusValues((prevStatusValues) => ({
          ...prevStatusValues,
          [product.id]: newStatusValue,
        }));
        confirmEdit(newStatusValue, product);
      }}
    >
      {productStatus &&
        productStatus.map((item) => (
          <option key={item.id} value={item.id}>
            {item.attributes.title}
          </option>
        ))}
    </select>
  );
};

export default ProductSelect;
