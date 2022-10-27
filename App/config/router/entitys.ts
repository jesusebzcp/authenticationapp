export type NavigationProps = {
  setOptions(arg0: {title: string}): unknown;
  navigate: (value: string, params?: any) => void;
  goBack: () => void;
  dispatch: (value: any) => void;
};
