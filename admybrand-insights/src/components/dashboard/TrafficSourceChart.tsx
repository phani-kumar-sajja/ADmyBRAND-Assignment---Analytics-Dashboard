// src/components/dashboard/TrafficSourceChart.tsx
"use client"

import * as React from "react"
import { Pie, PieChart, ResponsiveContainer, Tooltip, Cell, Legend } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { name: "Google", value: 400, color: "#8884d8" },
  { name: "Social Media", value: 300, color: "#82ca9d" },
  { name: "Direct", value: 300, color: "#ffc658" },
  { name: "Other", value: 200, color: "#d0ed57" },
]

export function TrafficSourceChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Traffic Sources</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Tooltip
              cursor={{ fill: "hsl(var(--muted))" }}
              contentStyle={{
                backgroundColor: "hsl(var(--background))",
                border: "1px solid hsl(var(--border))",
              }}
            />
            <Legend layout="horizontal" verticalAlign="bottom" align="center" iconSize={10} />
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              innerRadius={80} // This makes it a donut chart
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
              stroke="hsl(var(--background))"
              strokeWidth={4}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
