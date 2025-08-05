import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MainDashboardContent = () => {
  return (
    <div className="min-h-screen flex flex-1 flex-col gap-4 p-4">
      <div className="grid auto-rows-min gap-4 md:grid-cols-4">
        <Card>
          <CardHeader>
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold">Total Balance</h2>
              <span className="text-3xl font-bold">$4,250.00</span>
              <span className="text-muted-foreground text-sm">
                Updated today
              </span>
            </div>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold">Income</h2>
              <span className="text-2xl font-bold text-green-600">
                $2,500.00
              </span>
              <span className="text-muted-foreground text-sm">This month</span>
            </div>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold">Expenses</h2>
              <span className="text-2xl font-bold text-red-600">$1,200.00</span>
              <span className="text-muted-foreground text-sm">This month</span>
            </div>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold">Spending Limit</h2>
              <span className="text-2xl font-bold text-blue-600">$200.00</span>
              <span className="text-muted-foreground text-sm">This month</span>
            </div>
          </CardHeader>
        </Card>
      </div>
      <Card className="flex-1 rounded-xl">
        <CardHeader>
          <h2 className="text-lg font-semibold mb-2">Recent Transactions</h2>
          <div className="divide-y">
            <div className="flex justify-between py-2">
              <span>Groceries</span>
              <span className="text-red-600">-$120.00</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Salary</span>
              <span className="text-green-600">+$2,500.00</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Utilities</span>
              <span className="text-red-600">-$80.00</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Coffee</span>
              <span className="text-red-600">-$5.00</span>
            </div>
          </div>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Bills</CardTitle>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </div>
  );
};

export default MainDashboardContent;
