import { ProductGallery } from "@/components/ProductGallery";
import { ProductInfo } from "@/components/ProductInfo"; // Fixed import path
import { Header } from "@/components/Header";

export default function LehengaProduct() {
  return (
    <div className="div">
        <Header/>
        <main className="container mx-auto px-4 pt-24 pb-16">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left side - Product Gallery */}
        <div className="w-full md:w-2/3">
          <ProductGallery />
        </div>

        {/* Right side - Product Information */}
        <div className="w-full md:w-1/3">
          <ProductInfo />
        </div>
      </div>
    </main>
    </div>
    
  );
}
