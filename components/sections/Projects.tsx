import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ExternalLinkIcon, GithubIcon } from "@/components/ui/icons";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        subtitle="A selection of projects I've designed and built — from analytics dashboards to creative tools."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <Card key={p.title} className="flex flex-col">
            <div className="w-full m-4">
              <img src={p.img} alt="Project Image" className="w-full h-[300px] object-cover" />
            </div>
            <div className="flex items-start justify-between gap-4">

              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {p.title}
              </h3>
              <div className="flex shrink-0 gap-2">
                {p.repo && (
                  <a
                    href={p.repo}
                    aria-label={`${p.title} source code`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 transition-colors hover:text-slate-900 dark:hover:text-white"
                  >
                    <GithubIcon className="h-5 w-5" />
                  </a>
                )}
                {p.link && (
                  <a
                    href={p.link}
                    aria-label={`${p.title} live demo`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 transition-colors hover:text-slate-900 dark:hover:text-white"
                  >
                    <ExternalLinkIcon className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
            <p className="mt-3 flex-1 text-slate-600 dark:text-slate-400">
              {p.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
