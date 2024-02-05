import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col space-y-4 items-center justify-center">
      <h1 className="font-semibold text-4xl">Authentication App</h1>
      <p className="text-muted-foreground text-medium">One kit solution for all your authentication problems.</p>
    </div>
  );
}
