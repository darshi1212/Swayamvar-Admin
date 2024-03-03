import React, { useEffect, useState } from 'react';

// Icons
import { FiFile } from 'react-icons/fi';

import { Card } from '~/components/Card';
import { Button } from '~/components/Button';
import { Form } from '~/components/Form';

// This styled only show buttons in row format
import styled from 'styled-components';
const Buttons = styled.div`
    display: flex;

    &.wrap {
        flex-wrap: wrap;
    }
    /* justify-content: space-around; */

    button {
        margin: 5px;
    }

`;

export default function FormsPage() {
    const [ selectedCV, setSelectedCV ] = useState();

    useEffect(() => {
        document.title = 'Forms'
    }, []);

    return (
        <>
            <div className="col-12 title">
                <h1>User Notifications</h1>
            </div>

            <div className="col-6 px-0">
                <Card>
                    <div className="card-title">
                        <h3>Send Notifications</h3>
                    </div>
                    <div className="card-body">
                        <Form>
                            <div className="input-block">
                                <label>Enter User ID</label>
                                <input type="text" placeholder=""/>
                            </div>
                            <div className="input-block">
                                <label>Message</label>
                                <textarea cols="30" rows="6" placeholder="Enter Message to Send User"></textarea>
                            </div>
                        </Form>
                    </div>
                    <div className="card-actions flex-end">
                        <Button className="success btn-circle">Send</Button>
                    </div>
                </Card>
            </div>

        </>
    );
}
