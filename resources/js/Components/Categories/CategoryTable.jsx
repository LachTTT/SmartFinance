import CategoryRow from "./CategoryRow";

export default function CategoryTable({ categories, onEdit, onDelete }) {
    return (
        <div className="overflow-hidden rounded-2xl border">
            <table className="w-full">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-6 py-4 text-left">Icon</th>
                        <th className="px-6 py-4 text-left">Name</th>
                        <th className="px-6 py-4 text-left">Type</th>
                        <th className="px-6 py-4 text-center">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {categories.length ? (
                        categories.map((category) => (
                            <CategoryRow
                                key={category.id}
                                category={category}
                                onEdit={onEdit}
                                onDelete={onDelete}
                            />
                        ))
                    ) : (
                        <tr>
                            <td colSpan={4} className="py-10 text-center">
                                No Categories
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
