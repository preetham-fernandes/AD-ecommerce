import React from 'react';

interface CategoryCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-72 h-96 rounded-[2rem] overflow-hidden mb-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-600 text-center max-w-xs italic">
        {description}
      </p>
    </div>
  );
};

export default CategoryCard;
