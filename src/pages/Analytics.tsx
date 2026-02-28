import AnalyticsCard from "@/components/AnalyticsCard";
import ProjectList from "@/components/ProjectCard";
import ProjectProgressCard from "@/components/ProjectProgressCard";
import ReminderCard from "@/components/ReminderCard";
import TeamCollaborationCard from "@/components/TeamCollaborationCard";
import TimeTrackerCard from "@/components/TimeTrackerCard";

export default function Analytics() {
  return (
    <div className="flex flex-wrap space-x-4 items-center justify-between">
      Analytics
      <TimeTrackerCard />
      <ProjectProgressCard />
      <TeamCollaborationCard />
      <ProjectList />
      <AnalyticsCard />
      <ReminderCard />
    </div>
  );
}
