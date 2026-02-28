import React from "react";
import {
  Briefcase,
  TrendingUp,
  Settings,
  Zap,
  CheckCircle,
} from "lucide-react"; // Example icons

// Define the type for a single project item
interface ProjectItem {
  id: number;
  title: string;
  dueDate: string;
  icon: React.ElementType; // Type for the icon component
  iconColor: string; // Tailwind color class for the icon background
}

// Sample dynamic data
const projects: ProjectItem[] = [
  {
    id: 1,
    title: "Develop API Endpoints",
    dueDate: "Nov 26, 2024",
    icon: Briefcase,
    iconColor: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Onboarding Flow",
    dueDate: "Nov 28, 2024",
    icon: TrendingUp,
    iconColor: "bg-teal-100 text-teal-600",
  },
  {
    id: 3,
    title: "Build Dashboard",
    dueDate: "Nov 30, 2024",
    icon: Settings,
    iconColor: "bg-green-100 text-green-600",
  },
  {
    id: 4,
    title: "Optimize Page Load",
    dueDate: "Dec 5, 2024",
    icon: Zap,
    iconColor: "bg-orange-100 text-orange-600",
  },
  {
    id: 5,
    title: "Cross-Browser Testing",
    dueDate: "Dec 6, 2024",
    icon: CheckCircle,
    iconColor: "bg-purple-100 text-purple-600",
  },
];

// Reusable ProjectCard Component
const ProjectCard: React.FC<{ project: ProjectItem }> = ({ project }) => {
  const Icon = project.icon;
  return (
    <div className="flex items-center space-x-4 p-4 hover:bg-gray-50 cursor-pointer">
      {/* Icon Container */}
      <div className={`p-2 rounded-lg ${project.iconColor}`}>
        <Icon className="w-5 h-5" />
      </div>

      {/* Text Content */}
      <div>
        <p className="text-sm font-medium text-gray-800">{project.title}</p>
        <p className="text-xs text-gray-500">Due date: {project.dueDate}</p>
      </div>
    </div>
  );
};

// Main Component to render the list
const ProjectList: React.FC = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
      {/* Header Section */}
      <div className="p-4 flex justify-between items-center border-b border-gray-200">
        <h1 className="text-xl font-semibold text-gray-900">Project</h1>
        <button className="flex items-center px-3 py-1 text-sm font-medium text-blue-600 border border-blue-300 rounded-lg hover:bg-blue-50">
          + New
        </button>
      </div>

      {/* List of Projects */}
      <div className="divide-y divide-gray-100">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
