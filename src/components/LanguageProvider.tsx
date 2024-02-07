import {IntlProvider} from "react-intl";
import React, {createContext, FC, useEffect, useState} from "react";
import es from "./es";
import en from "./en";

export enum LanguageEnum {
    English = 'en',
    Spanish = 'es'
}

const locales = [ LanguageEnum.English, LanguageEnum.Spanish ];

const Languages = {
    [LanguageEnum.English]: en,
    [LanguageEnum.Spanish]: es,
}

export const LanguageContext = createContext<{
    locale: LanguageEnum;
    setLocale: (locale: LanguageEnum) => void;
}>({
    locale: LanguageEnum.English,
    setLocale: () => {}
});

const LanguageProvider: FC<{ children: React.ReactNode; }> = ({children}) => {
    const [locale, setLocale] = useState<LanguageEnum>(LanguageEnum.English);

    useEffect(() => {
        const existed = localStorage.getItem('locale');
        if (locales.includes(existed as any)) {
            setLocale(existed as any);
        }
    }, []);

    const changeLocale = (locale: LanguageEnum) => {
        setLocale(locale);
        localStorage.setItem('locale', locale);
    }

    return (
        <LanguageContext.Provider value={{locale, setLocale: changeLocale }}>
            <IntlProvider
                locale={locale}
                defaultLocale={LanguageEnum.English}
                messages={Languages[locale]}
            >
                {children}
            </IntlProvider>
        </LanguageContext.Provider>
    )
};

export default LanguageProvider;