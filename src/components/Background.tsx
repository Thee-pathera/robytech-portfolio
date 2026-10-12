export default function Background() {
  return (
    <>
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37,99,235,0.22) 0%, rgba(37,99,235,0) 70%)",
          top: -200,
          right: -180,
          zIndex: -2,
          pointerEvents: "none",
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          width: 450,
          height: 450,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.16) 0%, rgba(6,182,212,0) 70%)",
          bottom: -180,
          left: -160,
          zIndex: -2,
          pointerEvents: "none",
        }}
      />
    </>
  );
}
