import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";
import { profile } from "@/lib/data";

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: MailIcon,
} as const;

type Social = (typeof profile.socials)[number];

export function SocialLinks({
  socials = profile.socials,
  className = "",
}: {
  socials?: readonly Social[];
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socials.map((s) => {
        const Icon = iconMap[s.icon as keyof typeof iconMap];
        return (
          <a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            {Icon ? <Icon className="h-5 w-5" /> : null}
          </a>
        );
      })}
    </div>
  );
}
