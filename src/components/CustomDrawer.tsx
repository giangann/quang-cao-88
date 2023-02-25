import { Drawer, DrawerProps, Stack } from '@mui/material';
import { useState } from 'react';

import { black } from '../constants';
import { LinkCustom, MulishTypo } from '../styled';

type BaseItemType = {
  name: string;
  link: string;
};

export type ItemType = {
  children?: ItemType[];
} & BaseItemType[];

type CustomDrawerProps = DrawerProps & {
  item: ItemType;
};

// Highlight when an item choossed
export const CustomDrawer = (props: CustomDrawerProps) => {
  const { item, open, onClose } = props;
  const [openMenu, setOpenMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };
  return (
    <Drawer
      PaperProps={{ sx: { backgroundColor: 'white', width: '50vw' } }}
      anchor="left"
      open={open}
      transitionDuration={800}
      onClose={onClose}
    >
      <Stack sx={{ px: 2, py: 4 }} spacing={2}>
        {item.map((item, index) => (
          <Stack key={index} direction="row" spacing={1.5} alignItems="center">
            <div onClick={onClose as any} aria-hidden="true" onKeyDown={onClose as any}>
              <LinkCustom href={item.link}>
                <MulishTypo color={black['900']} fontSize={15} fontWeight={500}>
                  {item.name}
                </MulishTypo>
              </LinkCustom>
            </div>

            {/* {item.children && (
              <>
                <IconButton sx={{ p: 1 }} onClick={handleClick}>
                  <CodiconTriangleDown color="white" fontSize={14} />
                </IconButton>
                <CustomMenu
                  open={openMenu}
                  onClose={handleCloseMenu}
                  item={item?.children}
                  anchorEl={anchorEl}
                />
              </>
            )} */}
          </Stack>
        ))}
      </Stack>
    </Drawer>
  );
};
