import { Service } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300 border-muted">
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-2">
          {service.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
          {service.features.length > 3 && (
            <div className="text-xs text-muted-foreground pl-6 pt-1">
              +{service.features.length - 3} more features
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-4 border-t bg-muted/5">
        <Button asChild className="w-full group" variant="ghost">
          <Link href={`/services/${service.slug}`} className="flex items-center justify-between" prefetch={false}>
            View Details
            <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
