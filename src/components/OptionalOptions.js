function OptionalOptions({ selectedSubsignal, fields }) {
  console.log(selectedSubsignal);
  return <div>{fields[selectedSubsignal]}</div>;
}

export default OptionalOptions;
