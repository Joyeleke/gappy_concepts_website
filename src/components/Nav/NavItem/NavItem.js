//add nav link
export default function NavItem({ size, text }) {
  const commonClasses = `text-sm text-gray-400 hover:text-gray-500`;
  const defaultClasses = `block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded`;

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
