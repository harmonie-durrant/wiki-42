export default function WikiTable({ col_names, data }) {
    return (
        <div class="overflow-x-auto">
            <table class="table">
                <thead>
                <tr className="bg-base-200">
                    {col_names.map((col_name) => (
                        <th>{col_name}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data.map((row) => (
                    <tr>
                        {row.map((col) => (
                            <td>{col}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
