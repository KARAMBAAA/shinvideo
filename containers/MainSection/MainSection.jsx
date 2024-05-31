import { FormCard, Section } from '../../components';
import styless from './MainSection.module.css';

export function MainSection(props) {
  return (
    <Section
      bgClass={styless.main}
      extraSvg={
        <svg
          className={styless.svg}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
          height="100px"
          width="100%"
        >
          <path d="M0 10 0 0 A 90 59, 0, 0, 0, 100 0 L 100 10 Z" />
        </svg>
      }
      id="booking"
    >
      <FormCard />
    </Section>
  );
}
