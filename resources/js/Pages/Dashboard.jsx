import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import SummaryCard from "@/Components/Dashboard/SummaryCard";
import WalletCard from "@/Components/Dashboard/WalletCard";
import RecentTransactions from "@/Components/Dashboard/RecentTransactions";

import {
    Wallet,
    ArrowDownCircle,
    ArrowUpCircle,
    PiggyBank,
    Landmark,
    CreditCard,
    Smartphone,
} from "lucide-react";

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            title="Dashboard"
            subtitle="Overview of your financial activity"
        >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                <SummaryCard
                    title="Total Balance"
                    value="Rp12.500.000"
                    icon={Wallet}
                    color="emerald"
                    description="Current balance"
                />

                <SummaryCard
                    title="Income"
                    value="Rp8.200.000"
                    icon={ArrowDownCircle}
                    color="blue"
                    description="This month"
                />

                <SummaryCard
                    title="Expense"
                    value="Rp3.400.000"
                    icon={ArrowUpCircle}
                    color="red"
                    description="This month"
                />

                <SummaryCard
                    title="Saving"
                    value="Rp2.800.000"
                    icon={PiggyBank}
                    color="amber"
                    description="Current saving"
                />
            </div>

            <div className="mt-8">
                <h2 className="mb-5 text-xl font-bold text-gray-900">
                    My Accounts
                </h2>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                    <WalletCard
                        name="Cash"
                        type="Cash"
                        balance="Rp500.000"
                        icon={Wallet}
                        color="emerald"
                    />

                    <WalletCard
                        name="BCA"
                        type="Bank"
                        balance="Rp4.500.000"
                        icon={Landmark}
                        color="blue"
                    />

                    <WalletCard
                        name="DANA"
                        type="E-Wallet"
                        balance="Rp1.200.000"
                        icon={Smartphone}
                        color="sky"
                    />

                    <WalletCard
                        name="GoPay"
                        type="E-Wallet"
                        balance="Rp850.000"
                        icon={CreditCard}
                        color="purple"
                    />
                </div>
            </div>

            <div className="mt-8">
                <RecentTransactions />
            </div>
        </AuthenticatedLayout>
    );
}
