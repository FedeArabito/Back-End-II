
import { useState } from "react";
import {  ShoppingCart } from "lucide-react";

import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import ProductDetailContainer from "./ProductDetailContainer";


const Product = ({ product, onAddToCart }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = () => {
    setIsLoading(true);
    onAddToCart(product.id);
    setTimeout(() => setIsLoading(false), 1000); // Simulating API call
  };

  return (
    <Card className="w-full max-w-sm transition-all duration-300 hover:shadow-lg"  onClick={<ProductDetailContainer product={product}/>}>
      <CardHeader className="p-0">
        <div className="relative aspect-square overflow-hidden rounded-t-lg">
          <img
            src={product.imageURL} 
            alt={product.name} 
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <Badge className="mb-2">{product.category}</Badge>
        <CardTitle className="line-clamp-1" title={product.name}> 
          {product.name} 
        </CardTitle>
        
        
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4">
        <span className="text-xl font-semibold">${product.price.toFixed(2)}</span>
        <Button onClick={handleAddToCart} disabled={isLoading}>
          {isLoading ? (
            "Adding..."
          ) : (
            <>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Product;
