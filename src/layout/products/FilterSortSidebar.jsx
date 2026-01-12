import React from "react";
import { PRODUCTS_SORTING_OPTIONS } from "../../utils/sort_filter_options";
import { Checkbox, Label } from "flowbite-react";
import { useForm } from "react-hook-form";

const FilterSortSidebar = ({ setQuery }) => {
  const {
    handleSubmit,
    register,
    watch,
    reset,
    formState: { dirtyFields },
    getValues,
  } = useForm({
    defaultValues: {
      category: [],
      brand: [],
      price: 1500,
      sort: "",
    },
  });

  const price = watch("price");

  const handleForm = () => {
    // Filters only chnaged values
    const currentValues = getValues();
    const changedData = Object.keys(dirtyFields).reduce((acc, key) => {
      acc[key] = currentValues[key];
      return acc;
    }, {});

    if (Object.keys(changedData).length === 0) return; //if nothing changes return

    // if all category option selected then apply remove other category and send null to the backend
    if (changedData?.category?.includes("all")) {
      delete changedData?.category;
      delete changedData?.brand;
    }

    // Parsing the sorting fields
    if (Object.keys(changedData).includes("sort")) {
      const [sortField, sortingOrder] = changedData?.sort.split("_");
      // setSort({ sortField, sortingOrder });
      setQuery((prev) => ({
        ...prev,
        sort: {
          sortField,
          sortingOrder,
        },
      }));
      delete changedData.sort; //after parsing delete the form field
    }
    setQuery((prev) => ({
      ...prev,
      filters: { ...changedData },
    }));
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(handleForm)}
        className={`sm:sticky  flex theme h-full lg:h-fit  p-4 flex-col sm:top-15 lg:top-20 left-0 sm:max-w-sm w-full`}
      >
        <h2 className="font-bold sm:text-xl">Filter & Sort</h2>

        {/* Category Filters */}
        <hr className="my-4 text-gray-200 dark:text-gray-500" />
        <h3 className="font-medium text-lg">Category</h3>
        <ul className="flex flex-col my-5  gap-3">
          <li className="flex gap-2 items-center">
            <Checkbox id="all" {...register("category")} value="all" />
            <Label id="all">All Categories</Label>
          </li>
          <li className="flex gap-2 items-center">
            <Checkbox id="mens" {...register("category")} value="mens-wear" />
            <Label id="mens">Men's wear</Label>
          </li>
          <li className="flex gap-2 items-center">
            <Checkbox
              id="womens"
              {...register("category")}
              value="womens-wear"
            />
            <Label id="womens">Women's wear</Label>
          </li>
          <li className="flex gap-2 items-center">
            <Checkbox id="kids" {...register("category")} value="kids" />
            <Label id="kids">Kid's wear</Label>
          </li>
        </ul>

        {/* Brands */}
        <hr className="my-4 text-gray-200 dark:text-gray-500" />
        <h3 className="font-medium text-lg">Popular Brands</h3>
        <ul className="flex flex-col my-5  gap-3">
          <li className="flex gap-2 items-center">
            <Checkbox id="puma" {...register("brand")} value="Puma" />
            <Label id="puma">Puma</Label>
          </li>
          <li className="flex gap-2 items-center">
            <Checkbox
              id="The North Face"
              {...register("brand")}
              value="The North Face"
            />
            <Label id="the-north-face">The North Face</Label>
          </li>
          <li className="flex gap-2 items-center">
            <Checkbox
              id="balenciaga"
              {...register("brand")}
              value="Balenciaga"
            />
            <Label id="balenciaga">Balenciaga</Label>
          </li>
          <li className="flex gap-2 items-center">
            <Checkbox id="Fila" {...register("brand")} value="Fila" />
            <Label id="fila">Fila</Label>
          </li>
        </ul>
        {/* Price Range Slider */}
        <hr className="relative mb-4 text-gray-200 dark:text-gray-500" />
        <label htmlFor="price" className="font-medium text-lg">
          Price Range
        </label>
        <input
          type="range"
          id="price"
          {...register("price")}
          min={500}
          max={1500}
          className="mt-3"
          defaultValue={1500}
        />
        <span className="btn-primary border w-fit my-5">
          AED {price}
          {price >= 1500 && "+"}
        </span>

        <hr className="relative mb-4 text-gray-200 dark:text-gray-500" />
        <label htmlFor="sort" className="font-medium text-lg">
          Sort By
        </label>
        <select
          className="btn-primary border border-gray-300 mt-3 mb-5"
          {...register("sort")}
          name="sort"
          id="sort"
        >
          {PRODUCTS_SORTING_OPTIONS.map((option, index) => (
            <option key={index} value={option.field}>
              {option.title}
            </option>
          ))}
        </select>

        {/* Buttons */}
        <div className="w-full flex justify-between  gap-4">
          <button
            onClick={() =>
              reset({ category: [], brand: [], price: 1500, sort: "" })
            }
            type="button"
            className="border w-full btn-primary"
          >
            Clear all
          </button>
          <button
            type="submit"
            className="theme-alt w-full  text-theme-alt btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default FilterSortSidebar;
