import classNames from "classnames";

export const SubHeading = ({children, className} : {children: React.ReactNode, className?: string}) => {
  return (
    <div className={classNames("text-primary font-semibold",className)}>{children}</div>
  );
};
