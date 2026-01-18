import ParticleNetwork from "@/components/ParticleNetwork";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background text-foreground overflow-x-hidden">
      <ParticleNetwork />
      <main className="relative z-10 flex items-center justify-center min-h-screen w-full">
        <h1 className="text-9xl font-bold text-foreground">bello</h1>
      </main>
    </div>
  );
}
