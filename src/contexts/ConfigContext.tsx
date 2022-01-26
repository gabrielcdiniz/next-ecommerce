import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
  useCallback,
} from "react";

type ContextProps = {
  handle: (configs?: Partial<ConfigState>) => void;
};

type ProviderProps = {
  children: ReactNode;
};

type ConfigState = {
  id: string;
  name: string;
  isActive: boolean;
};

const INITIAL_CONFIGS = {
  id: String(Date.now()),
  name: "nexus",
  isActive: true,
};

export const ConfigContext = createContext({} as ContextProps);

export const ConfigContextProvider = ({ children }: ProviderProps) => {
  const [config, setConfig] = useState<ConfigState>(INITIAL_CONFIGS);

  const handle = useCallback((configs: Partial<ConfigState> = {}) => {
    console.count("[config]");
    console.log({ initial: INITIAL_CONFIGS, new: configs });
    setConfig({ ...INITIAL_CONFIGS, ...configs });
  }, []);

  useEffect(() => {
    console.log("changed configs");
    console.log(config);
  }, [config]);

  return (
    <ConfigContext.Provider value={{ handle }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  return useContext(ConfigContext);
};
