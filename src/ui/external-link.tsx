interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const ExternalLink = (props: Props) => {
  return (
    <a
      href={props.href}
      rel="noreferrer"
      target="_blank"
      className={props.className}
    >
      {props.children}
    </a>
  );
};

export default ExternalLink;
