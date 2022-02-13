import "./Mood.css";
const Mood = ({ showMainScreen }) => {
  return (
    <div id="mood-screen">
      <div id="body-mood">
        <button id="tasks" onClick={showMainScreen}>
          Back to Main
        </button>
        <div id="mood-of-the-day">
          <table>
            <tbody>
              <tr>
                <td>
                  <img scr=""></img>
                </td>
                <td>
                  <img scr=""></img>
                </td>
                <td>
                  <img scr=""></img>
                </td>
                <td>
                  <img scr=""></img>
                </td>
                <td>
                  <img scr=""></img>
                </td>
                <td>
                  <img scr=""></img>
                </td>
                <td>
                  <img scr=""></img>
                </td>
              </tr>
            </tbody>
          </table>

          <div id="options">
            <table>
              <tbody>
                <tr>
                  <td>
                    <button id="happy">
                      <img scr=""></img>
                    </button>
                  </td>
                  <td>
                    <button id="sad">
                      <img scr=""></img>
                    </button>
                  </td>
                  <td>
                    <button id="excited">
                      <img scr=""></img>
                    </button>
                  </td>
                  <td>
                    <button id="angry">
                      <img scr=""></img>
                    </button>
                  </td>
                  <td>
                    <button id="lonely">
                      <img scr=""></img>
                    </button>
                  </td>
                  <td>
                    <button id="sociable">
                      <img scr=""></img>
                    </button>
                  </td>
                  <td>
                    <button id="calm">
                      <img scr=""></img>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mood;
