import React, { useState, useEffect } from "react";
import { Form, Select, Button } from "antd";
import mockGetSignalSchema from "./mockGetSignalSchema";
import OptionalOptions from "./OptionalOptions";
const { Option } = Select;
const residences = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
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

const AddSignal = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [signals, setSignals] = useState([]);
  const [signalsMap, setSignalsMap] = useState({});
  const [fields, setFields] = useState({});
  const [selectedSignal, setSelectedSignal] = useState("");
  const [selectedSubsignal, setSelectedSubsignal] = useState("");

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));

  useEffect(() => {
    async function getSignalSchema() {
      setIsLoading(true);
      let responsePromise = mockGetSignalSchema();
      let response = await responsePromise;
      let s = []; // signals (number of possible signals user can choose)
      let ss = {}; // signalsMap (given a signal what are the possible subsignals)
      let f = {}; // fields (given a subsignal what form items do we need to render)
      response.forEach((obj) => {
        // each obj represents a subsignal and its available fields
        if (obj.signal in ss) {
          ss[obj.signal].push(
            <Option key={obj.sub_signal} value={obj.sub_signal}>
              {obj.sub_signal}
            </Option>
          );
        } else {
          ss[obj.signal] = [
            <Option key={obj.sub_signal} value={obj.sub_signal}>
              {obj.sub_signal}
            </Option>,
          ];
        }
        const sub = obj.sub_signal; // store the subsignal's name before deleting it
        const cpy = obj;
        delete cpy.signal;
        delete cpy.sub_signal;
        const formItems = []; // an array of <form.item>
        f[sub] = formItems; // key: subsignal name, value: array of <Form.Item> objects to display

        for (const [key, value] of Object.entries(cpy)) {
          // (for a given subsignal) iterate through its fields
          const options = [];
          console.log(value);
          value.forEach((v) => {
            // create the options for each given field
            console.log(v);
            options.push(
              <Option key={v} value={v}>
                {v}
              </Option>
            );
          });
          formItems.push(
            <Form.Item name={key} label={key}>
              <Select>{options}</Select>
            </Form.Item>
          );
        }
      });

      for (const signal of Object.keys(ss)) {
        s.push(
          <Option key={signal} value={signal}>
            {signal}
          </Option>
        );
      }
      setSignals(s);
      setFields(f);
      setSignalsMap(ss);
      setIsLoading(false);
    }
    getSignalSchema();
  }, []);

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="add signal"
      onFinish={onFinish}
      scrollToFirstError
    >
      {isLoading && <div>loading...</div>}
      <Form.Item
        name="signal"
        label="signal"
        rules={[
          {
            required: true,
            message: "Please select a signal!",
          },
        ]}
      >
        <Select
          onChange={(value) => {
            const s = value === undefined ? "" : value;
            setSelectedSignal(s);
            if (s === "") {
              setSelectedSubsignal("");
            }
            console.log(s);
          }}
        >
          {signals}
        </Select>
      </Form.Item>

      <Form.Item
        name="sub_signal"
        label="sub signal"
        rules={[
          {
            required: true,
            message: "Please select a sub signal!",
          },
        ]}
      >
        <Select
          onChange={(value) => {
            const s = value === undefined ? "" : value;
            setSelectedSubsignal(s);
            console.log(s);
          }}
        >
          {signalsMap[selectedSignal]}
        </Select>
      </Form.Item>
      {selectedSubsignal !== "" && (
        <OptionalOptions
          selectedSubsignal={selectedSubsignal}
          fields={fields}
        />
      )}
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddSignal;
