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
    field: "price",
    order: "desc",
  },
  {
    title: "Price Low to High",
    field: "price",
    order: "asc",
  },
  {
    title: "Stock High to Low",
    field: "stock",
    order: "desc",
  },
  {
    title: "Stock Low to High",
    field: "stock",
    order: "asc",
  },
  {
    title: "Category",
    field: "category",
    order: "asc",
  },
  {
    title: "Last Created",
    field: "createdAt",
    order: "asc",
  },
];
