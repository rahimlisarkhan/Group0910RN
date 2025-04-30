import { createContext, useContext, useState } from 'react';

export interface GlobalContextType {
  isDarkMode: boolean;
  isLoading: boolean;
  isLoggedIn: boolean;
  toggleDarkMode: () => void;
  toggleLoading: () => void;
  toggleLogin: () => void;
  addProduct: (product: any) => void;
  products: any[];
}

export interface GlobalProviderProps {
  children: React.ReactNode;
}

export const GlobalContext = createContext<GlobalContextType | null>(null);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [products, setProducts] = useState<any[]>([]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const toggleLoading = () => {
    setIsLoading((prev) => !prev);
  };

  const toggleLogin = () => {
    setIsLoggedIn((prev) => !prev);
  };

  const addProduct = (product: any) => {
    setProducts((prev) => [product, ...prev]);
  };

  return (
    <GlobalContext.Provider
      value={{
        isDarkMode,
        isLoading,
        isLoggedIn,
        toggleDarkMode,
        toggleLoading,
        toggleLogin,
        addProduct,
        products,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};
