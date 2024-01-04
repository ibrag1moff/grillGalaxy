// react
import {
    useState,
    useEffect,
    ReactNode,
    useContext,
    createContext,
    Dispatch,
    SetStateAction,
} from "react";

interface SideBarProviderProps {
    children: ReactNode;
}

interface sideBarContext {
    sideBarActive: boolean;
    setSideBarActive: Dispatch<SetStateAction<boolean>>;
}

const sideBarContext = createContext({} as sideBarContext);

export const useSideBar = () => {
    return useContext(sideBarContext);
};

export default function SideBarProvider({ children }: SideBarProviderProps) {
    const [sideBarActive, setSideBarActive] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener("click", () => {
            setSideBarActive(false);
        });
    });

    return (
        <sideBarContext.Provider value={{ sideBarActive, setSideBarActive }}>
            {children}
        </sideBarContext.Provider>
    );
}
