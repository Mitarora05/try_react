import classes from './Section.module.css';

interface ISection extends React.PropsWithChildren {}

const Section: React.FC<ISection> = (props) => {
  return <section className={classes.section}>{props.children}</section>;
};

export default Section;