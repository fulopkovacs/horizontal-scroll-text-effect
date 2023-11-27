import { type ReactNode } from "react";
import { motion } from "framer-motion";

function Section({ children }: { children: ReactNode }) {
  return <div className="min-h-screen">{children}</div>;
}

function SectionTitle({ children }: { children: string }) {
  return (
    <h1 className="text-5xl font-medium tracking-tighter text-gray12">
      {children}
    </h1>
  );
}

function SectionSubtitle({ children }: { children: string }) {
  return (
    <p className="mt-5 text-2xl font-medium tracking-tight text-gray12">
      {children}
    </p>
  );
}

function Card({
  title,
  repo,
  text,
}: {
  title: string;
  repo: string;
  text: string;
}) {
  return (
    <motion.div
      initial={{ width: 200, height: 200 }}
      whileInView={{ width: 541, height: 432 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="rounded-lg border border-gray12 px-20 py-7 shadow-lg shadow-gray1"
    >
      <h3 className="text-2xl font-semibold tracking-tight text-gray12">
        {title}
      </h3>
      <p className="text-sm text-gray11">{repo}</p>
      <p className="text-gray11">{text}</p>
      <div className="h-[174px] w-[300px] rounded-lg" />
    </motion.div>
  );
}

export default function Page() {
  return (
    <>
      <Section>
        <SectionTitle>Scroll down</SectionTitle>
        <SectionSubtitle>This is the new version of my site</SectionSubtitle>
      </Section>
      <Section>
        <SectionTitle>#opensource</SectionTitle>
        <SectionSubtitle>Some of my open source contributions.</SectionSubtitle>
        <Card
          title="Fix blurry textures from sharp angles"
          repo="polyhaven/polyhaven.com"
          text="Increased the anisotropic value etc etc."
        />
      </Section>
    </>
  );
}
