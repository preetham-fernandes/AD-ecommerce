import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
const categories = [
  {
    title: 'MEN',
    description: 'Elevate your style with our curated collection for the modern gentleman.',
    imageUrl:'/kurta.jpg'
  },
  {
    title: 'WOMEN',
    description: 'Discover the latest trends and timeless pieces for every occasion.',
    imageUrl: '/women.jpg'
  },
  {
    title: 'KIDS',
    description: 'Comfortable and stylish clothing for the little ones in your life.',
    imageUrl: 'kids.jpg'
  }
];
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <main className="min-h-screen py-12 px-4">
    <h1 className="text-4xl md:text-5xl text-center mb-16 font-semibold">
      FASHION CATEGORIES
    </h1>
    
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            description={category.description}
            imageUrl={category.imageUrl}
          />
        ))}
      </div>
    </div>
  </main>
    </main>
  );
}


