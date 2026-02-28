const TeamCollaborationCard = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Alexandra Deff",
      task: "Working on Github Project Repository",
      status: "Completed",
      statusColor: "bg-green-100 text-green-800",
      avatar: "😊", // Placeholder for an actual avatar component or image source
    },
    {
      id: 2,
      name: "Edwin Adenike",
      task: "Working on Integrate User Authentication System",
      status: "In progress",
      statusColor: "bg-yellow-100 text-yellow-800",
      avatar: "🤓",
    },
    {
      id: 3,
      name: "Isaac Oluwatemilorun",
      task: "Working on Develop Search and Filter Functionality",
      status: "Pending",
      statusColor: "bg-red-100 text-red-800",
      avatar: "🤓",
    },
    {
      id: 4,
      name: "David Oshodi",
      task: "Working on Responsive Layout for Homepage",
      status: "In progress",
      statusColor: "bg-yellow-100 text-yellow-800",
      avatar: "🧔",
    },
  ];
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold text-gray-800">
          Team Collaboration
        </h1>
        <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
          + Add Member
        </button>
      </div>

      {/* Member List */}
      <div className="space-y-4">
        {teamMembers.map((member) => (
          <div key={member.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Avatar Placeholder */}
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xl">
                {member.avatar}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {member.name}
                </p>
                <p className="text-xs text-gray-500">{member.task}</p>
              </div>
            </div>
            {/* Status Badge */}
            <span
              className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${member.statusColor}`}
            >
              {member.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCollaborationCard;
