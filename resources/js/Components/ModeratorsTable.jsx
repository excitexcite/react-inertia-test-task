import { Link } from "@inertiajs/react";

export default function ModeratorsTable({ moderators }) {
    const tableItems = moderators.map((moderator) => (
        <tr key={moderator.id}>
            <td>
                <Link href={route("settings.edit", moderator.id)}>
                    {moderator.id}
                </Link>
            </td>

            <td>
                <Link href={route("settings.edit", moderator.id)}>
                    {moderator.email}
                </Link>
            </td>
            <td>
                <Link href={route("settings.edit", moderator.id)}>
                    <time>
                        {new Date(moderator.created_at).toLocaleString("en-US")}
                    </time>
                </Link>
            </td>
        </tr>
    ));

    return (
        <div className="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Email</th>
                        <th>Registered</th>
                    </tr>
                </thead>
                <tbody>{tableItems}</tbody>
            </table>
        </div>
    );
}
