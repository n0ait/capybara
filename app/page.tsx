import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <div className="space-y-6 text-center">
        <h1 className={"text-6xl font-semibold text-white drop-shadow-md"}>
          Connexion
        </h1>
        <p className="text-white text-lg">
          Authentification
        </p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Se connecter
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  )
}