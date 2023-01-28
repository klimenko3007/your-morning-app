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
  color: var(--macaroni-and-cheese);
  &.active {
    color: var(--celadon);
  }
`;
