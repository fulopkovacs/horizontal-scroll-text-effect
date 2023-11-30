import { Section } from "~/components/Section";
import { Title } from "~/components/typography";

export default function Page() {
  return (
    <div>
      <Section>
        <Title>
          Fullstack dev with 4 years of experience and a soft spot for design.
          Building products for companies. Ex-data-engineer.
        </Title>
        <a className="flex items-center gap-3" href="https://x.com/notacheetah">
          <img className="animate-bounce-x" src="/arrow.svg" alt="arrow" />
          <Title className="underline">say hi on X (Twitter)</Title>
        </a>
      </Section>
    </div>
  );
}
