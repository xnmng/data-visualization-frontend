import { Form, Select } from "antd";

function TtsubOptions({ handleChange, tickers }) {
  return (
    <div>
      <Form.Item
        name="Gender"
        label="Gender"
        tooltip="Specify the gender(s) you want! (ttsub signal only)"
        rules={[
          {
            type: "array",
            required: true,
            message: "Please select the gender(s) you want!",
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
          {tickers}
        </Select>
      </Form.Item>
      <Form.Item
        name="Birth_year"
        label="Birth Year"
        tooltip="Specify the birth year(s) you want! (ttsub signal only)"
        rules={[
          {
            type: "array",
            required: true,
            message: "Please select birth year(s) you want!",
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
          {tickers}
        </Select>
      </Form.Item>
      <Form.Item
        name="City_trans"
        label="City Trans"
        tooltip="Specify the city trans you want! (ttsub signal only)"
        rules={[
          {
            type: "array",
            required: true,
            message: "Please select the city trans you want!",
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
          {tickers}
        </Select>
      </Form.Item>
      <Form.Item
        name="State_trans"
        label="State Trans"
        tooltip="Specify the state trans you want! (ttsub signal only)"
        rules={[
          {
            type: "array",
            required: true,
            message: "Please select the state trans you want!",
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
          {tickers}
        </Select>
      </Form.Item>
      <Form.Item
        name="Msa_trans"
        label="Msa Trans"
        tooltip="Specify the msa trans you want! (ttsub signal only)"
        rules={[
          {
            type: "array",
            required: true,
            message: "Please select the msa trans you want!",
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
          {tickers}
        </Select>
      </Form.Item>
      <Form.Item
        name="Cbsa_trans"
        label="Cbsa trans"
        tooltip="Specify the cbsa trans you want! (ttsub signal only)"
        rules={[
          {
            type: "array",
            required: true,
            message: "Please select cbsa trans you want!",
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
          {tickers}
        </Select>
      </Form.Item>
    </div>
  );
}

export default TtsubOptions;
