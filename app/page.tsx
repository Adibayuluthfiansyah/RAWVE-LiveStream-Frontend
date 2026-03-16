import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-black tracking-tight text-primary">
        RAWVE STREAM !
      </h1>
      <p className="text-muted-foreground">Welcome !</p>
      <Button size="lg" className="font-bold">
        START STREAM
      </Button>
    </div>
  );
}
