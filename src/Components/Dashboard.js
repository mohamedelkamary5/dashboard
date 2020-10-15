import * as React from "react";
import './../App.css';
import { Card, CardContent, CardHeader } from '@material-ui/core';

export default (props) => (
    <Card>
        <CardHeader title="administration" />
        <CardContent>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm'>
                        <div className='inner'>
                            <h4>Number User: 30 User</h4>
                        </div>
                    </div>
                    <div className='col-sm'>
                        <div className='inner'>
                            <h4>Number Posts: 30 Posts</h4>
                        </div>
                    </div>
                </div>
            </div>
        </CardContent>
    </Card>
);


