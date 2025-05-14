import { IconType } from "react-icons";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string;
  roles: string[];
  joined: string;
}

export interface ColumnData {
  avatar?: string;
  title?: string;
  subtitle?: string;
  content?: string;
  icons?: React.ReactNode[];
}

export interface CardProps {
  header?: string;
  columns?: ColumnData[];
  columnCount?: number;
  footer?: React.ReactNode;
}

export const users: User[] = [
  {
    id: "1",
    firstName: "Marta",
    lastName: "S",
    email: "marta@example.com",
    phone: "123-456-7890",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyPRXs4YhCJEqwOCyl9Vlt6pA4Zqfsu1aROA&s",
    roles: ["User"],
    joined: "2024-01-01",
  },
  {
    id: "2",
    firstName: "Artur",
    lastName: "K",
    email: "artur@example.com",
    phone: "123-456-7891",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrS_HIXt1Uv6NGsgTQhX3KIdpiex9VjjWwGw&s",
    roles: ["User"],
    joined: "2024-01-02",
  },
];

export const priceRanges = ["All", "0$ - 99$", "100$ - 999$", "1000$ & Above"];

export const sizes = ["XS", "S", "M", "L", "XL"];

export const colors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-cyan-500",
  "bg-black",
  "bg-gray-400",
];

// Define User Type (Based on Mongoose Schema)
export interface UserTableData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  profilePic?: string;
  role: string[];
  lastLogin?: string;
}

// Sample User Data
export const usersTable: UserTableData[] = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    phone: "+123456789",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    role: ["Traveler"],
    lastLogin: "2025-02-10",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    email: "janesmith@example.com",
    phone: "+987654321",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
    role: ["Admin"],
    lastLogin: "2025-02-12",
  },
  {
    firstName: "Mike",
    lastName: "Johnson",
    email: "mikejohnson@example.com",
    phone: "+1122334455",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    role: ["Manager"],
    lastLogin: "2025-02-11",
  },
];

// Sidebar Item Type
export interface SidebarItem {
  name: string;
  icon: IconType;
  active?: boolean;
}

// Props Type
export interface SideBarListProps {
  items: SidebarItem[];
}

// Example Usage
// export const sidebarItems: SidebarItem[] = [
//   { name: "Home", icon: FaHome, active: true },
//   { name: "All trips", icon: FaSuitcase },
//   { name: "Travels", icon: FaPlane },
//   { name: "Rooms", icon: FaBed },
//   { name: "Transport", icon: FaBus },
//   { name: "Attractions", icon: FaLandmark },
// ];

//data table

export const usersData = [
  {
    profilePic: "",
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    role: ["Admin"],
    lastLogin: "2024-02-15",
  },
  {
    profilePic: "",
    firstName: "Jane",
    lastName: "Smith",
    email: "jane@example.com",
    phone: "987-654-3210",
    role: ["User"],
    lastLogin: "2024-02-14",
  },
];

// // Define the types for the props
// export type Column = {
//   label: string;
//   accessor: string;
//   type?: "image" | "array";
// };

// export type DataTableProps = {
//   data: Array<Record<string, any>>;
//   columns: Column[];
//   title?: string;
// };

// export const userColumns: Column[] = [
//   { label: "Profile", accessor: "profilePic", type: "image" },
//   { label: "First Name", accessor: "firstName" },
//   { label: "Last Name", accessor: "lastName" },
//   { label: "Email", accessor: "email" },
//   { label: "Phone", accessor: "phone" },
//   { label: "Role", accessor: "role", type: "array" },
//   { label: "Last Login", accessor: "lastLogin" },
// ];

export interface Column {
  label: string;
  accessor: string;
  type?: "text" | "image" | "array" | "date" | "custom";
  customRenderer?: (item: any) => React.ReactNode; // For custom rendering logic
}

export interface DataTableProps {
  data: any[];
  columns: Column[];
  title?: string;
  onPageChange?: (page: number) => void;
  page?: number;
}

export const columns: Column[] = [
  { label: "User", accessor: "name", type: "text" },
  { label: "Email", accessor: "email", type: "text" },
  { label: "Phone", accessor: "phone", type: "text" },
  { label: "Roles", accessor: "roles", type: "array" },
  {
    label: "Avatar",
    accessor: "avatarUrl",
    type: "image",
  },
  {
    label: "Joined",
    accessor: "joinedAt",
    type: "date",
  },
];

export const dummyUsers: User[] = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9wUHRDiKgRh-PeAdt7x2ooym7wS7-QeY2OA&s",
    roles: ["Admin"],
    joined: "2024-01-01",
  },
  // Add more dummy users as needed
];
