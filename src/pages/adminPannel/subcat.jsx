function SubCategory(){
    return(
        <div className=" h-screen w-full flex items-center justify-evenly">
            <form className="shadow-2xl h-[50%] w-[40%] rounded-4xl flex flex-col text-gray-800 items-center ml-20">
                <h1 className="text-4xl font-bold py-6 text-shadow-2xs text-shadow-gray-600">ADD SUB-CATEGORY</h1>
                <label className="text-2xl py-2" for="car-brand">Select Category</label>
                <select className="my-2 p-2 rounded-2xl"  name="subcategory" id="subcategory">
    <option value="Pizza">Pizza</option>
    <option value="Burger">Burger</option>
    <option value="Pasta">Pasta</option>
    <option value="Indian-Food">Indian-Food</option>
    <option value="Sweets">Sweets</option>
    <option value="Ice-Cream">Ice-Cream</option>
  </select>
  <label className="text-2xl py-2" for="car-brand">Select Sub-Category</label>
  <select className="my-2 p-2 rounded-2xl"  name="subcategory" id="subcategory">
    <option value="Pizza1">Cheese-Pizza</option>
    <option value="Pizza2">Onion-Pizza</option>
    <option value="Pizza3">Veg-Pizza</option>
    <option value="Pizza4">Corn-Pizza</option>
    <option value="Pizza5">Mashroom-Pizza</option>
    <option value="Burger1">Cheese Burger</option>
     <option value="Burger2">Aloo Tikki Burger</option>
      <option value="Burger3">Paneer Burger</option>
       <option value="Burger4">Chicken Burger</option>
    <option value="Pasta1">Red Sauce Pasta</option>
    <option value="Pasta2">White Sauce Pasta</option>
    <option value="Pasta3">Cheese Pasta</option>
    <option value="Pasta4">Chicken Pasta</option>
    <option value="Pasta5">Egg Pasta</option>
    <option value="Indian-Food1">Dal Makhni</option>
     <option value="Indian-Food2">Shahi Paneer</option>
      <option value="Indian-Food3">chole bhature</option>
       <option value="Indian-Food4">Tandoori Roti</option>
        <option value="Indian-Food5">Butter Naan</option>
         <option value="Indian-Food6">Paratha</option>
          <option value="Indian-Food7">Plain rice</option>
           <option value="Indian-Food8">Chicken</option>
            <option value="Indian-Food9">Mutton</option>
    <option value="Sweets1">Rasgulla</option>
    <option value="Sweets2">Kaju Katli</option>
    <option value="Sweets3">Gulab Jamun</option>
    <option value="Sweets4">Besan Laddu</option>
    <option value="Sweets5">Coconut Laddu</option>
    <option value="Sweets6">Chocolate Barfi</option>
    <option value="Ice-Cream1">Vanilla</option>
     <option value="Ice-Cream2">Chocolate</option>
      <option value="Ice-Cream3">Kesar Pista</option>
       <option value="Ice-Cream4">Red Velvet</option>
  </select>
                <button className="border  p-2 w-[100px] rounded-2xl hover:bg-gray-600 hover:text-white">Submit</button>
            </form>
            <img src="" alt="" srcset="/images/adminchef.png" className="h-[700px] " />
            

        </div>
    )
}

export default SubCategory