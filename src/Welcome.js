function Welcome({ n }) {
  //this is a custom fuction,
  //should alsways start with capital,
  //return only one jsx ie, only one div or <>
  return (
    // <> or simply use <> so that node is created
    <div className="welc">
      {/* <h1> this is welcome component </h1> */}
      <h2> hi {n} </h2>
    </div>
  );
}
