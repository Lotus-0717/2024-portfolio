interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  clickHandler?: () => void;
  isActive?: boolean;
}

const Button = ({
  children,
  className,
  clickHandler,
  isActive,
}: ButtonProps) => {
  return (
    <button
      className={`${isActive ? "bg-black" : "bg-white/50 hover:bg-white"} relative px-5 py-2 transition-colors ${className || ""}`}
      onClick={clickHandler}
    >
      <div
        className={`${isActive ? "before:absolute before:-bottom-1 before:-right-1 before:block before:h-5 before:w-5 before:border-b-2 before:border-r-2 before:border-black before:content-[''] after:absolute after:-left-1 after:-top-1 after:block after:h-5 after:w-5 after:border-l-2 after:border-t-2 after:border-black after:content-['']" : "bg-white/50"}`}
      ></div>
      <p className={`${isActive ? "text-white" : "text-black"}`}>{children}</p>
    </button>
  );
};

export default Button;
