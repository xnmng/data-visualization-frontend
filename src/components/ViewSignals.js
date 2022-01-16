import React, { useState } from "react";
import { Table, Button } from "antd";

const columns = [
    {
        title: "Ticker",
        dataIndex: "name",
        render: (text) => <a>{text}</a>,
    },
    // {
    //     title: "Age",
    //     dataIndex: "age",
    // },
    // {
    //     title: "Address",
    //     dataIndex: "address",
    // },
];
const data = [
    {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
    },
    {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
    },
    {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
    },
    {
        key: "4",
        name: "Disabled User",
        age: 99,
        address: "Sidney No. 1 Lake Park",
    },
]; // rowSelection object indicates the need for row selection

// todo data state should be imported
function ViewSignals({ data, setData }) {
    const [currentData, setCurrentData] = useState(data.map((element) => { return { ...element, key: element.name } }));
    const [selectedKeys, setSelectedKeys] = useState([]);

    // handles selection in table
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(
                `selectedRowKeys: ${selectedRowKeys}`,
                "selectedRows: ",
                selectedRows
            );
            const selectedArr = selectedRowKeys.toString().split(",");
            setSelectedKeys(selectedArr);
        },
    };

    return (
        <div>
            <Table
                rowSelection={{
                    type: "checkbox",
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={currentData}
            />
            <br />
            <Button
                type="primary"
                onClick={() => {
                    let curData = currentData;
                    let newData = curData.filter((element) => {
                        return !selectedKeys.includes(element.name);
                    });
                    setCurrentData(newData);
                    setData(newData)
                }}
            >
                Remove
            </Button>

            {/* <span style={{ marginLeft: 8 }}>
                {hasSelection ? `Selected ${selectedKeys.length} items` : ''}
            </span> */}
        </div>
    );
}

export default ViewSignals;
