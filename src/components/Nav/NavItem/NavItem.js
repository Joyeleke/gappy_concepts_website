//add nav link
export default function NavItem({ size, text }) {
  const commonClasses = `text-base font-bold hover:border-2 border-primary rounded-xl p-2`;
  const defaultClasses = `block p-4 text-sm font-semibold`;

  return (
    <li className={size === "large" ? "" : "mb-1"}>
      <a
        className={`${commonClasses} ${size === "large" ? "" : defaultClasses}`}
        href="#i"
      >
        {text}
      </a>
    </li>
  );
}

//change color maybe of fonts?
