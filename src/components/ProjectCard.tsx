import React, { useEffect, useState } from "react";
import { Briefcase, Zap } from "lucide-react";
import API from "../services/api";

interface Product {
  id: number;
  name: string;
  price: number;
  sales: number;
  category: string;
}

const categoryMap: Record<
  string,
  { icon: React.ElementType; bgColor: string; textColor: string }
> = {
  subscription: {
    icon: Briefcase,
    bgColor: "bg-green-100",
    textColor: "text-green-600",
  },
  addon: { icon: Zap, bgColor: "bg-blue-100", textColor: "text-blue-600" },
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const {
    icon: Icon,
    bgColor,
    textColor,
  } = categoryMap[product.category] || categoryMap["subscription"];

  return (
    <div className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100">
      <div className="flex items-center space-x-4">
        <div className={`p-3 rounded-lg ${bgColor} ${textColor}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-800">{product.name}</p>
          <p className="text-xs text-gray-500 capitalize">
            Category: {product.category}
          </p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm font-semibold text-gray-800">${product.price}</p>
        <p className="text-xs text-gray-500">{product.sales} Sales</p>
      </div>
    </div>
  );
};

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await API.get<Product[]>("api/products");
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
      <div className="p-4 flex justify-between items-center border-b border-gray-200">
        <h1 className="text-xl font-semibold text-gray-900">Products</h1>
        <button className="flex items-center px-3 py-1 text-sm font-medium text-green-600 border border-green-300 rounded-lg hover:bg-green-50">
          + New
        </button>
      </div>

      {/* List */}
      <div>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="p-4 text-gray-500 text-center">
            No products available.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
