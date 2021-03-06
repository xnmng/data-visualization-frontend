import { Form, Select } from "antd";

function EdrpOptions({ handleChange, selectedSignal, signalSchema }) {
  return (
    <Form.Item
      name="Merchant_name"
      label="Merchant Name"
      tooltip="Specify the merchant name(s) you want! (edrp signal only)"
      rules={[
        {
          type: "array",
          required: true,
          message: "Please select merchant name(s) you want!",
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
        {signalSchema[selectedSignal].merchant_name}
      </Select>
    </Form.Item>
  );
}

export default EdrpOptions;
