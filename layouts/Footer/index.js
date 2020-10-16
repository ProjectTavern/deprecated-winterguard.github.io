import { StyledFooter, StyledFooterLink } from './private.Footer.styled';
import Icon, { Github } from '@/components/icons';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterLink
        href="https://github.com/winterguard"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon>
          <Github />
        </Icon>
      </StyledFooterLink>
    </StyledFooter>);
};

export default Footer;
