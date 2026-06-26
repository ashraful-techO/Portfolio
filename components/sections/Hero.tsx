import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50 to-white dark:from-slate-900 dark:to-slate-950" />
      <Container className="py-24 sm:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Available for opportunities
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
              Hi, I&apos;m{" "}
              <span className="text-indigo-600 dark:text-indigo-400">{profile.name}</span>
            </h1>
            <p className="mt-4 text-xl text-slate-600 dark:text-slate-400">
              {profile.role}
            </p>
            <p className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-400">
              {profile.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#projects" size="lg">
                View My Work
              </Button>
              <Button href="#contact" variant="outline" size="lg">
                Get In Touch
              </Button>
            </div>
            <SocialLinks className="mt-8" />
          </div>

          <div className="hidden lg:block">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-900 shadow-xl dark:border-slate-800">
              <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-slate-400">developer.ts</span>
              </div>
              <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-slate-300">
                <code>{`const developer = {
  name:    ${JSON.stringify(profile.name)},
  role:    ${JSON.stringify(profile.role)},
  stack:   ["React", "Next.js", "TypeScript"],
  focus:   "accessibility & performance",
  open:    true,
};`}</code>
              </pre>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
