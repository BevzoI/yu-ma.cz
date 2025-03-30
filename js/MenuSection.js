import React from "react";

const MenuSection = () => {
  const items = [
    { name: "Calzone", image: "/images/calzone.jpg" },
    { name: "Kuřecí křidýlka", image: "/images/wings.jpg" },
    { name: "Něco k pití", image: "/images/drink.jpg" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
      <h2 className="text-3xl font-bold mb-6">Něco jiného</h2>
      <div className="flex gap-6">
        {items.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center w-64">
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md" />
            <h3 className="text-lg font-bold mt-4">{item.name}</h3>
            <button className="mt-2 text-gray-500">&#x25BC;</button>
          </div>
        ))}
      </div>
      <button className="mt-8 bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-orange-600">
        ZOBRAZIT CELÉ MENU
      </button>
    </div>
  );
};

export default MenuSection;