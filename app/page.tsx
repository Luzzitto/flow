"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen min-w-screen overflow-hidden flex flex-row">
      <div className="basis-1/4 border"></div>
      <div className="basis-3/4 border p-8">
        <div className="grid grid-cols-4">
          <Card>
            <CardContent>
              <CardTitle>FPV Drone</CardTitle>
              <div className="flex items-center justify-center gap-4">
                <div className="text-center">
                  <div className="text-4xl font-bold tracking-tighter tabular-nums">
                    $ 350
                  </div>
                  <div className="text-muted-foreground text-xs uppercase">
                    / $1,000
                  </div>
                </div>
              </div>
              <div className="flex-1 pt-4">
                <Progress value={33} />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="default" size="lg" className="w-full text">
                Contribute
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
