import React, { useState } from 'react';
import './App.css';

import StockChart from "./components/Chart";

import { Layout, Menu } from 'antd';
import {
    LineChartOutlined,
    PlusOutlined,
    DatabaseOutlined,
} from '@ant-design/icons';

import AddSignal from './components/AddSignal';
import ViewSignals from './components/ViewSignals';

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [window, setWindow] = useState("Add Signal");

    function handleChange(value) {
        setWindow(value.key)
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={["Add Signal"]} mode="inline">
                    <Menu.Item key="Add Signal" icon={<PlusOutlined />} onClick={handleChange}>
                        Add Signal
                    </Menu.Item>
                    <Menu.Item key="Chart" icon={<LineChartOutlined />} onClick={handleChange}>
                        Chart
                    </Menu.Item>
                    <Menu.Item key="View Signals" icon={<DatabaseOutlined />} onClick={handleChange}>
                        View Signals
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    {window === "Chart" && <StockChart />}
                    {window === "Add Signal" && <AddSignal />}
                    {window === "View Signals" && <ViewSignals />}
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
}

export default App;