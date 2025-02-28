export const NavBar = () => {
  return (
    <div>
      {/*Push the button groups to either side */}
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <button>Home</button>
        </div>
        <div>
          <button>My Page</button>
          <div>!</div>
        </div>
      </div>
    </div>
  );
};
