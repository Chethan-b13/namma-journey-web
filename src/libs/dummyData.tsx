import { FaEdit, FaTrash } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { IconType } from "react-icons";
import { FaHome, FaSuitcase, FaPlane, FaBed, FaBus, FaLandmark } from "react-icons/fa";

interface User {
  name: string;
  avatar: string;
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
    name: "Marta",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyPRXs4YhCJEqwOCyl9Vlt6pA4Zqfsu1aROA&s",
  },
  {
    name: "Artur",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrS_HIXt1Uv6NGsgTQhX3KIdpiex9VjjWwGw&s",
  },
];

export const userColumnData = [
  {
    title: "Dianna Smiley",
    subtitle: "UI/UX Designer",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyPRXs4YhCJEqwOCyl9Vlt6pA4Zqfsu1aROA&s",
    icons: [<FaEdit />, <FaTrash />],
  },
  {
    title: "Anne Brewer",
    subtitle: "Senior UX Designer",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyPRXs4YhCJEqwOCyl9Vlt6pA4Zqfsu1aROA&s",
    icons: [<FaEdit />, <FaTrash />],
  },
  {
    title: "Richard Christmas",
    subtitle: "Front-End Engineer",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyPRXs4YhCJEqwOCyl9Vlt6pA4Zqfsu1aROA&s",
    icons: [<FaEdit />, <FaTrash />],
  },
  {
    title: "Nicholas Binder",
    subtitle: "Content Marketing Manager",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyPRXs4YhCJEqwOCyl9Vlt6pA4Zqfsu1aROA&s",
    icons: [<FaEdit />, <FaTrash />],
  },
];

export const aboutMe = [
  { title: "Bio", content: "Lorem ipsum dolor sit amet..." },
  { title: "Position", content: "Theme designer at Bootstrap." },
  { title: "Phone", content: "+32112345889" },
  { title: "Location", content: "Ahmedabad, India" },
];

export const projectContribution = [
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvVSnAWs5p6im_5a7pQ70FwPEORfu5BGlzpEf4z4WG0iHMoajHApC9U6teV222-Ei1ud8&usqp=CAU",
    title: "Dropbox Design System",
    subtitle: "Project details...",
    user: users,
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvVSnAWs5p6im_5a7pQ70FwPEORfu5BGlzpEf4z4WG0iHMoajHApC9U6teV222-Ei1ud8&usqp=CAU",
    title: "Slack Figma Design UI",
    subtitle: "Project details...",
    user: users,
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvVSnAWs5p6im_5a7pQ70FwPEORfu5BGlzpEf4z4WG0iHMoajHApC9U6teV222-Ei1ud8&usqp=CAU",
    title: "Github Development",
    subtitle: "Project details...",
    user: users,
  },
];

const PeopleList: React.FC = () => {
  return (
    <div className="flex gap-10 justify-center items-center">
      <div className="flex items-center gap-2">
        <div className="flex -space-x-2 object-cover">
          {users.map((user, index) => (
            <img
              key={index}
              src={user.avatar}
              alt={user.name}
              className="size-5 rounded-full border-2 border-white shadow-md"
            />
          ))}
        </div>
        <p className="text-xs w-full">
          {users?.map((user) => user.name).join(", ")}
        </p>
      </div>

      <div>
        <button className="size-6 flex items-center justify-center border-2 rounded-full hover:bg-gray-300">
          <FiPlus className=" text-xs" />
        </button>
      </div>
    </div>
  );
};

export default PeopleList;

export const categories = [
  "Electronics",
  "Sport Equipments",
  "Furniture",
  "Software Solutions",
  "Food & Grocery",
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
export const sidebarItems: SidebarItem[] = [
  { name: "Home", icon: FaHome, active: true },
  { name: "All trips", icon: FaSuitcase },
  { name: "Travels", icon: FaPlane },
  { name: "Rooms", icon: FaBed },
  { name: "Transport", icon: FaBus },
  { name: "Attractions", icon: FaLandmark },
];