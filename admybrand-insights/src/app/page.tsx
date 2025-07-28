// src/app/page.tsx
"use client";

import dynamic from 'next/dynamic';
import { StatCard } from "@/components/dashboard/StatCard";
import { TrafficSourceChart } from "@/components/dashboard/TrafficSourceChart";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import { Skeleton } from '@/components/ui/skeleton';
import { DataTable } from '@/components/dashboard/data-table';
import { columns } from '@/components/dashboard/columns';
import { payments } from '@/lib/payments';

const OverviewChart = dynamic(() => 
  import('@/components/dashboard/OverviewChart').then(mod => mod.OverviewChart), 
  { 
    ssr: false,
    loading: () => <Skeleton className="w-full h-[440px]" />,
  }
);

export default function Home() {

  // In a real app, you would fetch this data from an API
  const data = payments;

  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* StatCards remain the same */}
        <StatCard title="Total Revenue" value="$45,231.89" icon={DollarSign} description="+20.1% from last month"/>
        <StatCard title="Active Users" value="+2350" icon={Users} description="+180.1% from last month"/>
        <StatCard title="Conversions" value="+12,234" icon={CreditCard} description="+19% from last month"/>
        <StatCard title="Growth Rate" value="+57.3%" icon={Activity} description="vs. previous 30 days"/>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="lg:col-span-4">
          <OverviewChart />
        </div>
        <div className="lg:col-span-3">
          <TrafficSourceChart />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Recent Transactions</h2>
        <DataTable columns={columns} data={data} />
      </div>

    </div>
  );
}
