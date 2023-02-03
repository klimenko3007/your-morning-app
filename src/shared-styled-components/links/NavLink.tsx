import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

type NavLinkStyledProps = {
  link: string;
  children: JSX.Element;
};

const NavLinkStyled = ({ link, children }: NavLinkStyledProps) => {
  return <Link to={link}>{children}</Link>;
};

export default NavLinkStyled;

const Link = styled(NavLink)`
  color: var(--persian-pink);
  &.active {
    color: var(--alice-blue);
  }
`;
