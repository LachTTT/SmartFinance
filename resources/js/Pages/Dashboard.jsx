import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

import SummaryCard from "@/Components/Dashboard/SummaryCard";
import WalletCard from "@/Components/Dashboard/WalletCard";
import RecentTransactions from "@/Components/Dashboard/RecentTransactions";
import BudgetProgress from "@/Components/Dashboard/BudgetProgress";
import SavingProgress from "@/Components/Dashboard/SavingProgress";
import InvestmentSummary from "@/Components/Dashboard/InvestmentSummary";

import {
    Wallet,
    ArrowDownCircle,
    ArrowUpCircle,
    PiggyBank,
} from "lucide-react";

export default function Dashboard({
    summary,
    accounts,
    transactions,
    budgets,
    savings,
    investments,
}) {
    return (
        <AuthenticatedLayout subtitle="Overview of your financial activity">
            <Head title="Dashboard" />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                <SummaryCard
                    title="Total Balance"
                    value={`Rp ${Number(summary.balance ?? 0).toLocaleString(
                        "id-ID",
                    )}`}
                    icon={Wallet}
                    color="emerald"
                    description="Current balance"
                />

                <SummaryCard
                    title="Income"
                    value={`Rp ${Number(summary.income ?? 0).toLocaleString(
                        "id-ID",
                    )}`}
                    icon={ArrowDownCircle}
                    color="blue"
                    description="Total income"
                />

                <SummaryCard
                    title="Expense"
                    value={`Rp ${Number(summary.expense ?? 0).toLocaleString(
                        "id-ID",
                    )}`}
                    icon={ArrowUpCircle}
                    color="red"
                    description="Total expense"
                />

                <SummaryCard
                    title="Saving"
                    value={`Rp ${Number(summary.saving ?? 0).toLocaleString(
                        "id-ID",
                    )}`}
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
                    {accounts.length > 0 ? (
                        accounts.map((account) => (
                            <WalletCard key={account.id} account={account} />
                        ))
                    ) : (
                        <p className="text-gray-500">No accounts found.</p>
                    )}
                </div>
            </div>

            <div className="mt-8">
                <RecentTransactions transactions={transactions} />
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-3">
                <BudgetProgress budgets={budgets} />

                <SavingProgress savings={savings} />

                <InvestmentSummary investments={investments} />
            </div>
        </AuthenticatedLayout>
    );
}
