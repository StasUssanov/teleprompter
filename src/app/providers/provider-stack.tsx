import React, { FC, PropsWithChildren, useMemo } from 'react';

export type ProviderStackProps = {
  providers: FC<PropsWithChildren>[];
  children: React.ReactNode;
}

export const ProviderStack: React.FC<ProviderStackProps> = ({ providers, children }) => {
  const { Provider, remainingProviders, isFinal } = useMemo(() => {
    const [Provider, ...remainingProviders] = providers;

    return {
      Provider,
      remainingProviders,
      isFinal: providers.length === 0
    };
  }, [providers]);

  return isFinal
    ? children
    : (
      <Provider>
        <ProviderStack providers={remainingProviders}>
          {children}
        </ProviderStack>
      </Provider>
    );
};