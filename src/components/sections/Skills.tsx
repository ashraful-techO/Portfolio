import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <Section id="skills" className="bg-slate-50 dark:bg-slate-900/40">
      <SectionHeading
        eyebrow="Skills"
        title="Technologies I work with"
        subtitle="Here are the tools, languages, and frameworks I use to bring ideas to life."
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
          >
            <h3 className="mb-4 font-semibold text-slate-900 dark:text-white">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
