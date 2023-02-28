import { Box } from '@mui/material';
import { useAtomValue } from 'jotai';
import Draggable from 'react-draggable';
import { Carousel3dImage } from '../components';
import { PREVIEW_BG_FOLDER_PATH } from '../constants';
import { previewAtom } from '../libs/atoms';
import { centerDiv, LayerBox } from '../styled';

export const FontPreviewImageBg = () => {
  const preview = useAtomValue(previewAtom);
  return (
    <div
      id="box-image-preview"
      style={{
        backgroundImage: `url(${PREVIEW_BG_FOLDER_PATH}/background1.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'auto',
        transition: 'all 1s ease',
        position: 'relative',
      }}
    >
      <LayerBox sx={{...centerDiv}}>
        <Draggable>
          <Box
            sx={{
              position: 'absolute',
              cursor: 'move',
              zIndex: 100,
            }}
          >
            <span
              className={`shadow-${preview.color}`}
              style={{
                fontFamily: preview.font,
                color: 'white',
                fontSize: `${preview.size}px`,
              }}
              dangerouslySetInnerHTML={{ __html: preview.text }}
            />
          </Box>
        </Draggable>
      </LayerBox>

      <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%' }}>
        <Carousel3dImage />
      </Box>
    </div>
  );
};
