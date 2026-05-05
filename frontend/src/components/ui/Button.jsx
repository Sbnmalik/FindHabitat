import "./Button.css";

export default function Button({
  children,
  variant = "primary",
  type = "button",
  disabled = false,
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`app-button app-button--${variant}`}
      {...props}
    >
      {children}
    </button>
  );
}