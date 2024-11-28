// TODO - criar template button 
interface Props {
  onClick: () => void
  children: any
  class?: string
}

export default function Button(props: Props) {

  const classButton = props.class ?? "fdd";

  return (
    <button className={classButton}
      onClick={props.onClick}> 
        {props.children} 
    </button>
  );
}