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
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">Browse by Category</h2>
        <p className="text-center text-gray-600 mb-10 text-lg">
          Discover campaigns that align with causes you care about
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center justify-center py-10 px-4 transition hover:shadow-lg"
            >
              <div className="bg-indigo-100 rounded-full p-5 mb-4">
                <cat.icon className="w-10 h-10 text-sky-500" />
              </div>
              <div className="font-semibold text-lg mb-1 text-gray-900">{cat.name}</div>
              <a
                href={cat.link}
                className="text-sky-600 text-sm font-medium hover:underline"
              >
                Browse Campaigns
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
