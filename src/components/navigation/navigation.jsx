import { useEffect, useRef, useState } from "react";
import {
  Container,
  ContainerOption,
  Dots,
  WrapperNavigation,
} from "./navigation.styles";

export default function Navigation({ options }) {
  const [show, setShow] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [menuRef]);

  const handleClick = (onClick) => {
    setShow(false);
    onClick();
  };
  return (
    <WrapperNavigation>
      <Dots onClick={() => setShow(!show)} src="/three-dots.svg" />
      <Container show={show} ref={menuRef} onBlur={() => setShow(false)}>
        {options.map((option, pos) => (
          <ContainerOption
            key={`menu-option-${pos}`}
            onClick={() => handleClick(option.onClick)}
          >
            {option.text}
          </ContainerOption>
        ))}
      </Container>
    </WrapperNavigation>
  );
}
