import { motion } from "framer-motion";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { cn } from "~/lib/utils";
type CardPropsBase = {
  title: string;
  repo: string;
  setActive: (a: CardId) => void;
  cardId: CardId;
  activeCardId: number;
};

type CardId = number;

const gap = 24;
const inactiveCardWidth = 200;
const activeCardWidth = 600;

function GitMergeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="26"
      height="27"
    >
      <defs>
        <path
          id="a"
          d="M20.287 15.089c-2.282 0-4.31 1.648-4.818 3.804-4.691-.507-8.495-4.311-9.002-9.003 2.155-.634 3.804-2.536 3.804-4.818C10.27 2.282 7.988 0 5.199 0 2.409 0 0 2.156 0 4.945c0 2.41 1.648 4.311 3.804 4.945v14.075c0 .76.507 1.268 1.268 1.268.76 0 1.268-.508 1.268-1.268v-7.608c2.155 2.79 5.325 4.691 9.002 5.072.508 2.155 2.536 3.93 4.945 3.93 2.79 0 5.072-2.282 5.072-5.072s-2.282-5.198-5.072-5.198ZM2.536 4.945A2.543 2.543 0 0 1 5.072 2.41a2.543 2.543 0 0 1 2.536 2.536 2.543 2.543 0 0 1-2.536 2.536 2.543 2.543 0 0 1-2.536-2.536Zm17.751 17.752a2.543 2.543 0 0 1-2.535-2.536 2.543 2.543 0 0 1 2.535-2.536 2.543 2.543 0 0 1 2.536 2.536 2.543 2.543 0 0 1-2.536 2.536Z"
        />
      </defs>
      <g fill="none" fill-rule="evenodd" transform="translate(.36 .696)">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <use xlinkHref="#a" fill="#111" fill-rule="nonzero" />
        <g className="fill-current" mask="url(#b)">
          <path d="M-2.536-2.663h30.431v30.431h-30.43z" />
        </g>
      </g>
    </svg>
  );
}

function Card({ title, repo, setActive, cardId, activeCardId }: CardPropsBase) {
  const active = activeCardId === cardId;

  return (
    <motion.div
      onClick={() => {
        setActive(cardId);
      }}
      animate={{
        width: active ? activeCardWidth : inactiveCardWidth,
        height: active ? "400px" : "200px",
      }}
      className={cn(
        "relative h-[200px] w-[200px] flex-shrink-0 cursor-pointer rounded-xl border border-white p-6 transition-colors",
        active && "text-neutral-950"
      )}
    >
      <motion.div
        animate={{
          opacity: active ? 100 : 0,
          scaleX: active ? 1 : 0.8,
          scaleY: active ? 1 : 0.8,
        }}
        className="tw-bg-mesh-gradient-1 absolute left-0 top-0 -z-10 h-full w-full rounded-xl"
      />

      <h3 className="mb-4 text-xl tracking-tight">{title}</h3>
      <p className="text-sm">{repo}</p>
    </motion.div>
  );
}

export function Carousel() {
  const [activeCard, setActiveCard] = useState<CardId>(3);
  const parentRef = useRef<HTMLDivElement>(null);
  const [parentWidth, setParentWidth] = useState<number>(0);

  const desiredDistance = useMemo(() => parentWidth / 2, [parentWidth]);

  const offsetX = useMemo(() => {
    const cardPosition =
      activeCard * gap + activeCard * inactiveCardWidth + activeCardWidth / 2;
    const distanceFromHalfPoint = cardPosition - desiredDistance;

    const offsetX = -distanceFromHalfPoint;
    // activeCard * gap + activeCard * inactiveWidth + activeWidth / 2

    return offsetX;
  }, [desiredDistance, activeCard]);

  useLayoutEffect(() => {
    if (parentRef.current) {
      setParentWidth(parentRef.current.clientWidth);

      function updateParentWidth() {
        const parentWidth = parentRef.current?.clientWidth ?? 0;
        setParentWidth(parentWidth);
      }

      window.addEventListener("resize", updateParentWidth);

      return () => {
        window.removeEventListener("resize", updateParentWidth);
      };
    }
  }, [parentRef]);

  const data = new Array(7).fill({
    repo: "repo/repo",
    title: "title",
  }) as Array<{ title: string; repo: string }>;

  return (
    <div
      id="carousel"
      ref={parentRef}
      className="custom-class relative h-full w-full overflow-x-hidden text-white"
    >
      <div
        className="pointer-events-none absolute left-0 top-0 z-40 h-full w-full translate-x-1/2 border-l border-red-400"
        id="halfway"
      />
      <motion.div
        animate={{
          translateX: `${offsetX}px`,
        }}
        style={{ gap }}
        className={`flex h-full w-full items-center`}
      >
        {data.map((a, i) => (
          <Card
            cardId={i}
            activeCardId={activeCard}
            setActive={setActiveCard}
            key={i}
            repo={a.repo}
            title={`${a.title}-${i % 3}`}
          />
        ))}
      </motion.div>
    </div>
  );
}
