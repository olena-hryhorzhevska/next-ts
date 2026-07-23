'use client';

import { useAuthStore } from "@/app/lib/store/authStore";
import CategoriesMenu from "../CategoriesMenu/CategoriesMenu";
import { Category } from "@/app/lib/api/clientApi";

type Props = {
  categories: Category[];
};

export default function AuthenticatedNotesMenu({categories}: Props) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

  if (!isAuthenticated) {
    return null;
  }
  
  return (
    <li>
      <CategoriesMenu categories={categories} />
    </li>
  );
}