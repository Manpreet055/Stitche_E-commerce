import { createTheme } from "flowbite-react";

export const customPaginationTheme = createTheme({
  base: "",
  layout: {
    table: {
      base: "text-sm ",
      span: "font-semibold",
    },
  },
  pages: {
    base: "xs:mt-0 mt-2 inline-flex items-center -space-x-px",
    showIcon: "inline-flex",
    previous: {
      base: "ml-0 rounded-l-lg border border-gray-300 px-3 py-2 leading-tight enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 theme text-theme  enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
      icon: "h-5 w-5",
    },
    next: {
      base: "rounded-r-lg border border-gray-300 px-3 py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 theme text-theme enabled:dark:hover:text-white",
      icon: "h-5 w-5",
    },
    selector: {
      base: "w-12 hidden sm:block border border-gray-300 py-2 leading-tight enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 theme text-theme enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
      active:
        "bg-cyan-50 text-cyan-600 hover:bg-cyan-100 hover:text-cyan-700 dark:border-gray-700 theme text-theme",
      disabled: "cursor-not-allowed opacity-50",
    },
  },
});

export const customNavbarTheme = createTheme({
  root: {
    base: "bg-white px-2 py-2.5 sm:px-4 dark:border-gray-700 dark:bg-gray-800",
    rounded: {
      on: "rounded",
      off: "",
    },
    bordered: {
      on: "border",
      off: "",
    },
    inner: {
      base: "mx-auto text-white flex flex-wrap items-center justify-between",
      fluid: {
        on: "",
        off: "container",
      },
    },
  },
  brand: {
    base: "flex items-center",
  },
  collapse: {
    base: "w-full md:block md:w-auto",
    list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
    hidden: {
      on: "hidden",
      off: "",
    },
  },
  link: {
    base: "block py-2 pl-3 pr-4 md:p-0",
    active: {
      on: "bg-primary-700 text-white md:bg-transparent md:text-primary-700 dark:text-white",
      off: "border-b border-gray-100 text-gray-700 hover:bg-gray-50 md:border-0 md:hover:bg-transparent md:hover:text-primary-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-white",
    },
    disabled: {
      on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
      off: "",
    },
  },
  toggle: {
    base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
    icon: "h-6 w-6 shrink-0",
    title: "sr-only",
  },
});

export const buttonGroupTheme = createTheme({
  button: {
    color: {
      primary: "border-none",
      secondary: "bg-blue-500 hover:bg-blue-600",
    },
    size: {
      lg: "px-6 py-3 text-lg",
    },
  },
});

export const customDropdownTheme = createTheme({
  arrowIcon: "ml-2 h-4 w-4",
  content: "py-1 focus:outline-none",
  primary: "bg-white",
  floating: {
    style: {
      light: "bg-white text-black",
      dark: "bg-[#121212] text-white",
      auto: "bg-white text-black dark:bg-[#121212] dark:text-white",
    },
    base: "flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-black hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700",
    content: "py-1 text-sm text-gray-700 dark:text-gray-200",
    divider: "my-1 h-px bg-gray-100 dark:bg-gray-600",
    header: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-200",
    hidden: "invisible opacity-0",
    item: {
      container: "",
      base: "flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",
      icon: "mr-2 h-4 w-4",
    },
    style: {
      dark: "bg-gray-900 text-white dark:bg-gray-700",
      light: "border border-gray-200 bg-white text-gray-900",
      auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white",
    },
    target: "w-fit",
  },
  inlineWrapper: "flex items-center",
});
