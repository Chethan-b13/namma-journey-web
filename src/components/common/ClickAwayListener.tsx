import React, { useEffect, useRef } from "react";

interface ClickAwayListenerProps {
  onClickAway: () => void;
  children: React.ReactNode;
  className?: string;
}

const ClickAwayListener: React.FC<ClickAwayListenerProps> = ({
  onClickAway,
  children,
  className = "",
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        onClickAway();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClickAway]);

  return (
    <div ref={wrapperRef} className={className}>
      {children}
    </div>
  );
};

export default ClickAwayListener;
