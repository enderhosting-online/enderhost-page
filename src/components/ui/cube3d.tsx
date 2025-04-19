import './cube3d.css';

export default function Cube3d({ texture }: { texture: string }) {
  return (
    <div className="cube-wrap">
      <div className="box">
        <div className="single-box side-back">
          <img src={texture} alt="" fetchPriority="high" />
        </div>
        <div className="single-box side-top">
          <img src={texture} alt="" fetchPriority="high" />
        </div>
        <div className="single-box side-bottom">
          <img src={texture} alt="" fetchPriority="high" />
        </div>
        <div className="single-box side-left">
          <img src={texture} alt="" fetchPriority="high" />
        </div>
        <div className="single-box side-right">
          <img src={texture} alt="" fetchPriority="high" />
        </div>
        <div className="single-box side-front">
          <img src={texture} alt="" fetchPriority="high" />
        </div>
      </div>
    </div>
  );
}
