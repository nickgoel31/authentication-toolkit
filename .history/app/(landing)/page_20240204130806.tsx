import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col space-y-2 items-center justify-center">
      <h1 className="font-semibold text-4xl">Authentication App</h1>
      <p className="text-muted-foreground text-medium">One kit solution for all your authentication problems.</p>

      <div className="flex items-center gap-4 pt-2">
        <Button><Link href={'/sign-in'}>Sign in</Link></Button>
        <Button><Link href={'/sign-up'}>Get Started</Link></Button>

      </div>
    </div>
  );
}
