import { useState, useCallback } from "react";

export default function useActive() {
  const [active, setActive] = useState(true);

  const handleActive = useCallback(() => {
    setActive(active ? false : true);
  }, [active]);

  return [active, handleActive];
}
