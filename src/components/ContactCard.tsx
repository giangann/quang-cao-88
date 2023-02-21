import { black } from '../constants';
import { MulishTypo, ShadowBox } from '../styled';

type ContactCardProps = {
  title: string;
  children: React.ReactElement;
} & React.CSSProperties;

export const ContactCard = (props: ContactCardProps) => {
  const { title, children, ...extraProps } = props;
  return (
    <ShadowBox p={4} sx={{ ...extraProps }}>
      <MulishTypo
        sx={{
          textTransform: 'uppercase',
          mb: 4,
          fontSize: { xs: 22, sm: 26 },
          color: black['900'],
          fontWeight: 900,
        }}
      >
        {title}
      </MulishTypo>
      {children}
    </ShadowBox>
  );
};
