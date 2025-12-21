export const PRODUCTS_FILTER_OPTIONS = [
  {
    name: "subCategory",
    fields: [
      {
        fieldName: "Jackets",
      },
      {
        fieldName: "Shorts",
      },
      {
        fieldName: "Sneakers",
      },
      {
        fieldName: "Tops",
      },
      {
        fieldName: "Watches",
      },
      {
        fieldName: "Shirts",
      },
      {
        fieldName: "Jeans",
      },
    ],
  },
  {
    name: "brand",
    fields: [
      {
        fieldName: "Adidas",
      },
      {
        fieldName: "Fila",
      },
      {
        fieldName: "H&M",
      },
      {
        fieldName: "Gucci",
      },
      {
        fieldName: "Nike",
      },
    ],
  },
  {
    name: "category",
    fields: [
      {
        fieldName: "Men's Wear",
        keyname: "mens-wear",
      },
      {
        fieldName: "Women's Wear",
        keyname: "womens-wear",
      },
      {
        fieldName: "Kids",
        keyname: "kids",
      },
    ],
  },
];

export const PRODUCTS_SORTING_OPTIONS = [
  {
    title: "Price High to Low",
    field: "price_desc",
  },
  {
    title: "Price Low to High",
    field: "price_asc",
  },
  {
    title: "Stock High to Low",
    field: "stock_desc",
  },
  {
    title: "Stock Low to High",
    field: "stock_asc",
  },
  {
    title: "Category",
    field: "category_asc",
  },
  {
    title: "Last Created",
    field: "createdAt_asc",
  },
];
