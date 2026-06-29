import {
    LayoutDashboard,
    Wallet,
    Tags,
    ReceiptText,
    ArrowLeftRight,
    Target,
    PiggyBank,
    TrendingUp,
    User,
} from "lucide-react";

export const navigation = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },

    {
        title: "Accounts",
        href: "/accounts",
        icon: Wallet,
    },

    {
        title: "Categories",
        href: "/categories",
        icon: Tags,
    },

    {
        title: "Transactions",
        href: "/transactions",
        icon: ReceiptText,
    },

    {
        title: "Transfers",
        href: "/transfers",
        icon: ArrowLeftRight,
    },

    {
        title: "Budgets",
        href: "/budgets",
        icon: Target,
    },

    {
        title: "Savings",
        href: "/savings",
        icon: PiggyBank,
    },

    {
        title: "Investments",
        href: "/investments",
        icon: TrendingUp,
    },

    {
        title: "Profile",
        href: "/profile",
        icon: User,
    },
];
