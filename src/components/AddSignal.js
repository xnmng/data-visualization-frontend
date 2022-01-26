import React, { useState, useEffect } from "react";
import { Form, Cascader, Select, Button } from "antd";

import ArdbOptions from "./ArdbOptions";
import EdrpOptions from "./EdrpOptions";
import TtsubOptions from "./TtsubOptions";
import TickerOptions from "./TickerOptions";

import oldMockGetSignalSchema from "./oldMockGetSignalSchema";

const { Option } = Select;

// todo mock function; replace with actual API endpoint
const mockReturnData = {
  name: "GAMMA(ttsignal)", //todo refactor to support title as opposed to name
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
};

function mockGetPlotQuery() {
  return mockReturnData;
}

// todo placeholder (signals); connect with backend/specify fixed values
const tickers = [];
for (let i = 10; i < 36; i++) {
  tickers.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

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
          { value: "tt_panel2_daily", label: "tt_panel2_daily" },
          { value: "tt_panel2_daily_yoy", label: "tt_panel2_daily_yoy" },
          { value: "tt_panel2_weekly", label: "tt_panel2_weekly" },
          { value: "tt_panel2_weekly_yoy", label: "tt_panel2_weekly_yoy" },
          { value: "tt_panel2_monthly", label: "tt_panel2_monthly" },
          { value: "tt_panel2_monthly_yoy", label: "tt_panel2_monthly_yoy" },
          { value: "tt_panel2_quarterly", label: "tt_panel2_quarterly" },
          {
            value: "tt_panel2_quarterly_yoy",
            label: "tt_panel2_quarterly_yoy",
          },
        ],
      },
      {
        value: "panel3",
        label: "panel3",
        children: [
          { value: "tt_panel3_daily", label: "tt_panel3_daily" },
          { value: "tt_panel3_daily_yoy", label: "tt_panel3_daily_yoy" },
          { value: "tt_panel3_weekly", label: "tt_panel3_weekly" },
          { value: "tt_panel3_weekly_yoy", label: "tt_panel3_weekly_yoy" },
          { value: "tt_panel3_monthly", label: "tt_panel3_monthly" },
          { value: "tt_panel3_monthly_yoy", label: "tt_panel3_monthly_yoy" },
          { value: "tt_panel3_quarterly", label: "tt_panel3_quarterly" },
          {
            value: "tt_panel3_quarterly_yoy",
            label: "tt_panel3_quarterly_yoy",
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
  {
    value: "cets signals",
    label: "cets signals",
    children: [{ value: "cets_daily", label: "cets_daily" }],
  },
  {
    value: "edrp signals",
    label: "edrp signals",
    children: [{ value: "edrp_daily", label: "edrp_daily" }],
  },
  {
    value: "ttsub signals",
    label: "ttsub signals",
    children: [{ value: "ttsub_daily", label: "ttsub_daily" }],
  },
  {
    value: "ttvts signals",
    label: "ttvts signals",
    children: [
      { value: "ttvts_daily", label: "ttvts_daily" },
      { value: "ttvts_weekly", label: "ttvts_weekly" },
      { value: "ttvts_weekly_yoy", label: "ttvts_weekly_yoy" },
      { value: "ttvts_monthly", label: "ttvts_monthly" },
      { value: "ttvts_monthly_yoy", label: "ttvts_monthly_yoy" },
      { value: "ttvts_quarterly", label: "ttvts_quarterly" },
      {
        value: "tt_quarterly_yoy",
        label: "tt_quarterly_yoy",
      },
    ],
  },
  {
    value: "klpd signals",
    label: "klpd signals",
    children: [{ value: "klpd_daily", label: "klpd_daily" }],
  },
  {
    value: "atap signals",
    label: "atap signals",
    children: [
      {
        value: "atap_rank_google_play_daily",
        label: "atap_rank_google_play_daily",
      },
      {
        value: "atap_rank_itunes_connect_daily",
        label: "atap_rank_itunes_connect_daily",
      },
      {
        value: "atap_est_google_play_daily",
        label: "atap_est_google_play_daily",
      },
      {
        value: "atap_est_itunes_connect_daily",
        label: "atap_est_itunes_connect_daily",
      },
    ],
  },
];

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
    console.log("Received values of form: ");
    console.log(values);

    // processing response
    const response = mockGetPlotQuery();
    response.name = response.title;
    delete response.title;

    const newData = data.concat(response);
    setData(newData);
  };

  // multiple selection (companies)
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  useEffect(() => {
    async function getSignalSchema() {
      setIsLoading(true);
      let responsePromise = oldMockGetSignalSchema();
      let response = await responsePromise;
      let schema = {};
      response.forEach((e) => {
        const obj = e.fields; // fields object
        const newObj = {};
        for (const [key, value] of Object.entries(obj)) {
          // key: name of field, value: content (Array)
          let optionArr = [];
          value.forEach((v) => {
            optionArr.push(<Option key={v}>{v}</Option>);
          });
          newObj[key] = optionArr;
        }
        schema[e.name] = newObj;
      });
      setSignalSchema(schema);
      setIsLoading(false);
    }
    getSignalSchema();
  }, []);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSignal, setSelectedSignal] = useState("");
  const [signalSchema, setSignalSchema] = useState([]);

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="Add Signal"
      onFinish={onFinish}
      scrollToFirstError
      style={{ padding: 24, minHeight: 360 }}
    >
      {isLoading && <div>loading...</div>}
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
            const signal = value === undefined ? "" : value[value.length - 1];
            setSelectedSignal(signal);
          }}
          placeholder="Select a signal..."
          disabled={isLoading}
        />
      </Form.Item>
      {selectedSignal !== "" && (
        <TickerOptions
          handleChange={handleChange}
          selectedSignal={selectedSignal}
          signalSchema={signalSchema}
        />
      )}
      {selectedSignal === "ardb_daily" && (
        <ArdbOptions
          handleChange={handleChange}
          selectedSignal={selectedSignal}
          signalSchema={signalSchema}
        />
      )}
      {selectedSignal === "edrp_daily" && (
        <EdrpOptions
          selectedSignal={selectedSignal}
          signalSchema={signalSchema}
          handleChange={handleChange}
        />
      )}
      {selectedSignal === "ttsub_daily" && (
        <TtsubOptions
          selectedSignal={selectedSignal}
          signalSchema={signalSchema}
          handleChange={handleChange}
        />
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
