import { Section } from "~/components/Section";
import { Title } from "~/components/typography";
import { twitterLink } from "~/lib/constants";

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
    </div>
  );
}
