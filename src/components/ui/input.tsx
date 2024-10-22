import classNames from "classnames";

interface InputProps{
    children: React.ReactNode,
    className?: string,
    label: string,
    id: string,
    placeHolder?: string
}

export const Input = ({children, className, label, id, placeHolder} : InputProps) => {
  return (
    <div className="flex flex-col gap-y-1.5">
         <label htmlFor={id}>{label}</label>
         <input type="text" id={id} name={id} className="py-2.5 px-3.5 placeholder:font-light text-sm focus:bg-backgroundLighter" placeholder={placeHolder}/>
    </div>
  );
};
