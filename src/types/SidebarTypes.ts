import { IconType } from "react-icons";
import {
  FiUsers,
  FiCalendar,
  FiBox,
  FiMap,
  FiCreditCard,
  FiBookmark,
  FiBriefcase,
  FiDollarSign,
} from "react-icons/fi";

export interface SidebarItem {
  name: string;
  icon: IconType;
  path: string;
  active?: boolean;
}

export const sidebarItems: SidebarItem[] = [
  {
    name: "Users",
    icon: FiUsers,
    path: "/admin/users",
    active: true,
  },
  {
    name: "Activities",
    icon: FiCalendar,
    path: "/admin/activities",
  },
  {
    name: "Activity Bookings",
    icon: FiBookmark,
    path: "/admin/activity-bookings",
  },
  {
    name: "Packages",
    icon: FiBox,
    path: "/admin/packages",
  },
  {
    name: "Package Bookings",
    icon: FiBriefcase,
    path: "/admin/package-bookings",
  },
  {
    name: "Plans",
    icon: FiMap,
    path: "/admin/plans",
  },
  {
    name: "Subscriptions",
    icon: FiCreditCard,
    path: "/admin/subscriptions",
  },
  {
    name: "Transactions",
    icon: FiDollarSign,
    path: "/admin/transactions",
  },
];
