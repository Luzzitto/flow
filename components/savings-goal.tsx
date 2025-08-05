import React from "react";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const SavingsGoal = ({
  title,
  current = 0,
  total,
}: {
  title: string;
  current?: number;
  total: number;
}) => {
  const percentage = (current / total) * 100;
  const completed = percentage === 100;
  return !completed ? (
    <Card>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <div className="flex items-center justify-center gap-4">
          <div className="text-center">
            <div className="text-4xl font-bold tracking-tighter tabular-nums">
              $ {current}
            </div>
            <div className="text-muted-foreground text-xs ">
              out of ${total}
            </div>
          </div>
        </div>
        <div className="flex-1 pt-4">
          <Progress value={percentage} />
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="default" size="lg" className="w-full text">
          Contribute
        </Button>
      </CardFooter>
    </Card>
  ) : (
    <Card className="bg-primary text-primary-foreground">
      <CardContent className="flex flex-col gap-4">
        <CardTitle>{title}</CardTitle>
        <div className="grow text-center">
          <div className="text-4xl font-bold tracking-tighter tabular-nums">
            $ {current}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="secondary" size="lg" className="w-full text">
          Claim
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SavingsGoal;
