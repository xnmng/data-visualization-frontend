import React, { useState } from 'react';
import './App.css';

import StockChart from "./components/StockChart";

import { Layout, Menu } from 'antd';
import {
    LineChartOutlined,
    PlusOutlined,
    DatabaseOutlined,
} from '@ant-design/icons';

import AddSignal from './components/AddSignal';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const App = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<PlusOutlined />}>
                        Add Signal
                    </Menu.Item>
                    <Menu.Item key="2" icon={<LineChartOutlined />}>
                        Chart
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<DatabaseOutlined />} title="Signals">
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <StockChart />
                    <AddSignal />
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        Bill is a cat.
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
}

export default App;