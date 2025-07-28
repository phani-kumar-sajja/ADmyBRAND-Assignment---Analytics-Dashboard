// src/components/dashboard/RecentSales.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function RecentSales() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
        <CardDescription>You made 265 sales this month.</CardDescription>
      </CardHeader>
      <CardContent>
        {/* We will add content here later */}
        <p>Placeholder for recent sales list...</p>
      </CardContent>
    </Card>
  )
}
