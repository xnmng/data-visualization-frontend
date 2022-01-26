import { Form, Select } from "antd";

function TickerOptions({ handleChange, selectedSignal, signalSchema }) {
  return (
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
        placeholder="Select one or more options..."
        // defaultValue={['a10', 'c12']}
        onChange={handleChange}
      >
        {signalSchema[selectedSignal].ticker} // todo fix this
      </Select>
    </Form.Item>
  );
}

export default TickerOptions;
