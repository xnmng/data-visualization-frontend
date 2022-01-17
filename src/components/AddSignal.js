import React, { useState } from "react";
import { Form, Cascader, Select, Button } from "antd";

const { Option } = Select;

// todo replace with actual api call to backend to fetch data (data format as seen in mockReturnData)
const mockReturnData = [
  {
    name: "GAMMA(ttsignal)",
    data: [
      { x: new Date("2015-08-01").getTime(), y: 20 },
      { x: new Date("2015-08-02").getTime(), y: 50 },
      { x: new Date("2015-08-03").getTime(), y: 70 },
      { x: new Date("2015-08-04").getTime(), y: 3.14 },
      { x: new Date("2015-08-05").getTime(), y: 99.999 },
    ],
    tooltip: {
      valueDecimals: 3,
    },
  },
];
const mockAddFunction = () => {
  return mockReturnData;
};

// used to filter signal (used for searching)
function filter(inputValue, path) {
  return path.some(
    (option) =>
      option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
  );
}

// user will select which signal to add from available options here
const signals = [
  {
    value: "tt signals",
    label: "tt signals",
    children: [
      {
        value: "panel1",
        label: "panel1",
        children: [
          { value: "tt_panel1_daily", label: "tt_panel1_daily" },
          { value: "tt_panel1_daily_yoy", label: "tt_panel1_daily_yoy" },
          { value: "tt_panel1_weekly", label: "tt_panel1_weekly" },
          { value: "tt_panel1_weekly_yoy", label: "tt_panel1_weekly_yoy" },
          { value: "tt_panel1_monthly", label: "tt_panel1_monthly" },
          { value: "tt_panel1_monthly_yoy", label: "tt_panel1_monthly_yoy" },
          { value: "tt_panel1_quarterly", label: "tt_panel1_quarterly" },
          {
            value: "tt_panel1_quarterly_yoy",
            label: "tt_panel1_quarterly_yoy",
          },
        ],
      },
      {
        value: "panel2",
        label: "panel2",
        children: [
          { value: "tt_panel1_daily", label: "tt_panel1_daily" },
          { value: "tt_panel1_daily_yoy", label: "tt_panel1_daily_yoy" },
          { value: "tt_panel1_weekly", label: "tt_panel1_weekly" },
          { value: "tt_panel1_weekly_yoy", label: "tt_panel1_weekly_yoy" },
          { value: "tt_panel1_monthly", label: "tt_panel1_monthly" },
          { value: "tt_panel1_monthly_yoy", label: "tt_panel1_monthly_yoy" },
          { value: "tt_panel1_quarterly", label: "tt_panel1_quarterly" },
          {
            value: "tt_panel1_quarterly_yoy",
            label: "tt_panel1_quarterly_yoy",
          },
        ],
      },
      {
        value: "panel3",
        label: "panel3",
        children: [
          { value: "tt_panel1_daily", label: "tt_panel1_daily" },
          { value: "tt_panel1_daily_yoy", label: "tt_panel1_daily_yoy" },
          { value: "tt_panel1_weekly", label: "tt_panel1_weekly" },
          { value: "tt_panel1_weekly_yoy", label: "tt_panel1_weekly_yoy" },
          { value: "tt_panel1_monthly", label: "tt_panel1_monthly" },
          { value: "tt_panel1_monthly_yoy", label: "tt_panel1_monthly_yoy" },
          { value: "tt_panel1_quarterly", label: "tt_panel1_quarterly" },
          {
            value: "tt_panel1_quarterly_yoy",
            label: "tt_panel1_quarterly_yoy",
          },
        ],
      },
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

const AddSignal = ({ data, setData }) => {
  const [form] = Form.useForm();

  // todo placeholder (connect w backend)
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const response = mockAddFunction();
    const newData = data.concat(response);
    setData(newData);
  };

  // multiple selection (companies)
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const [selectedSignal, setSelectedSignal] = useState("");

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
        name="Name"
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
        <Cascader
          options={signals}
          showSearch={{ filter }}
          onChange={(value) => {
            setSelectedSignal(
              value === undefined ? "" : value[value.length - 1]
            );
            console.log(value === undefined ? "" : value[value.length - 1]);
          }}
        />
      </Form.Item>
      {selectedSignal !== "" && (
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
            style={{ width: "100%" }}
            placeholder="Please select a ticker(s)"
            // defaultValue={['a10', 'c12']}
            onChange={handleChange}
          >
            {tickers}
            {/* todo place mock api call here! */}
          </Select>
        </Form.Item>
      )}
      {selectedSignal === "ardb_daily" && (
        <Form.Item
          name="Merchant_ticker"
          label="Merchant Ticker"
          tooltip="Specify the merchant ticker(s) you want! (ardb signal only)"
          rules={[
            {
              type: "array",
              required:
                selectedSignal !== undefined
                  ? selectedSignal.toString() === "ardb_daily"
                  : true,
              message: "Please select merchant ticker(s) you want!",
            },
          ]}
        >
          <Select
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder="Please select a ticker(s)"
            onChange={handleChange}
            disabled={
              selectedSignal !== undefined
                ? selectedSignal.toString() !== "ardb_daily"
                : true
            }
          >
            {tickers}
          </Select>
        </Form.Item>
      )}
      {selectedSignal === "ardb_daily" && (
        <Form.Item
          name="Generation"
          label="Generation"
          tooltip="Specify the Generations(s) you want! (ardb signal only)"
          rules={[
            {
              type: "array",
              required:
                selectedSignal !== undefined
                  ? selectedSignal.toString() === "ardb_daily"
                  : false,
              message: "Please select the Generations(s) you want!",
            },
          ]}
        >
          <Select
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder="Please select a ticker(s)"
            // defaultValue={['a10', 'c12']}
            onChange={handleChange}
            disabled={
              selectedSignal !== undefined
                ? selectedSignal.toString() !== "ardb_daily"
                : true
            }
          >
            {tickers}
          </Select>
        </Form.Item>
      )}
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
