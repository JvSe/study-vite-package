import { ButtonToggleTheme, InputWithIcon } from "nextmed-theme2/components";
import { FiEnvelope } from "nextmed-theme2/icons";

function App() {
  return (
    <div className="nxth-flex nxth-items-center nxth-justify-center nxth-w-screen nxth-h-screen">
      <InputWithIcon icon={FiEnvelope} />
      <ButtonToggleTheme />
    </div>
  );
}

export default App;
