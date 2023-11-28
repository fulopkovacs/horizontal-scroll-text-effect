import { useRef, type ReactNode, useEffect, useState } from "react";
import {
  AnimatePresence,
  delay,
  motion,
  useAnimate,
  useAnimation,
  useInView,
} from "framer-motion";

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
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const controls = useAnimation();

  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (inView && !entered) {
      void controls.start("final");
      setEntered(true);
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className="w-full">
      <AnimatePresence>
        {entered ? (
          <div className="flex w-full justify-center">
            <motion.div
              layout
              layoutId={text}
              initial={{ width: 200, height: 200, padding: "24px" }}
              animate={{ width: 541, height: 432, padding: "80px" }}
              transition={{ duration: 0.4, ease: "easeIn" }}
              className="h-[432px] w-[541px] rounded-lg border border-gray12 shadow-lg shadow-gray1"
            >
              <motion.h3
                layout
                layoutId={title + "-title"}
                className="text-2xl font-semibold tracking-tight text-gray12"
              >
                {title}
              </motion.h3>
              <p className="text-sm text-gray11">{repo}</p>
              <p className="text-gray11">{text}</p>

              <div className="h-[174px] w-[300px] rounded-lg" />
            </motion.div>
          </div>
        ) : (
          <div className="flex w-full justify-start">
            <motion.div
              layout
              layoutId={title}
              className="h-[200px] w-[200px] rounded-lg border border-gray12 p-6 shadow-lg shadow-gray1"
            >
              <motion.h3
                layoutId={title + "-title"}
                layout
                className="text-2xl font-semibold tracking-tight text-gray12"
              >
                {title}
              </motion.h3>
              <p className="text-sm text-gray11">{repo}</p>

              <div className="h-[174px] w-[300px] rounded-lg" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
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
