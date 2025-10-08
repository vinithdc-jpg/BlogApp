import React from 'react'

const SubsTableItem = ({ email, mongoId, deleteEmail, date }) => {
    const emailDate = new Date(date)
    return (
        <tr className="hover:bg-gray-50 transition-all duration-200">
            {/* Email */}
            <th
                scope="row"
                className="py-4 px-6 text-gray-800 font-medium text-sm text-left"
            >
                {email ? email : "No email"}
            </th>

            {/* Date */}
            <td className="py-4 px-6 text-gray-500 text-sm">
                {emailDate ? emailDate.toDateString() : "No date"}
            </td>

            {/* Action */}
            <td
                onClick={() => deleteEmail(mongoId)}
                className="py-4 px-6 text-center cursor-pointer text-red-500 hover:text-red-700 font-semibold text-sm transition-all"
            >
                Delete
            </td>
        </tr>

    )
}

export default SubsTableItem
