import { TSnackbarProps } from "@/types/SnackbarTypes";
import { useEffect } from "react";

export default function Snackbar({
  open,
  text,
  icon: Icon,
  handleClose,
  variant,
  className,
  duration,
}: TSnackbarProps) {
  const variants = {
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500",
    info: "bg-blue-500",
  };

  const classNameProps = className ?? "";

  if (duration) {
    useEffect(() => {
      const interval = setInterval(handleClose, duration);
      return () => clearInterval(interval);
    }, []);
  }
  
  return open ? (
      <div
        className={`${variants[variant]} flex fixed top-4 right-4
          min-w-80 items-center truncate whitespace-nowrap 
          rounded-lg py-3 px-3.5 text-xs text-white shadow-md ${classNameProps}`}
      >
        {Icon && (
          <span className="mr-2 text-base" aria-hidden="true">
            <Icon className="h-5 w-5" />
          </span>
        )}
        <span className="mr-2">{text}</span>
        <div className="flex w-full justify-end">
          <button
            className="bg-transparent text-current underline"
            onClick={handleClose}
          >
            Fechar
          </button>
        </div>
      </div>
  ) : null;
}