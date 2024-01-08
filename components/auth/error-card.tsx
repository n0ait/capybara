import { Header } from "@/components/auth/header";
import {
  Card,
  CardFooter,
  CardHeader
} from "@/components/ui/card";

export const ErrorCard = () => {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <Header title="" label="Une erreur est survenue :("  />
      </CardHeader>

    </Card>
  )
}