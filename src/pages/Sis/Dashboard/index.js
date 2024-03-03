import React, { useEffect } from 'react';

// Icons
import {  FiMessageCircle, FiUsers } from 'react-icons/fi';

import { CardDashboard, Card } from '~/components/Card';
import { Table } from '~/components/Table';

import { getToken } from '~/services/auth';

const config = {
    headers: {
        'Authorization': `Bearer ${getToken}`
    }
};

let array = [
    {
        id: 1,
        name: 'Ajay Sarode',
    },
    {
        id: 2,
        name: 'Darshita Amrutiya',
    },
    {
        id: 3,
        name: 'Chakshu Bhut',
    },
    {
        id: 4,
        name: 'Rahul Patil',
    },
    {
        id: 5,
        name: 'Ishita Sharma',
    },

]

export default function Dashboard() {
    useEffect(() => {
        document.title = 'Dashboard'
    }, []);

    return (
        <>
            <div className="col-12 title">
                <h1>Swayamvar Admin Dashboard</h1>
            </div>
            <div className="col-3 px-0">
                <CardDashboard className="orange">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <div className="title">New Users</div>
                                <div className="number pulsate">89</div>
                            </div>
                            <div className="col-auto">
                                <FiUsers size="3em" />
                            </div>
                        </div>
                    </div>
                </CardDashboard>
            </div>
            <div className="col-3 px-0">
                <CardDashboard className="green">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <div className="title">Feedback</div>
                                <div className="number pulsate">15</div>
                            </div>
                            <div className="col-auto">
                                <FiMessageCircle size="3em" />
                            </div>
                        </div>
                    </div>
                </CardDashboard>
            </div>

            <div className="col-12 px-0">
                <Card className="red">
                    <div className="card-title">
                        <h3>New Users</h3>
                    </div>
                    <div className="card-body">
                        <Table>
                            <thead>
                                <tr>
                                    <th className="col-1">#</th>
                                    <th className="col-8">Name</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {array.map(item => (
                                    <tr>
                                        <td style={{ textAlign: 'center' }}>{ item.id }</td>
                                        <td style={{ textAlign: 'center' }}>{ item.name }</td>
                                        <td style={{ textAlign: 'center' }}>
                                            <button className="edit">
                                                Edit
                                            </button>
                                            <button className="info">
                                                Info
                                            </button>

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </Card>
            </div>
        </>
    );
}
