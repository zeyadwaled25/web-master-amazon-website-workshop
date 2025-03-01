export default function Divs(props) {
  return (
    <div style={{ backgroundColor: "white", height: "28rem ", width: "20rem" }}>
      <h4 style={{ fontSize: "20px" }}>{props.header}</h4>
      <div className="d-flex p-2 gap-5">
        <div>
          <div>
            <img src={props.img1} style={{ width: "100px" }} />
            <div style={{ fontSize: "14px" }}> {props.p1} </div>
          </div>
          <img src={props.img2} style={{ width: "100px" }} />
          <div style={{ fontSize: "14px" }}>{props.p3} </div>
        </div>
        <div>
          <img src={props.img3} style={{ width: "100px" }} />
          <div style={{ fontSize: "14px" }}>{props.p2} </div>
          <img src={props.img4} style={{ width: "100px" }} />
          <div style={{ fontSize: "14px" }}> {props.p4} </div>
        </div>
      </div>
      <div>
        <p style={{ fontSize: "15px ", color: " #1F8394" }}>{props.end}</p>
      </div>
    </div>
  );
}
