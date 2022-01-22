import Link from "next/link";

const SideMenuItem = ({ tab, link, menuOpen, setMenuOpen }) => {
  return (
    <div onClick={() => setMenuOpen(!menuOpen)}>
      <Link href={link}>{tab}</Link>
    </div>
  );
};

export default SideMenuItem;
