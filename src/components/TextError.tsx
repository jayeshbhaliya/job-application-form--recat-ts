type TextErrorProps = {
  children : React.ReactNode
}

export const TextError : React.ComponentType<TextErrorProps> = (props : TextErrorProps) => {
  return <div className="error-message">{props.children}</div>;
};
