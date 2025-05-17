import React from "react";
import {
  AcademicCapIcon,
  UsersIcon,
  ExclamationTriangleIcon,
  BuildingOffice2Icon,
  HeartIcon,
  BuildingLibraryIcon,
  PencilSquareIcon,
  TrophyIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";

const categories = [
  {
    name: "Medical",
    icon: HeartIcon,
    link: "#",
  },
  {
    name: "Education",
    icon: AcademicCapIcon,
    link: "#",
  },
  {
    name: "Community",
    icon: UsersIcon,
    link: "#",
  },
  {
    name: "Emergency",
    icon: ExclamationTriangleIcon,
    link: "#",
  },
  {
    name: "Animals",
    icon: HandThumbUpIcon,
    link: "#",
  },
  {
    name: "Business",
    icon: BuildingOffice2Icon,
    link: "#",
  },
  {
    name: "Creative",
    icon: PencilSquareIcon,
    link: "#",
  },
  {
    name: "Sports",
    icon: TrophyIcon,
    link: "#",
  },
];

export default function SearchByCategory() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Search by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6 justify-items-center">
          {categories.map((category) => (
            <a
              key={category.name}
              href={category.link}
              className="flex flex-col items-center group"
            >
              <span className="bg-sky-100 group-hover:bg-sky-200 text-sky-600 rounded-full p-4 mb-2 transition">
                <category.icon className="w-8 h-8" />
              </span>
              <span className="text-gray-700 font-medium group-hover:text-sky-600 transition">
                {category.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
