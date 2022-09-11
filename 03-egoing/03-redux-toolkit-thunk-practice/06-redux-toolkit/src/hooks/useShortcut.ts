import {
  useCallback,
  useEffect,
  useMemo,
} from "react";

export type UseShortcutParams = {
  target?: HTMLElement;
  shortcut: string;
  callback: Function;
};

const useShortcut = ({
  target,
  shortcut,
  callback,
}: UseShortcutParams) => {
  const _target = useMemo(() => {
    return target ?? window;
  }, [target]);
  
  const onKeyup = useCallback((e: Event) => {
    const { key } = e as KeyboardEvent;

    if (shortcut === key) callback();
  }, []);

  useEffect(() => {
    _target.addEventListener("keyup", onKeyup);

    return () => {
      _target.removeEventListener("keyup", onKeyup);
    };
  }, []);
};

export default useShortcut;