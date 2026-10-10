import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about } from "@/lib/data";

export function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="About" title="A bit about me" />
      <div className="mt-10 grid gap-10 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              {p}
            </p>
          ))}
        </div>
        <dl className="space-y-4">
          {about.facts.map((f) => (
            <div
              key={f.label}
              className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
            >
              <dt className="text-sm text-slate-500 dark:text-slate-400">{f.label}</dt>
              <dd className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
