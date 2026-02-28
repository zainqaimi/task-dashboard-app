import React, { useEffect, useState } from "react";
import API from "../services/api";

interface User {
  id: number;
  name: string;
  email: string;
  status: "active" | "inactive";
  joinDate: string;
  avatar?: string;
}

const TeamCollaborationCard: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await API.get<User[]>("/api/users");
        setTeamMembers(res.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  // Map status to Tailwind colors
  const statusColorMap: Record<string, string> = {
    active: "bg-green-100 text-green-800",
    inactive: "bg-red-100 text-red-800",
  };

  const getAvatar = (name: string) => {
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
    return initials;
  };

  return (
    <div className="w-1/2 mx-auto bg-white shadow-lg rounded-lg p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center space-x-6 mb-6">
        <span className="text-xl font-semibold text-gray-800">
          Team Collaboration
        </span>
        <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
          + Add Member
        </button>
      </div>

      {/* Member List */}
      <div className="space-y-4">
        {teamMembers.length > 0 ? (
          teamMembers.map((member) => (
            <div key={member.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xl">
                  {member.avatar || getAvatar(member.name)}
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {member.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    Joined on {member.joinDate}
                  </p>
                </div>
              </div>

              {/* Status Badge */}
              <span
                className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  statusColorMap[member.status] || "bg-gray-100 text-gray-800"
                }`}
              >
                {member.status === "active" ? "Active" : "Inactive"}
              </span>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No team members found.</p>
        )}
      </div>
    </div>
  );
};

export default TeamCollaborationCard;
