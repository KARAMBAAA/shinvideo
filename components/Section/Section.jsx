import classNames from 'classnames';
import styless from './Section.module.css';

export function Section({ children, bgClass = '', containerClass = '', extraSvg = null, id }) {
  return (
    <section id={id} className="wrapper">
      <div className={classNames(styless.box, bgClass)}>
        <div className={classNames(styless.container, containerClass)}>{children}</div>
      </div>
      {extraSvg}
    </section>
  );
}
