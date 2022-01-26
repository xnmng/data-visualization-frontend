import { Form, Select } from "antd";

function ArdbOptions({ handleChange, selectedSignal, signalSchema }) {
  return (
    <div>
      <Form.Item
        name="Merchant_ticker"
        label="Merchant Ticker"
        tooltip="Specify the merchant ticker(s) you want! (ardb signal only)"
        rules={[
          {
            type: "array",
            required: true,
            message: "Please select merchant ticker(s) you want!",
          },
        ]}
      >
        <Select
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="Select one or more options..."
          onChange={handleChange}
        >
          {signalSchema[selectedSignal].merchant_ticker}
        </Select>
      </Form.Item>
      <Form.Item
        name="Generation"
        label="Generation"
        tooltip="Specify the Generations(s) you want! (ardb signal only)"
        rules={[
          {
            type: "array",
            required: true,
            message: "Please select the Generations(s) you want!",
          },
        ]}
      >
        <Select
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="Select one or more options..."
          // defaultValue={['a10', 'c12']}
          onChange={handleChange}
        >
          {signalSchema[selectedSignal].generation}
        </Select>
      </Form.Item>
    </div>
  );
}

export default ArdbOptions;
