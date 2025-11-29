import React from "react";
import CategoryCard from "./CategoryCard";
import {
  DesignIcon,
  SalesIcon,
  MarketingIcon,
  FinanceIcon,
  TechnologyIcon,
  EngineeringIcon,
  BusinessIcon,
  HumanResourceIcon,
} from "./CategoryIcon";

function CategoryCollection() {
  const categories = [
    {
      icon: <DesignIcon />,
      title: "Design",
      jobsCount: 235,
      isHighlighted: false,
    },
    {
      icon: <SalesIcon />,
      title: "Sales",
      jobsCount: 756,
      isHighlighted: false,
    },
    {
      icon: <MarketingIcon />,
      title: "Marketing",
      jobsCount: 140,
      isHighlighted: true,
    },
    {
      icon: <FinanceIcon />,
      title: "Finance",
      jobsCount: 325,
      isHighlighted: false,
    },
    {
      icon: <TechnologyIcon />,
      title: "Technology",
      jobsCount: 436,
      isHighlighted: false,
    },
    {
      icon: <EngineeringIcon />,
      title: "Engineering",
      jobsCount: 542,
      isHighlighted: false,
    },
    {
      icon: <BusinessIcon />,
      title: "Business",
      jobsCount: 211,
      isHighlighted: false,
    },
    {
      icon: <HumanResourceIcon />,
      title: "Human Resource",
      jobsCount: 346,
      isHighlighted: false,
    },
  ];

  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              icon={category.icon}
              title={category.title}
              jobsCount={category.jobsCount}
              isHighlighted={category.isHighlighted}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryCollection;