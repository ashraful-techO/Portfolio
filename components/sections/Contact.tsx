import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { MailIcon } from "@/components/ui/icons";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <Section id="contact">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-600 to-indigo-700 p-8 text-center sm:p-12 dark:border-slate-800">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Let&apos;s work together
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-100">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button
            href={`mailto:${profile.email}`}
            variant="secondary"
            size="lg"
          >
            <MailIcon className="h-5 w-5" />
            {profile.email}
          </Button>
        </div>
        <div className="mt-8 flex justify-center">
          <SocialLinks className="[&_a]:text-indigo-100 [&_a]:hover:bg-white/10 [&_a]:hover:text-white" />
        </div>
      </div>
    </Section>
  );
}
