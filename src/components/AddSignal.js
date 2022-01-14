import React, { useState } from "react";
import {
    Form,
    Cascader,
    Select,
    Checkbox,
    Button,
    DatePicker,
    Row,
    Col,
} from "antd";

const { RangePicker } = DatePicker;
const { Option } = Select;

// used to filter signal (used for searching)
function filter(inputValue, path) {
    return path.some(
        (option) =>
            option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    );
}

// user will select which signal to add from available options here
const period = [
    { value: "daily", label: "daily" },
    { value: "daily", label: "daily_yoy" },
    { value: "weekly", label: "weekly" },
    { value: "weekly", label: "weekly_yoy" },
    { value: "monthly", label: "monthly" },
    { value: "monthly", label: "monthly_yoy" },
    { value: "quarterly", label: "quarterly" },
    { value: "quarterly", label: "quarterly_yoy" },
];
const signals = [
    {
        value: "tt signals",
        label: "tt signals",
        children: [
            { value: "panel1", label: "panel1", children: period },
            { value: "panel2", label: "panel2", children: period },
            { value: "panel3", label: "panel3", children: period },
        ],
    },
    {
        value: "ardb signals",
        label: "ardb signals",
        children: [{ value: "ardb_daily", label: "ardb_daily" }],
    },
    { value: "cets signals", label: "cets signals" },
    { value: "edrp signals", label: "edrp signals" },
    { value: "ttsub signals", label: "ttsub signals" },
    { value: "ttvts signals", label: "ttvts signals" },
    { value: "klpd signals", label: "klpd signals" },
    { value: "atap signals", label: "atap signals" },
];

// todo placeholder (signals); connect with backend/specify fixed values
const tickers = [];
for (let i = 10; i < 36; i++) {
    tickers.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

// todo placeholder (generations; ardb only); connect with backend/specify fixed values
const generations = [];
for (let i = 1; i <= 10; i++) {
    generations.push(i.toString());
}
// const defaultCheckedList = [];

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const AddSignal = () => {
    const [form] = Form.useForm();

    // todo placeholder (connect w backend)
    const onFinish = (values) => {
        console.log("Received values of form: ", values);
    };

    // multiple selection (companies)
    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    const [checkedList, setCheckedList] = useState([]);
    const [checkAll, setCheckAll] = useState(false);
    const [selectedSignal, setSelectedSignal] = useState("");

    const onChange = (list) => {
        setCheckedList(list);
        setCheckAll(list.length === generations.length);
    };

    const onCheckAllChange = (e) => {
        setCheckedList(e.target.checked ? generations : []);
        setCheckAll(e.target.checked);
    };

    return (
        <Form
            {...formItemLayout}
            form={form}
            name="Add Signal"
            onFinish={onFinish}
            scrollToFirstError
            style={{ padding: 24, minHeight: 360 }}
        >
            <Form.Item
                name="Signal Name"
                label="Signal Name"
                tooltip="Specify a signal to add!"
                rules={[
                    {
                        type: "array",
                        required: true,
                        message: "Please select a signal to add!",
                    },
                ]}
            >
                <Cascader options={signals} showSearch={{ filter }} onChange={(value) => { setSelectedSignal(value); console.log(value.toString()) }} />
            </Form.Item>
            <Form.Item
                name="range"
                label="Date Range"
                tooltip="Specify the start and end date you are interested in! (Optional field)"
            >
                <RangePicker />
            </Form.Item>
            <Form.Item
                name="Ticker"
                label="Ticker"
                tooltip="Specify the ticker(s) you want!"
                rules={[
                    {
                        type: "array",
                        required: true,
                        message: "Please select signals(s) you want!",
                    },
                ]}
            >
                <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Please select a ticker(s)"
                    // defaultValue={['a10', 'c12']}
                    onChange={handleChange}
                >
                    {tickers}
                </Select>
            </Form.Item>
            <Form.Item
                name="Sum"
                label="Sum"
                tooltip="Select this if you would like to sum all the generations selected! (ardb signal only)"
                rules={[
                    {
                        type: "array",
                        // required: (selectedSignal.toString() === "ardb signals,ardb_daily"),
                        message: "Please select the Generations(s) you want!",
                    },
                ]}>
                <Checkbox disabled={!(selectedSignal.toString() === "ardb signals,ardb_daily")}></Checkbox>
            </Form.Item>
            <Form.Item
                name="Generation"
                label="Generation"
                tooltip="Specify the Generations(s) you want! (ardb signal only)"
                rules={[
                    {
                        type: "array",
                        required: (selectedSignal.toString() === "ardb signals,ardb_daily"),
                        message: "Please select the Generations(s) you want!",
                    },
                ]}
            >
                {/* <Checkbox onChange={onCheckAllChange} checked={checkAll}>
                    Check all
                </Checkbox>
                <Checkbox.Group options={generations} value={checkedList} onChange={onChange} /> */}
                <Checkbox.Group disabled={!(selectedSignal.toString() === "ardb signals,ardb_daily")}>
                    <Row>
                        <Col span={8}>
                            <Checkbox value="All" style={{ lineHeight: '32px' }}>
                                All
                            </Checkbox>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <Checkbox value="A" style={{ lineHeight: '32px' }}>
                                A
                            </Checkbox>
                        </Col>
                        <Col span={8}>
                            <Checkbox value="B" style={{ lineHeight: '32px' }}>
                                B
                            </Checkbox>
                        </Col>
                        <Col span={8}>
                            <Checkbox value="C" style={{ lineHeight: '32px' }}>
                                C
                            </Checkbox>
                        </Col>
                        <Col span={8}>
                            <Checkbox value="D" style={{ lineHeight: '32px' }}>
                                D
                            </Checkbox>
                        </Col>
                        <Col span={8}>
                            <Checkbox value="E" style={{ lineHeight: '32px' }}>
                                E
                            </Checkbox>
                        </Col>
                        <Col span={8}>
                            <Checkbox value="F" style={{ lineHeight: '32px' }}>
                                F
                            </Checkbox>
                        </Col>
                    </Row>
                </Checkbox.Group>
            </Form.Item>
            <br />
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Add
                </Button>
            </Form.Item>
        </Form>
    );
};

export default AddSignal;
