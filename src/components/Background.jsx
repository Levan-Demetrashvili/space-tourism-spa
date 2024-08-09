const backgroundStyles = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: -1,
};
export default function Background({ src }) {
  backgroundStyles.background = `url(${src}) center center/cover no-repeat`;
  return <div style={backgroundStyles}></div>;
}
