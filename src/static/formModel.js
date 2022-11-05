export const serviceCategoryOptions = [
    {
      id: 1,
      label: "Hair Woman",
    },
    {
      id: 2,
      label: "Nails",
    },
    {
      id: 3,
      label: "Barber",
    },
  ];
  
  const serviceOptions = [
    {
      value: "Hair dye",
      label: "Hair dye",
    },
    {
      value: "Hand Cream",
      label: "Hand Cream",
    },
    {
      value: "Service#3",
      label: "Service#3",
    },
  ];
  
  const mastersOptions = [
    {
      value: "Service#1",
      label: "Service #1",
    },
    {
      value: "Service#2",
      label: "Service#2",
    },
    {
      value: "Service#3",
      label: "Service#3",
    },
  ];
  
  const currencyOptions = [
    {
      value: "MDL",
      label: "MDL",
    },
    {
      value: "EUR",
      label: "EUR",
    },
    {
      value: "USD",
      label: "USD",
    },
  ];
  
  const formModel = [
    {
      type: "select",
      name: "serviceCategory",
      label: "Service Category",
      options: serviceCategoryOptions,
      placeholder: "Select from list",
      register: {
        required: "This field is required",
      },
    },
    // {
    //   type: "select",
    //   name: "service",
    //   label: "Service",
    //   options: serviceOptions,
    //   placeholder: "Select from list",
    //   register: {
    //     required: "This field is required",
    //   },
    // },
    // {
    //   type: "select",
    //   name: "masters",
    //   label: "Masters",
    //   options: mastersOptions,
    //   placeholder: "Select from list",
    //   register: {
    //     required: "Please, choose a master",
    //   },
    // },
    {
      type: "date",
      name: "date",
      label: "Date",
      placeholder: "12.07.2022",
      register: {
        required: "Date is required"
      },
    },
    {
      type: "time",
      name: "timeFrom",
      label: "Time From",
      placeholder: "15:45",
      // register: {
      //   // required: "Please, choose a time",
      //   pattern: {
      //     value: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
      //   },
      // },
    },
    {
      type: "time",
      name: "timeTo",
      label: "Time To",
      placeholder: "17:00",
      // register: {
      //   // required: "Please, choose a time",
      //   pattern: {
      //     value: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
      //   },
      // },
    },
    {
      type: "number",
      name: "price",
      placeholder: "1234.50",
      label: "Price",
      register: {
        required: "Price is required",
      },
    },
    // {
    //   type: "select",
    //   name: "currency",
    //   label: "Currency",
    //   options: currencyOptions,
    //   register: {
    //     required: "Please, choose currency",
    //   },
    // },
  ];
  export default formModel;