import Link from "next/link";
import CategoriesMenu from "../CategoriesMenu/CategoriesMenu";
import { getCategories } from "@/app/lib/api";

const Header = async () => {
  const categories = await getCategories()
  return (
    <header>
      <Link href="/">NoteLab</Link>
      <nav>
        <ul>
          <li>
            <CategoriesMenu categories={categories} />
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;