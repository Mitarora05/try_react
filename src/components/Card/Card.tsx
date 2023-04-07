import './Card.css';

export default function CardComponent(props: any){

    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>;

}