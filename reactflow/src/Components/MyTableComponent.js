import React from 'react';
import DropdownMenu from './Dropdown'; // make sure the path is correct based on your project structure

const MyTableComponent = () => {
    return (
        <table className="min-w-full">
            <thead>
                <tr>
                    <th className="px-4 py-2">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="px-4 py-2 border-b">
                        <DropdownMenu />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default MyTableComponent;
