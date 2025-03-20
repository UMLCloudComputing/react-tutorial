export function NavBar() {
  return (
    <div style={{position: "fixed", top: 0, minWidth: "100%", minHeight: "10%", zIndex: 10, backgroundColor: "white"}}>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "0.5em", alignItems: "center"}}>
        <button>Home</button>
        <h3 style={{margin: 0}}>Our Members</h3>
        <button>Settings</button>
      </div>
      <hr/>
    </div>
  );
};
