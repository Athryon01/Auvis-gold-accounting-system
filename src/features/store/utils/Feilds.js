let goldsFields =[
    {
        type:"text",
        name:"name",
        label:"gold name",
        required:true,
         placeHolder:"enter the name of the selected golds"
    },
    {
        type:"number",
        name:"totalQuantity",
        label:"golds totalQuantity",
        required:true,
        placeHolder:"enter the quantity of the selected golds"
    },
    {
        type:"number",
        name:"totalWeight",
        label:"golds totalWeight",
        required:true,
        placeHolder:"enter the totalWeight of the selected golds"
    },
]
let coinsFields = [
    {
      type: "text",
      name: "name",
      label: "coin name",
      required: true,
      placeHolder: "Enter the name of the coin"
    },
    {
      type: "number",
      name: "purity",
      label: "coin purity",
      required: true,
      placeHolder: "Enter the purity of the coin"
    },
    {
      type: "number",
      name: "quantity",
      label: "coin quantity",
      required: true,
      placeHolder: "Enter the quantity of the coin"
    },
    {
      type: "number",
      name: "weight",
      label: "coin weight",
      required: true,
      placeHolder: "Enter the weight of the coin"
    },
    {
      type: "number",
      name: "purchasePrice",
      label: "purchase price",
      required: true,
      placeHolder: "Enter the purchase price of the coin"
    },
  ]
  
  let jewelriesFields = [
    {
      type: "text",
      name: "name",
      label: "jewelry name",
      required: true,
      placeHolder: "Enter the name of the jewelry"
    },
    {
      type: "number",
      name: "quantity",
      label: "jewelry quantity",
      required: true,
      placeHolder: "Enter the quantity of the jewelry"
    },
    {
      type: "number",
      name: "price",
      label: "jewelry price",
      required: true,
      placeHolder: "Enter the price of the jewelry"
    },
    {
      type: "text",
      name: "description",
      label: "jewelry description",
      required: true,
      placeHolder: "Enter a description for the jewelry"
    },
  ]
  let commoditiesFields = [
    {
      type: "text",
      name: "name",
      label: "commodity name",
      required: true,
      placeHolder: "Enter the name of the commodity"
    },
    {
      type: "number",
      name: "price",
      label: "commodity price",
      required: true,
      placeHolder: "Enter the price of the commodity"
    },
    {
      type: "number",
      name: "quantity",
      label: "commodity quantity",
      required: true,
      placeHolder: "Enter the quantity of the commodity"
    },
    {
      type: "text",
      name: "description",
      label: "commodity description",
      required: true,
      placeHolder: "Enter a description for the commodity"
    },
  ]
  
  
  

  
  

export {goldsFields, coinsFields,jewelriesFields,commoditiesFields}