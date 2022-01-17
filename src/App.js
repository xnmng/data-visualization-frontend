import React, { useState } from "react";
import "./App.css";

import StockChart from "./components/Chart";

import { Layout, Menu } from "antd";
import {
    LineChartOutlined,
    PlusOutlined,
    DatabaseOutlined,
} from "@ant-design/icons";

import AddSignal from "./components/AddSignal";
import ViewSignals from "./components/ViewSignals";

const { Header, Content, Footer, Sider } = Layout;

const mockData = [
    {
        name: "AAPL",
        data: [
            { x: new Date("2015-08-01").getTime(), y: 123 },
            { x: new Date("2015-08-02").getTime(), y: 124 },
            { x: new Date("2015-08-03").getTime(), y: 123 },
            { x: new Date("2015-08-04").getTime(), y: 122 },
            { x: new Date("2015-08-05").getTime(), y: 121 },
        ],
        tooltip: {
            valueDecimals: 3,
        },
        // key: "AAPL"
    },
    {
        name: "BETA",
        data: [
            { x: new Date("2015-08-01").getTime(), y: 151.000 },
            { x: new Date("2015-08-02").getTime(), y: 124.789 },
            { x: new Date("2015-08-03").getTime(), y: 131 },
            { x: new Date("2015-08-04").getTime(), y: 189 },
            { x: new Date("2015-08-05").getTime(), y: 220 },
        ],
        tooltip: {
            valueDecimals: 3,
        },
        // key: "BETA"
    },
];

const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [window, setWindow] = useState("Add Signal");
    const [series, setSeries] = useState(mockData);

    function handleChange(value) {
        setWindow(value.key);
    }

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={() => setCollapsed(!collapsed)}
            >
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={["Add Signal"]} mode="inline">
                    <Menu.Item
                        key="Add Signal"
                        icon={<PlusOutlined />}
                        onClick={handleChange}
                    >
                        Add Signal
                    </Menu.Item>
                    <Menu.Item
                        key="Chart"
                        icon={<LineChartOutlined />}
                        onClick={handleChange}
                    >
                        Chart
                    </Menu.Item>
                    <Menu.Item
                        key="View Signals"
                        icon={<DatabaseOutlined />}
                        onClick={handleChange}
                    >
                        View Signals
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: "0 16px" }}>
                    {window === "Chart" && <StockChart series={series} />}
                    {window === "Add Signal" && <AddSignal data={series} setData={setSeries}/>}
                    {window === "View Signals" && (
                        <ViewSignals data={series} setData={setSeries} />
                    )}
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default App;
