import {
  Button,
  ButtonProps,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components";
import { useTheme } from "@/context";
import { Moon, Sun } from "@/icons";

interface IButtonToggleThemeDTO extends ButtonProps {}

function ButtonToggleTheme({ ...rest }: IButtonToggleThemeDTO) {
  const { setTheme, theme = "light" } = useTheme();

  return (
    <div className="nxth-absolute nxth-bottom-2 nxth-right-0">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Button
              variant="clean"
              size="clean"
              className="nxth-mr-[1rem] nxth-p-2 nxth-shadow-none nxth-bg-[#CBE2EE] hover:nxth-brightness-90 dark:nxth-bg-transparent hover:nxth-bg-accent dark:nxth-border dark:nxth-border-[#7C7C7C]"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              {...rest}
            >
              {theme === "light" ? (
                <Moon size={20} color="#0D2943" />
              ) : (
                <Sun size={20} color="#FCB937" />
              )}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Alterar tema</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export { ButtonToggleTheme };
