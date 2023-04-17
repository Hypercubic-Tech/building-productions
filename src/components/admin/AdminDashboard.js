import React, { useState } from 'react';
import axiosInstance from '@/pages/api/axios';

const AdminDashboard = () => {
    const [ categoryName, setCategoryName ] = useState('');

    const addCategoryHandler = () => {
        axiosInstance.post('/api/admin/content/add_category', {
            category: categoryName
        })
        .then(res => {
            console.log(res);
        });
    };

    return (
        <>
            <input onChange={e => setCategoryName(e.target.value)} type="text" name="category" placeholder="Enter category" />
            <div onClick={addCategoryHandler}>Add</div>
        </>
    );
};

export default AdminDashboard;