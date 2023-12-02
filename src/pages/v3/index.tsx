import {
  type AnchorHTMLAttributes,
  type DetailedHTMLProps,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { Section } from "~/components/Section";
import {
  CardTitle,
  RepoTitle,
  SubHeading,
  Title,
} from "~/components/typography";
import { twitterLink } from "~/lib/constants";
import { cn } from "~/lib/utils";

function CardBase({
  children,
  className,
  ...props
}: {
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("rounded-xl", className)} {...props}>
      {children}
    </div>
  );
}

function ButtonLink({
  children,
  href,
  className,
  ...props
}: { children: ReactNode } & DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>) {
  return (
    <a
      href={href}
      target="_blank"
      className={cn(
        "cursor-pointer select-none rounded-lg border-none bg-gray12 px-4 py-2 text-center font-semibold text-gray1 hover:bg-gray11",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}

export default function Page() {
  return (
    <div>
      <Section className="flex min-h-screen flex-col gap-3 py-10">
        <a className="ml-auto flex w-fit items-center gap-3" href={twitterLink}>
          <img className="h-8" src="/x-logo.svg" alt="X (Twitter) logo" />
          <Title>@notacheetah</Title>
        </a>
        <div className="mt-auto max-w-xl">
          <Title>
            Fullstack dev with 4 years of experience and a soft spot for design.
            Building products for companies. Ex-data-engineer.
          </Title>
          <a className="flex items-center gap-3" href={twitterLink}>
            <img className="animate-bounce-x" src="/arrow.svg" alt="arrow" />
            <Title className="underline">say hi on X (Twitter)</Title>
          </a>
        </div>
      </Section>
      <Section className="mt-96">
        <Title>#opensource</Title>
        <SubHeading className="mt-6">
          I contribute to open-source from time to time.
        </SubHeading>
        <div
          className="mt-24 grid w-full gap-8"
          style={{
            // gridTemplateRows: "1fr 1fr 1fr",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateAreas: `
            "a a b"
            "a a c"`,
          }}
        >
          <CardBase style={{ gridArea: "a" }} className="bg-red-700 px-24 py-6">
            <CardTitle className="mb-3 block">
              Implement the Focus Range feature in the sequence editor of
              Theatre.js
            </CardTitle>
            <RepoTitle>theatre/theatre.js</RepoTitle>
            <ButtonLink href="https://github.com/theatre-js/theatre/pull/94">
              View on GitHub
            </ButtonLink>
          </CardBase>
          <CardBase
            style={{ gridArea: "b" }}
            className="aspect-square w-[210px] bg-yellow-700 p-5"
          >
            <CardTitle className="mb-3 block">
              Fix blurry textures from sharp angles
            </CardTitle>
            <RepoTitle>Poly-Haven/polyhaven.com</RepoTitle>
            <ButtonLink href="https://github.com/Poly-Haven/polyhaven.com/pull/64">
              View on GitHub
            </ButtonLink>
          </CardBase>
          <CardBase
            style={{ gridArea: "c" }}
            className="aspect-square w-[210px] bg-green-700"
          >
            <CardTitle>Check my GitHub for more</CardTitle>
            <RepoTitle>fulopkovacs</RepoTitle>
          </CardBase>
        </div>
      </Section>
    </div>
  );
}
