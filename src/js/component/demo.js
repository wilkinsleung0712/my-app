import React from 'react';
import {Card} from 'antd';

class Demo extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="topNewsList">

                <Card
                    title="myPhoto"
                    style={{
                    width: 400
                }}>
                    <div className="image-block">
                        <img src='http://via.placeholder.com/120x90' className="image-style"/>
                        <div className="custom-card">
                            <h3 className="card-desc">xxxxxxxxxxxxxxxxxxxx</h3>
                            <p>yyyy</p>
                        </div>
                    </div>
                    <div className="image-block">

                        <img src='http://via.placeholder.com/120x90' className="image-style"/>

                        <div className="custom-card">
                            <h3 className="card-desc">xxxxxxxxxxxxxxxxxxxx</h3>
                            <p>yyyy</p>
                        </div>
                    </div>
                    <div className="image-block">

                        <img src='http://via.placeholder.com/120x90' className="image-style"/>

                        <div className="custom-card">
                            <h3 className="card-desc">xxxxxxxxxxxxxxxxxxxx</h3>
                            <p>yyyy</p>
                        </div>
                    </div>
                    <div className="image-block">
                        <img src='http://via.placeholder.com/120x90' className="image-style"/>
                        <div className="custom-card">
                            <h3 className="card-desc">xxxxxxxxxxxxxxxxxxxx</h3>
                            <p>yyyy</p>
                        </div>
                    </div>
                    <div className="image-block">

                        <img src='http://via.placeholder.com/120x90' className="image-style"/>

                        <div className="custom-card">
                            <h3 className="card-desc">xxxxxxxxxxxxxxxxxxxx</h3>
                            <p>yyyy</p>
                        </div>
                    </div>
                    <div className="image-block">

                        <img src='http://via.placeholder.com/120x90' className="image-style"/>

                        <div className="custom-card">
                            <h3 className="card-desc">xxxxxxxxxxxxxxxxxxxx</h3>
                            <p>yyyy</p>
                        </div>
                    </div>

                </Card>
            </div>

        );
    }
}

export default Demo;