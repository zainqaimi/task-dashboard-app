"use client";

import * as React from "react";
import { IconTrendingUp } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

import API from "@/services/api";

type OverviewData = {
  totalUsers: number;
  activeUsers: number;
  revenue: number;
  growth: number;
};

export function SectionCards() {
  const [data, setData] = React.useState<OverviewData | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get("/api/overview");
        setData(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch overview data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const cards = [
    {
      title: "Total Users",
      value: data?.totalUsers?.toLocaleString() ?? "0",
      badge: { value: "+5%", icon: <IconTrendingUp /> },
      footer: "User base growth",
      description: "Total registered users",
    },
    {
      title: "Active Users",
      value: data?.activeUsers?.toLocaleString() ?? "0",
      badge: { value: "+3%", icon: <IconTrendingUp /> },
      footer: "Active this month",
      description: "Users who logged in recently",
    },
    {
      title: "Revenue",
      value: `$${data?.revenue?.toLocaleString() ?? "0"}`,
      badge: { value: "+12%", icon: <IconTrendingUp /> },
      footer: "Revenue this month",
      description: "Total revenue generated",
    },
    {
      title: "Growth Rate",
      value: `${data?.growth ?? 0}%`,
      badge: { value: `+${data?.growth ?? 0}%`, icon: <IconTrendingUp /> },
      footer: "Month over month",
      description: "Overall growth rate",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      {loading
        ? Array.from({ length: 4 }).map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <Skeleton className="h-4 w-24 mb-2" />
                <Skeleton className="h-8 w-16 mb-2" />
                <Skeleton className="h-6 w-12" />
              </CardHeader>
              <CardFooter className="flex flex-col gap-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-24" />
              </CardFooter>
            </Card>
          ))
        : cards.map((card) => (
            <Card
              key={card.title}
              className="@container/card hover:bg-linear-to-r from-green-600 to-green-800 hover:text-white transition-colors duration-300"
            >
              <CardHeader>
                <CardDescription className="group-hover:text-white">
                  {card.title}
                </CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl group-hover:text-white">
                  {card.value}
                </CardTitle>
                <CardAction>
                  <Badge
                    variant="outline"
                    className="flex items-center gap-1 group-hover:text-white border-white"
                  >
                    {card.badge.icon}
                    {card.badge.value}
                  </Badge>
                </CardAction>
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium group-hover:text-white">
                  {card.footer} {card.badge.icon}
                </div>
                <div className="text-muted-foreground group-hover:text-white">
                  {card.description}
                </div>
              </CardFooter>
            </Card>
          ))}
    </div>
  );
}
