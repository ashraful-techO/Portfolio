import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/lib/data";
import Link from "next/link";

export function Experience() {
  return (
    <Section id="experience" className="bg-slate-50 dark:bg-slate-900/40">
      <SectionHeading eyebrow="Experience" title="Where I've worked" />
      <div className="mt-10 space-y-8 border-l-2 border-slate-200 pl-6 dark:border-slate-800">
        {experience.map((e) => (

          <div key={e.role + e.company} className="relative">

            <span className="absolute -left-[1.85rem] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-indigo-600 bg-white dark:bg-slate-950" />
            <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
              {e.period}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
              {e.role}
            </h3>
            <Link href={e.company_url}>
              <p className="text-slate-600 dark:text-slate-400 underline">{e.company}</p>
            </Link>

            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600 dark:text-slate-400">
              {e.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section >
  );
}
