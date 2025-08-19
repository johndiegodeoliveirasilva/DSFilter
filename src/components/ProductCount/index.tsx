import { useContext } from "react";
import { ContextCount } from "../../utils/context-count";

export default function ProductCount() {
  const { contextCount } = useContext(ContextCount);

  return (
    <>
      {contextCount > 1 ? (
        <span className="text-white text-sm">{contextCount} produto(s)</span>
      ) : (
        <span className="text-white text-sm">{contextCount} produto</span>
      )}
    </>
  );
}
