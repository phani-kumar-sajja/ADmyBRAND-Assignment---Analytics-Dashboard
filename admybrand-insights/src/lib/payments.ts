// src/lib/payments.ts
export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const payments: Payment[] = [
    { id: "728ed52f", amount: 100, status: "pending", email: "m@example.com" },
    { id: "489e1d42", amount: 125, status: "processing", email: "example@gmail.com" },
    { id: "f62b1b3e", amount: 75, status: "success", email: "test@test.com" },
    { id: "c8b4e1a0", amount: 200, status: "failed", email: "user@domain.com" },
    { id: "a1b2c3d4", amount: 150, status: "success", email: "another@example.com" },
    { id: "e5f6g7h8", amount: 50, status: "pending", email: "newuser@web.com" },
    { id: "i9j0k1l2", amount: 175, status: "processing", email: "final@customer.org" },
    { id: "m3n4o5p6", amount: 90, status: "success", email: "support@company.net" },
    { id: "q7r8s9t0", amount: 250, status: "failed", email: "billing@service.io" },
    { id: "u1v2w3x4", amount: 110, status: "pending", email: "info@business.co" },
]
